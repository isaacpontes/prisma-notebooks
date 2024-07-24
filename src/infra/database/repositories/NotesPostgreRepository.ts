import { Note } from "../../../domain/entities/Note";
import {
    CreateNoteDto,
    NotesRepository,
    UpdateNoteDto,
} from "../../../domain/repositories/NotesRepository";
import { prisma } from "../prisma";

export class NotesPostgreRepository implements NotesRepository {
    private readonly prisma = prisma;

    async findByAuthorId(authorId: number): Promise<Note[]> {
        return this.prisma.note.findMany({ where: { authorId } });
    }

    async save(note: CreateNoteDto): Promise<Note> {
        return this.prisma.note.create({ data: note });
    }

    async update(id: number, note: UpdateNoteDto): Promise<void> {
        await this.prisma.note.update({ where: { id }, data: note });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.note.delete({ where: { id } });
    }
}
