import { Request, Response } from "express";
import { LoginUserUseCase } from "../use-cases/LoginUserUseCase";
import { RegisterUserUseCase } from "../use-cases/RegisterUserUseCase";

export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUserUseCase,
    private readonly registerUseCase: RegisterUserUseCase
  ) {}

  register = async (req: Request, res: Response) => {
    try {
      const user = await this.registerUseCase.exec(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return error instanceof Error
        ? res.status(400).json({ error: error.message })
        : res.status(500).json({ error: "something went wrong" });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const token = await this.loginUseCase.exec(
        req.body.email,
        req.body.password
      );
      return res.json({ token });
    } catch (error) {
      return error instanceof Error
        ? res.status(400).json({ error: error.message })
        : res.status(500).json({ error: "something went wrong" });
    }
  };
}
