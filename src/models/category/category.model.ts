import { DataTypes } from "sequelize/types";
import db from "../../config/db.config";

const Category = db.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  iconUrl: { type: DataTypes.STRING, allowNull: false },
  iconName: { type: DataTypes.STRING, allowNull: false },
});

export default Category;
