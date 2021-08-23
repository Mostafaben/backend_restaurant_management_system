import { Response } from "express"
import HttpError from "../../utils/http_error.class"

class HttpErrorHandlerService {
	constructor() {}

	private logErrorToConsole(error: HttpError) {
		console.log({
			error,
		})
	}

	handleHttpError = (error: HttpError, response: Response) => {
		this.logErrorToConsole(error)
		return response.status(error.getCode).send({
			message: error.message,
			stack: error.stack,
			success: false,
		})
	}
}

const httpErrorHandlerService = new HttpErrorHandlerService()
Object.freeze(httpErrorHandlerService)

export default httpErrorHandlerService
