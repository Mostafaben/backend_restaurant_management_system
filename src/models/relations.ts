import Category from "./category/category.model"
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
Food.belongsToMany(Ingredient, { through: "Food_Ingredients" })
Food.hasMany(FoodImage)
Food.belongsToMany(Category, { through: "Food_Categories" })
Category.belongsToMany(Food, { through: "Food_Categories" })

//order relations
OrderFood.belongsTo(Food)
OrderFood.hasMany(FoodOrderExtra)
Order.hasMany(OrderFood)
Order.belongsTo(User)
Order.belongsTo(User)

//user relations
UserImage.belongsTo(User)
User.hasMany(UserValidation)
User.hasMany(UserResetPassword)
