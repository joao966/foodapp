import { EntityTarget, DataSource } from "typeorm";

require("dotenv").config();

export class ConfigServiceClass {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  public getPort() {
    return this.getValue("PORT", true);
  }

  public isProduction() {
    const mode = this.getValue("MODE", false);
    return mode != "DEV";
  }

  public getTypeOrmConfigDefault(forJsonFile = false): any {
    const migrationsPath = "src/db/migrations/*." + (forJsonFile ? "ts" : "js");

    return {
      type: "postgres",
      host: this.getValue("POSTGRES_HOST"),
      port: parseInt(this.getValue("POSTGRES_PORT")),
      username: this.getValue("POSTGRES_USER"),
      password: this.getValue("POSTGRES_PASSWORD"),
      database: this.getValue("POSTGRES_DATABASE"),
      synchronize: false,
      entities: ["**/*.entity.js"],
      migrationsTableName: "db_migrations",
      migrations: [migrationsPath],
      cli: {
        migrationsDir: "src/db/migrations",
        entitiesDir: "src/db/models",
      },
    };
  }

  public async dinamicConnection(database: string) {
    return new DataSource({
      ...this.getTypeOrmConfigDefault(),
      database: database,
    });
  }

  public async getEntityDinamic<T = any>(
    entity: EntityTarget<T>,
    database: string
  ) {
    const connection = await this.dinamicConnection(database);
    
    return connection.initialize();
  }
}

export const ConfigService = new ConfigServiceClass(process.env)
