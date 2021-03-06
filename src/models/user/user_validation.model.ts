import { DataTypes } from "sequelize"
import db from "../../config/db.config"

const UserValidation = db.define(
	"User_Validation",
	{ code: { type: DataTypes.STRING, allowNull: false } },
	{ timestamps: true }
)

export default UserValidation
