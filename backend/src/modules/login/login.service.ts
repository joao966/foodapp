import { Injectable } from "@nestjs/common";
import { ConfigServiceClass } from "src/config/conection/config.service";
import { CreateLoginDto } from "./dto/create-login.dto";
import { UpdateLoginDto } from "./dto/update-login.dto";

@Injectable()
export class LoginService {
  constructor(private serviceConection: ConfigServiceClass) {}

  create(createLoginDto: CreateLoginDto) {
    console.log("dto: ", createLoginDto);
    try {
      const secret = this.serviceConection.getValue("SECRET");
      const jwtConfiguration = {
        expiresIn: "12h",
        algorithm: "HS256",
      };

      // const encryptedPass = md5(CreateLoginDto.password);
      // const user = await login(email, encryptedPass);
      // const token = jwt.sign(user, secret, jwtConfiguration);
      return "login";
    } catch (error) {
      return { status: 400, message: "Erro ao fazer Login" };
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
