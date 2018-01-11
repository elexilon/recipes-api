const router = require('express').Router()
const { Recipe } = require('../models')

router.get('/recipes', (req, res, next) => {
  Recipe.find()
    // Newest recipes first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((recipes) => res.json(recipes))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/recipes/:id', (req, res, next) => {
    const id = req.params.id
    Recipe.findById(id)
      .then((recipe) => {
        if (!recipe) { return next() }
        res.json(recipe)
      })
      .catch((error) => next(error))
  })
  .post('/recipes', (req, res, next) => {
    let newRecipe = req.body

    Recipe.create(newRecipe)
      .then((recipe) => res.json(recipe))
      .catch((error) => next(error))
  })
  .put('/recipes/:id', (req, res, next) => {
    let updaRecipe = req.body

    Recipe.findById({id: updaRecipe.id}, updaRecipe);
      .then((recipe) => {
        if (!recipe) { return next() }
        recipe.title        = updaRecipe.title        || recipe.title
        recipe.summary      = updaRecipe.summary      || recipe.summary
        recipe.photo        = updaRecipe.photo        || recipe.photo
        recipe.vegan        = updaRecipe.vegan        || recipe.vegan
        recipe.vegetarian   = updaRecipe.vegetarian   || recipe.vegetarian
        recipe.pescatarian  = updaRecipe.pescatarian  || recipe.pescatarian
        recipe.cookingTime  = updaRecipe.cookingTime  || recipe.cookingTime
        recipe.ingredients  = updaRecipe.ingredients  || recipe.ingredients
        recipe.cookingSteps = updaRecipe.cookingSteps || recipe.cookingSteps
        recipe.likedBy      = updaRecipe.likedBy      || recipe.likedBy
        recipe.authorId     = updaRecipe.authorId     || recipe.authorId
        recipe.createdAt    = updaRecipe.createdAt    || recipe.createdAt
        recipe.updatedAt    = updaRecipe.updatedAt    || recipe.updatedAt
        recipe.save(recipe)
        res.json(recipe)
      })
      .catch((error) => next(error))
  })
  .patch('/recipes/:id', (req, res, next) => {
    let updaRecipe = req.body

    Recipe.findById({id: updaRecipe.id}, updaRecipe);
      .then((recipe) => {
        if (!recipe) { return next() }
        recipe.title        = updaRecipe.title        || recipe.title
        recipe.summary      = updaRecipe.summary      || recipe.summary
        recipe.photo        = updaRecipe.photo        || recipe.photo
        recipe.vegan        = updaRecipe.vegan        || recipe.vegan
        recipe.vegetarian   = updaRecipe.vegetarian   || recipe.vegetarian
        recipe.pescatarian  = updaRecipe.pescatarian  || recipe.pescatarian
        recipe.cookingTime  = updaRecipe.cookingTime  || recipe.cookingTime
        recipe.ingredients  = updaRecipe.ingredients  || recipe.ingredients
        recipe.cookingSteps = updaRecipe.cookingSteps || recipe.cookingSteps
        recipe.likedBy      = updaRecipe.likedBy      || recipe.likedBy
        recipe.authorId     = updaRecipe.authorId     || recipe.authorId
        recipe.createdAt    = updaRecipe.createdAt    || recipe.createdAt
        recipe.updatedAt    = updaRecipe.updatedAt    || recipe.updatedAt
        recipe.save(recipe)
        res.json(recipe)
      })
      .catch((error) => next(error))

  })
  .delete('/recipes/:id', (req, res, next) => {
    const id = req.params.id
    Recipe.findByIdAndRemove(id)
      .catch((error) => next(error))
  })


module.exports = router
