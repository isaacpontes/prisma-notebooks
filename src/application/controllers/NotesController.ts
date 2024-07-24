import { Request, Response } from "express";
import CreateNoteUseCase from "../use-cases/CreateNoteUseCase";
import { DeleteNoteUseCase } from "../use-cases/DeleteNoteUseCase";
import { GetUserNotesUseCase } from "../use-cases/GetUserNotesUseCase";
import { UpdateNoteUseCase } from "../use-cases/UpdateNoteUseCase";

export class NotesController {
    constructor(
        private readonly createNote: CreateNoteUseCase,
        private readonly getUsersNotes: GetUserNotesUseCase,
        private readonly updateNote: UpdateNoteUseCase,
        private readonly deleteNote: DeleteNoteUseCase
    ) {}

    // POST /api/notes
    create = async (req: Request, res: Response) => {
        try {
            const newNote = await this.createNote.exec(req.body);
            res.status(201).json(newNote);
        } catch (error) {
            return error instanceof Error
                ? res.status(400).json({ error: error.message })
                : res.status(500).json({ error: "something went wrong" });
        }
    };

    // GET /api/notes
    userNotes = async (req: Request, res: Response) => {
        try {
            const notes = await this.getUsersNotes.exec(req.body.userId);
            res.json(notes);
        } catch (error) {
            return error instanceof Error
                ? res.status(400).json({ error: error.message })
                : res.status(500).json({ error: "something went wrong" });
        }
    };

    // PUT /api/notes/:id
    update = async (req: Request, res: Response) => {
        try {
            await this.updateNote.exec(+req.params.id, req.body);
            res.status(204).end();
        } catch (error) {
            return error instanceof Error
                ? res.status(400).json({ error: error.message })
                : res.status(500).json({ error: "something went wrong" });
        }
    };

    // DELETE /api/notes/:id
    delete = async (req: Request, res: Response) => {
        try {
            await this.deleteNote.exec(+req.params.id);
            res.status(204).end();
        } catch (error) {
            return error instanceof Error
                ? res.status(400).json({ error: error.message })
                : res.status(500).json({ error: "something went wrong" });
        }
    };
}
