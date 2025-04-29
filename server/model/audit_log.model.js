// The AuditLog model is used to track user actions on documents in the system.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auditLogSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  document_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
    required: true,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String, // Optional field for additional information about the action
    required: false,
  },
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
