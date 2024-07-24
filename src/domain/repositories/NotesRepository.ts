import { Note } from "../entities/Note";

export interface CreateNoteDto {
    title: string;
    content: string;
    published: boolean;
    authorId: number;
}

export interface UpdateNoteDto {
    title?: string
    content?: string
    published?: boolean
}

export interface NotesRepository {
    findByAuthorId: (authorId: number) => Promise<Note[]>;
    save: (note: CreateNoteDto) => Promise<Note>;
    update: (id: number, note: UpdateNoteDto) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
