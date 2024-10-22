import express from "express"
import recipeController from "../controllers/recipeController.js"

const router = express.Router()

router.post('/recipes', recipeController.CreateRecipe)
router.get('/recipes', recipeController.getRecipes)


export default router;