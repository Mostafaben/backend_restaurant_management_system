import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const FoodOrderExtra = db.define("Food_Order_Extra", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

export default FoodOrderExtra;
