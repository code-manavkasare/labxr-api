import "dotenv/config";
import express from "express";
import config from "./services/config";
import user from "./routes/user";
import sequelize from "./services/sequelize";

const { PORT } = config;
const app = express();

app.use(express.json());

app.use("/user", user);

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
});
