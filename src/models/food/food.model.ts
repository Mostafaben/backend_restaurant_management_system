import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const Food = db.define(
  "Food",
  {
    foodName: { type: DataTypes.STRING, allowNull: false, unique: true },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    discount: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: true }
);

export default Food;
