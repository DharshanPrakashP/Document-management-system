const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: String,
    description: String,
    file_url: String,
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User' 
        },
    category_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Category' 
        },
    created_at: {
         type: Date, 
         default: Date.now
         },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
    is_archived: Boolean,
    is_public: Boolean
  });
  
  const DocumentModel = mongoose.model('Document', documentSchema);
   
  module.exports = DocumentModel;