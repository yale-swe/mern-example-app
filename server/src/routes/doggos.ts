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

router.delete("/", async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).send({ message: "Please provide an id." });

  const doggo = await Doggo.findById(id);
  if (!doggo)
    return res
      .status(400)
      .send({ message: "Doggo with this id does not exist." });

  await doggo.remove();

  res.status(200).send({ message: "Doggo successfully deleted." });
});

export default router;
