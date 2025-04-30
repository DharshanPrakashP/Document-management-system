const categoriesModel = require('../model/categories.model.js');

class CategoriesService {
    async getAllCategories() {
        const categories = await categorieModel.find({});
        return categories;
    }

    async getCategoryById(id) {
        const category = await categoriesModel.findById(id);
        return category;
    }

    async createCategory(category) {
        const newCategory = new categoriesModel(category);
        await newCategory.save();
        return newCategory;
    }

    async updateCategory(category) {
        const id = category._id;
        const existingCategory = await CategoriessModel.findById(id);
        if (!existingCategory) {
            throw new Error('Category not found');
        }
        existingCategory.name = category.name;
        existingCategory.description = category.description;
        await existingCategory.save();
    }

    async deleteCategory(id) {
        await categoriesModel.deleteOne({ _id: id });
    }
}

const categoriesService = new CategoriesService();

module.exports = categoriesService;