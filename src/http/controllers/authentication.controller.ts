import { Response, Request } from "express"

class AuthenticationController {
	constructor() {}

	login(request: Request, response: Response) {}
	signUp(request: Request, response: Response) {}
	refreshToken(request: Request, response: Response) {}
	resetPassword(request: Request, response: Response) {}
	validateAccount(request: Request, response: Response) {}
	resetPasswordRequest(request: Request, response: Response) {}
	validateAccountRequest(request: Request, response: Response) {}
}

const authenticationController = new AuthenticationController()
Object.freeze(authenticationController)
export default authenticationController
