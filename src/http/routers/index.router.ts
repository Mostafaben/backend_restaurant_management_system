import { Router } from "express"
import authenticationRouter from "./authentication.router"
import foodRouter from "./food.router"
import categoryRouter from "./category.router"
const router = Router()

router.use("/auth", authenticationRouter)
router.use("/food", foodRouter)
router.use("/category", categoryRouter)

export default router
