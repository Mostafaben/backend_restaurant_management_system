import { DataTypes } from "sequelize"
import db from "../../config/db.config"

const FoodImage = db.define(
	"Food_Image",
	{
		image_path: { type: DataTypes.STRING, allowNull: false },
		image_name: { type: DataTypes.STRING, allowNull: false },
		image_url: { type: DataTypes.STRING, allowNull: false },
	},
	{ timestamps: true }
)

export default FoodImage
