import { Request, Response, Router } from "express";
import { Doggo } from "../models";
import randomDogeImage from "../utils/randomDogeImage";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const doggos = await Doggo.find();
  res.send({ doggos });
});

router.post("/", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const doggo = await Doggo.create({
    name,
    age,
    imageUrl: randomDogeImage(),
  });
  res.status(201).send({
    doggo,
  });
});

export default router;
