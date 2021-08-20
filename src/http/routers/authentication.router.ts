import { Router } from "express"
import authenticationController from "../controllers/authentication.controller"
const {
	login,
	signUp,
	refreshToken,
	resetPassword,
	resetPasswordRequest,
	validateAccount,
	validateAccountRequest,
} = authenticationController

const router = Router()

router.post("/login", login)
router.post("/sign_up", signUp)
router.post("/refresh_token", refreshToken)
router.post("/reset_password", resetPassword)
router.post("/reset_password_request", resetPasswordRequest)
router.post("/validate_account", validateAccount)
router.post("/validate_account_request", validateAccountRequest)

export default router
