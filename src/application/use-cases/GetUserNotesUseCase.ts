import { Note } from "../../domain/entities/Note";
import { NotesRepository } from "../../domain/repositories/NotesRepository";

export class GetUserNotesUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}

    async exec(userId: number): Promise<Note[]> {
        return this.notesRepository.findByAuthorId(userId);
    }
}
