import { IControllerArgs, IUser } from "../types";
import jwt from "jsonwebtoken";
import { ValidationError, Model } from "sequelize";
import User from "../models/user";
import bcrypt from "bcrypt";
import config from "../services/config";
const { JWT_SECRET } = config;

export const create: IControllerArgs = async (req, res) => {
  try {
    const data = await req.body;
    if (!data.email)
      return res.json({ data: null, error: "Email cannot be empty" });
    const userExists = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (!userExists)
      return res.json({
        data: null,
        error: "User with this email already exists!",
      });
    const user: IUser | any = await User.create(data);
    const token = jwt.sign(user.id, JWT_SECRET);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log("token", token);
    user.token = token;
    user.password = hashedPassword;
    await user.save();
    return res.json({
      data: {
        data: user,
        message: "User created successfully!",
      },
      error: null,
    });
  } catch (error: any) {
    if (error instanceof ValidationError) {
      return res.json({ data: null, error: error.errors[0].message });
    }
    return res.json({ data: null, error });
  }
};

export const login: IControllerArgs = async (req, res) => {
  try {
    const data = await req.body;
    if (!data.email)
      return res.json({ data: null, error: "Email cannot be empty" });
    else if (!data.password)
      return res.json({ data: null, error: "Password cannot be empty" });
    const userDoc = await User.findOne({
      where: {
        email: data.email,
      },
    });
    const user = userDoc?.get();
    if (!user)
      return res.json({ data: null, error: "No user found with this email" });
    const valid = await bcrypt.compare(data.password, user.password);
    console.log("valid", valid);
    if (!valid) return res.json({ data: null, error: "Incorrect Password" });

    return res.json({
      data: {
        data: user,
        message: "User logged in successfully!",
      },
      error: null,
    });
  } catch (error: any) {
    if (error instanceof ValidationError) {
      return res.json({ data: null, error: error.errors[0].message });
    }
    return res.json({ data: null, error });
  }
};

export const forgot: IControllerArgs = async (req, res) => {
  try {
    const data = await req.body;
    if (!data.email)
      return res.json({ data: null, error: "Email cannot be empty" });
    const userDoc = await User.findOne({
      where: {
        email: data.email,
      },
    });
    const user = userDoc?.get();
    if (!user)
      return res.json({ data: null, error: "No user found with this email" });
    return res.json({
      data: {
        message: "You can reset your password",
      },
      error: null,
    });
  } catch (error: any) {
    if (error instanceof ValidationError) {
      return res.json({ data: null, error: error.errors[0].message });
    }
    return res.json({ data: null, error });
  }
};

export const reset: IControllerArgs = async (req, res) => {
  try {
    const data = await req.body;
    if (!data.email)
      return res.json({ data: null, error: "Email cannot be empty" });
    else if (!data.password)
      return res.json({ data: null, error: "Password cannot be empty" });
    const userDoc = await User.findOne({
      where: {
        email: data.email,
      },
    });
    const user = userDoc?.get();
    if (!user)
      return res.json({ data: null, error: "No user found with this email" });
    const isSame = await bcrypt.compare(data.password, user.password);
    if (isSame)
      return res.json({
        data: null,
        error: "Please choose a different password than current one",
      });
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    return res.json({
      data: {
        message: "Password reset successfully!",
      },
      error: null,
    });
  } catch (error: any) {
    console.log("error reseting password", error);
    if (error instanceof ValidationError) {
      return res.json({ data: null, error: error.errors[0].message });
    }
    return res.json({ data: null, error });
  }
};
