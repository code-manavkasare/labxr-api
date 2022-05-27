import "dotenv/config";
import express from "express";
import user from "./routes/user";
import config from "./services/config";
import "./services/sync";

const { PORT } = config;
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hi"));

app.use("/user", user);

app.listen(PORT, () => {
  console.log("server running on port:", PORT);
});
