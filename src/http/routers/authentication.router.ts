import { Router } from "express"
import {
	login,
	signUp,
	refreshToken,
	resetPassword,
	resetPasswordRequest,
	validateAccount,
	validateAccountRequest,
} from "../controllers/authentication.controller"

const router = Router()

router.post("/login", login)
router.post("/sign_up", signUp)
router.post("/refresh_token", refreshToken)
router.post("/reset_password", resetPassword)
router.post("/reset_password_request", resetPasswordRequest)
router.post("/validate_account", validateAccount)
router.post("/validate_account_request", validateAccountRequest)

export default router
