import { Router } from "express"
import { createFood, getFood } from "../controllers/food.controller"

const router = Router()

router.post("/", createFood)
router.get("/", getFood)

export default router
