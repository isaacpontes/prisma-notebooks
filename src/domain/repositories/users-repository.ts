import { User } from "../entities/User";

export interface CreateUserDto {
    email: string
    password: string
    name: string | null
}

export interface UpdateUserDto {
    email?: string
    password?: string
    name?: string
}

export interface UsersRepository {
    findAll: () => Promise<User[]>,
    findById: (id: number) => Promise<User | null>,
    findByEmail: (email: string) => Promise<User | null>,
    save: (user: CreateUserDto) => Promise<User>,
    update: (id: number, user: UpdateUserDto) => Promise<void>,
    delete: (id: number) => Promise<void>
}