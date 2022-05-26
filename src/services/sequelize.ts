import { Sequelize } from "sequelize";
import config from "./config";
const { MYSQL_PASS, MYSQL_USERNAME } = config;

export default new Sequelize("labxr", MYSQL_USERNAME, MYSQL_PASS, {
  dialect: "mysql",
  host: "localhost",
});
