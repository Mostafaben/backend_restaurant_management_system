import { Router } from "express"
import authenticationRouter from "./authentication.router"

const router = Router()

router.use("/auth", authenticationRouter)

export default router
