import { Router } from "express"
import { createCategory, findCategoryById, getCategories } from "../controllers/category.controller"

const router = Router()

router.get("/", getCategories)
router.get("/:id", findCategoryById)
router.post("/", createCategory)

export default router
