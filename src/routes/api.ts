import express from "express";
import { authController } from "../infra/container";

export const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
