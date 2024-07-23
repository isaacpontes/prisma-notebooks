import { Encryptor } from "../../domain/helpers/Encryptor";
import { UsersRepository } from "../../domain/repositories/users-repository";

export class RegisterUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptor: Encryptor
) {}

  async exec(input: { email: string; password: string; name: string | null }) {
    const userAlreadyRegistered = await this.usersRepository.findByEmail(input.email)
    if (userAlreadyRegistered) throw new Error("email already in use")
    input.password = await this.encryptor.hash(input.password)
    return this.usersRepository.save(input)
  }
}
