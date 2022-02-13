import { Request, Response } from "express";
import app from "../app";
import { Doggo } from "../models";
import randomDogeImage from "../utils/randomDogeImage";

app.get("/doggo", async (_req: Request, res: Response) => {
  const doggos = await Doggo.find();
  res.status(200).send({ doggos });
});

app.post("/doggo", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const doggo = await Doggo.create({
    name,
    age,
    imageUrl: randomDogeImage(),
  });
  res.send({
    doggo,
  });
});
