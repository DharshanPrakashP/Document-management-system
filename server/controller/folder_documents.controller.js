// controller/folderDocument.controller.js

const FolderDocumentModel = require('../models/folder_documents.model');

class FolderDocumentController {
  // POST /folder-documents
  async addDocumentToFolder(req, res) {
    try {
      const { folder_id, document_id } = req.body;
      const folderDocument = await FolderDocumentModel.create({ folder_id, document_id });
      res.status(201).json({ success: true, data: folderDocument });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // GET /folder-documents/folder/:folder_id
  async getDocumentsByFolder(req, res) {
    try {
      const docs = await FolderDocumentModel.find({ folder_id: req.params.folder_id }).populate('document_id');
      res.status(200).json({ success: true, data: docs });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // DELETE /folder-documents/:id
  async removeDocumentFromFolder(req, res) {
    try {
      await FolderDocumentModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, message: 'Document removed from folder' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new FolderDocumentController();
