import Recipe from "../models/recipe.js";

const CreateRecipe = async (req, res) => {
    try {
        const item = await Recipe.create(req.body)
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({error: "An error occured while creating the item"})
    }
};


export default CreateRecipe;