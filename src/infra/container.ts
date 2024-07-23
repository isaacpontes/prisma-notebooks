import { AuthController } from "../application/controllers/AuthController";
import { LoginUserUseCase } from "../application/use-cases/LoginUserUseCase";
import { RegisterUserUseCase } from "../application/use-cases/RegisterUserUseCase";
import { UsersPostgreRepository } from "./database/repositories/UsersPostgreRepository";
import { BcryptAdapter } from "./helpers/BcryptAdapter";
import { JwtAdapter } from "./helpers/JwtAdapter";

const encryptor = new BcryptAdapter();
const tokenManager = new JwtAdapter();
const usersRepository = new UsersPostgreRepository();

const registerUseCase = new RegisterUserUseCase(
  usersRepository,
  encryptor
);
const loginUseCase = new LoginUserUseCase(
  usersRepository,
  encryptor,
  tokenManager
);

const authController = new AuthController(loginUseCase, registerUseCase)

export { authController }

