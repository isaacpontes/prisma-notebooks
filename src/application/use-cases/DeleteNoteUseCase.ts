import { NotesRepository } from "../../domain/repositories/NotesRepository";

export class DeleteNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}

    async exec(noteId: number) {
        await this.notesRepository.delete(noteId);
    }
}
