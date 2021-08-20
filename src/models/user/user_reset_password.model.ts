import { DataTypes } from "sequelize"
import db from "../../config/db.config"

const UserResetPassword = db.define(
	"User_Rest_Password",
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: true }
)

export default UserResetPassword
