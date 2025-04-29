const mongoose = require('mongoose');

const folderDocumentSchema = new mongoose.Schema({
    folder_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Folder'
         },
    document_id: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Document' 
        }
  });
  
  const FolderDocumentModel = mongoose.model('FolderDocument', folderDocumentSchema);
module.exports = FolderDocumentModel;