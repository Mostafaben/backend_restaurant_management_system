import { Response, Request } from "express"

const login = async (request: Request, response: Response) => {}
const signUp = async (request: Request, response: Response) => {}
const refreshToken = async (request: Request, response: Response) => {}
const resetPassword = async (request: Request, response: Response) => {}
const validateAccount = async (request: Request, response: Response) => {}
const resetPasswordRequest = async (request: Request, response: Response) => {}
const validateAccountRequest = async (request: Request, response: Response) => {}

export {
	login,
	signUp,
	refreshToken,
	resetPassword,
	resetPasswordRequest,
	validateAccount,
	validateAccountRequest,
}
