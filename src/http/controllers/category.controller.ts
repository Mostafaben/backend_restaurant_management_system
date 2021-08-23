import { Request, Response } from "express"
import HttpResponseCode from "../../core/enums/http_response_code.enum"
import fileMangerService from "../../core/services/file_manager.service"
import httpErrorHandlerService from "../../core/services/http_error.service"
import Category from "../../models/category/category.model"

const getCategories = () => {}
const findCategoryById = async () => {}
const createCategory = async (request: Request | any, response: Response) => {
	try {
		const {
			files: { image },
			body: { name },
		} = request
		fileMangerService.uploadFile("categories", image.path, name)
		const category = await Category.create({
			name,
			iconUrl: "",
			iconPath: "",
		})
		console.log(category)
		return response.status(HttpResponseCode.CREATED).send({ category })
	} catch (error) {
		return httpErrorHandlerService.handleHttpError(error, response)
	}
}
const updateCategory = () => {}
const deleteCategory = () => {}

export { getCategories, findCategoryById, createCategory, deleteCategory, updateCategory }
