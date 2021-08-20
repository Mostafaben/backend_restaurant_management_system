import { DataTypes } from "sequelize"
import db from "../../config/db.config"
import OrderState from "./../../core/enums/order_state.enum"

const Order = db.define(
	"Order",
	{
		totalPrice: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			validate: {
				min: 0,
			},
		},
		discount: {
			type: DataTypes.DOUBLE,
			defaultValue: 0,
			validate: {
				min: 0,
				max: 100,
			},
		},
		state: {
			type: DataTypes.ENUM(
				OrderState.PENDING,
				OrderState.PROCESSING,
				OrderState.ON_THE_WAY,
				OrderState.CANCELED,
				OrderState.DONE
			),
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
)

export default Order
