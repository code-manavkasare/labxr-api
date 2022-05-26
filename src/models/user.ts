import { DataTypes } from "sequelize";
const { INTEGER, STRING } = DataTypes;
import sequelize from "../services/sequelize";

const User = sequelize.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "First name cannot be empty",
      },
    },
  },
  lastname: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Last name cannot be empty",
      },
    },
  },
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Username cannot be empty",
      },
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Password cannot be empty",
      },
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "First name cannot be empty",
      },
    },
  },
  grade: {
    type: STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Class cannot be empty",
      },
    },
  },
  token: {
    type: STRING,
  },
});

export default User;
