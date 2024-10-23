import express from "express"
import recipeController from "../controllers/recipeController.js"

const router = express.Router()

router.post('/recipes', recipeController.CreateRecipe)
router.get('/recipes', recipeController.getRecipes)
router.get('/recipes/:id', recipeController.getRecipe)
router.put('/recipes/:id', recipeController.updateRecipe)
router.delete('/recipes/:id', recipeController.deleteRecipe)


export default router;