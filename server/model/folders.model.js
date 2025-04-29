
const mongoose = require ('mongoose');

const folderSchema = new mongoose.Schema({
    name: {
        type :String,
        required : true,
    },
    description: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_at: { 
        type: Date, 
        default: Date.now
     }
  });
  
  const FolderModel = mongoose.model('Folder', folderSchema);

  module.exports = FolderModel;