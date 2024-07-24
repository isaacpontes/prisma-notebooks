import { User } from "./User";

interface NoteAttributes {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    author?: User;
}

export class Note {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    author?: User;

    constructor(attributes: NoteAttributes) {
        this.id = attributes.id;
        this.title = attributes.title;
        this.content = attributes.content;
        this.published = attributes.published;
        this.authorId = attributes.authorId;
        this.createdAt = attributes.createdAt;
        this.updatedAt = attributes.updatedAt;
        this.author = attributes.author;
    }
}
