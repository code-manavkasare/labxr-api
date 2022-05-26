import "dotenv/config";
import express from "express";
import config from "./services/config";
import user from "./routes/user";

const { PORT } = config;
const app = express();

app.use(express.json());

app.use("/user", user);

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
});
