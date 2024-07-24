import express from "express";
import { authController, notesController } from "../infra/container";

export const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.post("/notes", notesController.create);
router.get("/notes", notesController.userNotes);
router.put("/notes/:id", notesController.update);
router.delete("/notes/:id", notesController.delete);
