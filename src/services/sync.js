import sequelize from "./sequelize";

sequelize
  .sync({ force: true })
  .then((result) => console.log("synced successfully!", result))
  .catch((err) => console.log("error syncing", err));
