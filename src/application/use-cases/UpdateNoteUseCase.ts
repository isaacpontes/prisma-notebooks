import {
    NotesRepository,
    UpdateNoteDto,
} from "../../domain/repositories/NotesRepository";

export class UpdateNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}

    async exec(noteId: number, updatedAttributes: UpdateNoteDto) {
        await this.notesRepository.update(noteId, updatedAttributes);
    }
}
