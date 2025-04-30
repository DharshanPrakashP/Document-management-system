// controller/folders.controller.js

const FolderModel = require('../models/folders.model');

class FoldersController {
  // POST /folders
  async createFolder(req, res) {
    try {
      const { name, description, user_id } = req.body;
      const folder = await FolderModel.create({ name, description, user_id });
      res.status(201).json({ success: true, data: folder });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // PUT /folders/:id
  async updateFolder(req, res) {
    try {
      const updated = await FolderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // GET /folders/user/:user_id
  async getFoldersByUser(req, res) {
    try {
      const folders = await FolderModel.find({ user_id: req.params.user_id });
      res.status(200).json({ success: true, data: folders });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // DELETE /folders/:id
  async deleteFolder(req, res) {
    try {
      await FolderModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, message: 'Folder deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new FoldersController();
