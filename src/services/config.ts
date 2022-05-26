import { IConfig } from "../types";

const config = {
  PORT: process.env.PORT,
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASS: process.env.MYSQL_PASS,
  JWT_SECRET: process.env.JWT_SECRET,
} as IConfig;

export default config;
