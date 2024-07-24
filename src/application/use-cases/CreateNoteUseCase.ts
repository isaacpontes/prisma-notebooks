import { NotesRepository } from "../../domain/repositories/NotesRepository";

export default class CreateNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}

    async exec(input: { authorId: number; title: string; content: string }) {
        return this.notesRepository.save({
            authorId: input.authorId,
            title: input.title,
            content: input.content,
            published: false,
        });
    }
}
