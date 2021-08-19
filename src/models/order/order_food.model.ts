import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const OrderFood = db.define("Order_Food", {
  qte: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
});

export default OrderFood;
