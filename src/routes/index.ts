import express, { Request, Response } from "express";
const router = express.Router();

router.get("/ping", async (req: Request, res: Response) => {
  res.send("pong");
});

export default router;
