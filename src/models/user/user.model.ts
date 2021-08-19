import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";
import UserRole from "../../core/enums/user_roles.enum";

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 1,
      },
      defaultValue: UserRole.CLIENT,
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true }
);

export default User;
