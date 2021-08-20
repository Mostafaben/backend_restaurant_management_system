import Food from "./food/food.model"
import FoodImage from "./food/food_image.model"
import Ingredient from "./ingredient/ingredient.model"
import Order from "./order/order.model"
import OrderFood from "./order/order_food.model"
import FoodOrderExtra from "./order/order_food_extra.model"
import User from "./user/user.model"
import UserImage from "./user/user_image.model"
import UserResetPassword from "./user/user_reset_password.model"
import UserValidation from "./user/user_validation.model"

// food relations
Food.hasMany(Ingredient)
Food.hasMany(FoodImage)

//order relations
OrderFood.hasMany(FoodOrderExtra)
Order.belongsToMany(Food, { through: OrderFood })
Order.belongsTo(User)
Order.belongsTo(User)

//user relations
UserImage.belongsTo(User)
User.hasMany(UserValidation)
User.hasMany(UserResetPassword)
