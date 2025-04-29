// This file defines the Mongoose schema for the permissions model.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissionSchema = new Schema({
  document_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document', // Replace with your actual document model name
    required: true,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },

  access_level: {
    type: String,
    enum: ['read', 'write', 'admin'], //  levels
    required: true,
  },
  
  granted_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //user who granted the permission
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Permission', permissionSchema);
