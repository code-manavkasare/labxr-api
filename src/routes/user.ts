import { Router } from "express";
import { create, login, reset } from "../controllers/user";
const router = Router();

router.post("/signup", create);
router.post("/login", login);
router.post("/reset", reset);

export default router;
