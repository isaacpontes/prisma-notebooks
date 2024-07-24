import { User } from "../../../domain/entities/User";
import {
    CreateUserDto,
    UpdateUserDto,
    UsersRepository,
} from "../../../domain/repositories/UsersRepository";
import { prisma } from "../prisma";

export class UsersPostgreRepository implements UsersRepository {
    private readonly prisma = prisma;

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async save(user: CreateUserDto) {
        return this.prisma.user.create({ data: user });
    }

    async update(id: number, user: UpdateUserDto) {
        await this.prisma.user.update({ where: { id }, data: user });
    }

    async delete(id: number) {
        await this.prisma.user.delete({ where: { id } });
    }
}
