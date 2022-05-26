import { Request, Response } from "express";

export interface IConfig {
  PORT: string;
  MYSQL_USERNAME: string;
  MYSQL_PASS: string;
  JWT_SECRET: string;
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  grade: string;
  token: string;
}

export interface IControllerArgs {
  (req: Request, res: Response): any;
}
