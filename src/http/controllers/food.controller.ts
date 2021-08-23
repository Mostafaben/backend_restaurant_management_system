import { Request, Response } from "express"
import HttpResponseCode from "../../core/enums/http_response_code.enum"
import httpErrorHandlerService from "../../core/services/http_error.service"
import { Food, FoodImage } from "../../models"
import Ingredient from "../../models/ingredient/ingredient.model"

const getFood = async (request: Request, response: Response) => {
	try {
		const food = await Food.findAll({ include: [Ingredient, FoodImage] })
		response.status(HttpResponseCode.OK).send({
			food,
		})
	} catch (error) {
		httpErrorHandlerService.handleHttpError(error, response)
	}
}
const findFoodById = () => {}
const createFood = (request: Request | any, response: Response) => {}
const deleteFood = () => {}
const updateFood = () => {}

export { createFood, deleteFood, findFoodById, getFood, updateFood }
