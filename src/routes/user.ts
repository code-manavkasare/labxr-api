import { Router } from "express";
import { create, login, forgot, reset } from "../controllers/user";
import auth from "../middlewares/auth";
const router = Router();

router.post("/signup", create);
router.post("/login", login);
router.post("/forgot", auth, forgot);
router.post("/reset", auth, reset);

export default router;
