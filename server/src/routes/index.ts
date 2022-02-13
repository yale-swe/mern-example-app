import { Router } from "express";
import DoggoRoutes from "./doggos";

const router = Router();

router.use("/doggo", DoggoRoutes);

export default router;
