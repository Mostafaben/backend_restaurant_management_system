import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const Order = db.define(
  "Order",
  {
    totalPrice: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    discount: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100,
      },
    },
    state: {
      type: DataTypes.ENUM,
      defaultValue: OrderState.PENDING,
      allowNull: false,
    },
    inTable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Order;
