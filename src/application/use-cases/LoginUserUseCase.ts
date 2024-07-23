import { Encryptor } from "../../domain/helpers/Encryptor";
import { TokenManager } from "../../domain/helpers/TokenManager";
import { UsersRepository } from "../../domain/repositories/users-repository";

export class LoginUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptor: Encryptor,
    private readonly tokenManager: TokenManager
  ) {}

  async exec(email: string, password: string) {
    const userExists = await this.usersRepository.findByEmail(email);
    if (!userExists) throw new Error("user not found");

    const isValidPassword = await this.encryptor.compare(
      password,
      userExists.password
    );
    if (!isValidPassword) throw new Error("invalid credentials");

    const token = this.tokenManager.generate({ email: userExists.email });
    return token;
  }
}
