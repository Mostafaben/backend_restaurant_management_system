import { DataTypes } from "sequelize"
import db from "../../config/db.config"

const Category = db.define("Category", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	iconUrl: { type: DataTypes.STRING, allowNull: false },
	iconPath: { type: DataTypes.STRING, allowNull: false },
})

export default Category
