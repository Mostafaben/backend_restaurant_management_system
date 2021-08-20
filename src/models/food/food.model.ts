import { DataTypes } from "sequelize"
import db from "../../config/db.config"

const Food = db.define(
	"Food",
	{
		foodName: { type: DataTypes.STRING, allowNull: false, unique: true },
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			validate: {
				min: 0,
			},
		},
		discount: {
			type: DataTypes.DOUBLE,
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
			allowNull: false,
		},
	},
	{ timestamps: true }
)

export default Food
