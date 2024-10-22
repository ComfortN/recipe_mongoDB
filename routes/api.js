import express from "express"
import itemController from "../controllers/recipeController.js"

const router = express.Router()

router.post('/recipes', itemController)


export default router;