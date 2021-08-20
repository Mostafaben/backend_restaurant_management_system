import { DataTypes } from "sequelize";
import db from "../../config/db.config";

const Ingredient = db.define("Ingredient", {
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

export default Ingredient;
