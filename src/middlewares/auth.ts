import jwt from "jsonwebtoken";
import User from "../models/user";
import config from "../services/config";
import { IControllerArgs } from "../types";

const { JWT_SECRET } = config;

const auth: IControllerArgs = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded token", decoded);
    const user = await User.findOne({
      where: {
        id: decoded,
        token,
      },
    });
    if (!user)
      return res.status(401).send({ data: null, error: "No user found!" });
    next();
  } catch (error) {
    return res.status(401).send({ data: null, error: "Invalid token!" });
  }
};

export default auth;
