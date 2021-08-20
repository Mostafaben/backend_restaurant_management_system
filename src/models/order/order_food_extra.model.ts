import { DataTypes } from "sequelize";
import db from "../../config/db.config";

const FoodOrderExtra = db.define("Food_Order_Extra", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

export default FoodOrderExtra;
