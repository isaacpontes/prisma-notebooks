import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes/api";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log(`Server started`));
