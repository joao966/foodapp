import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_usuario" })
export class Login {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
