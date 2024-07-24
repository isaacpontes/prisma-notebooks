import { AuthController } from "../application/controllers/AuthController";
import { NotesController } from "../application/controllers/NotesController";
import CreateNoteUseCase from "../application/use-cases/CreateNoteUseCase";
import { DeleteNoteUseCase } from "../application/use-cases/DeleteNoteUseCase";
import { GetUserNotesUseCase } from "../application/use-cases/GetUserNotesUseCase";
import { LoginUserUseCase } from "../application/use-cases/LoginUserUseCase";
import { RegisterUserUseCase } from "../application/use-cases/RegisterUserUseCase";
import { UpdateNoteUseCase } from "../application/use-cases/UpdateNoteUseCase";
import { NotesPostgreRepository } from "./database/repositories/NotesPostgreRepository";
import { UsersPostgreRepository } from "./database/repositories/UsersPostgreRepository";
import { BcryptAdapter } from "./helpers/BcryptAdapter";
import { JwtAdapter } from "./helpers/JwtAdapter";

const encryptor = new BcryptAdapter();
const tokenManager = new JwtAdapter();
const usersRepository = new UsersPostgreRepository();
const notesRepository = new NotesPostgreRepository();

const registerUseCase = new RegisterUserUseCase(usersRepository, encryptor);
const loginUseCase = new LoginUserUseCase(
    usersRepository,
    encryptor,
    tokenManager
);
const createNoteUseCase = new CreateNoteUseCase(notesRepository);
const getUserNoteUseCase = new GetUserNotesUseCase(notesRepository);
const updateNoteUseCase = new UpdateNoteUseCase(notesRepository);
const deleteNoteUseCase = new DeleteNoteUseCase(notesRepository);

const authController = new AuthController(loginUseCase, registerUseCase);
const notesController = new NotesController(
    createNoteUseCase,
    getUserNoteUseCase,
    updateNoteUseCase,
    deleteNoteUseCase
);

export { authController, notesController };
