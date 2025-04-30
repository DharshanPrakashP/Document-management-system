const categoriesService = require('../service/categories.service.js');

exports.getAllCategories = async (req, res) => {
    const categories = await categoriesService.getAllCategories();
    try{
        res.status(200).json({
            status: 'success',
            data: {
                categories
            },
            message: 'Categories retrieved successfully'
        });
    }catch(error){
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving categories'
        }); 
    }
}

exports.getCategoryById = async (req, res) => {
    const id = req.params.id;
    const category = await categoriesService.getCategoryById(id);
    try{
        res.status(200).json({
            status: 'success',
            data: {
                category
            },
            message: 'Category retrieved successfully'
        });
    }catch(error){
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving category'
        });
    }
}

exports.createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = await categoriesService.createCategory(category);
    try{
        res.status(201).json({
            status: 'success',
            message: 'Category created successfully'
        });
    }catch(error){
        res.status(500).json({
            status: 'error',
            message: 'Error creating category'
        });
    }
}

exports.updateCategory = async (req, res) => {
    try{
        const category = req.body;
        await categoriesService.updateCategory(category);
        res.status(200).json({
            status: 'success',
            message: 'Category updated successfully'
        });
    } catch(error){
        res.status(500).json({
            status: 'error',
            message: 'Error updating category'
        });
    }
}

exports.deleteCategory = async (req, res) => {
    try{
        const id = req.params.id;
        await categoriesService.deleteCategory(id);
        res.json({
            status: 'success',
            message: 'Category deleted successfully'
        });
    }catch(error){
        res.status(500).json({
            status: 'error',
            message: 'Error deleting category'
        });
    }
}