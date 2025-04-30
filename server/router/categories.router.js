const express = require('express');
const { createCategory, getAllCategories, getCategoryById } = require('../controller/categories.controller');

const categoriesRouter = express.Router();

categoriesRouter.post('/', createCategory);
categoriesRouter.get('/all', getAllCategories);
categoriesRouter.get('/:id', getCategoryById); 
categoriesRouter.put('/', updateCategory);
categoriesRouter.delete('/:id', deleteCategory);

module.exports = categoriesRouter;