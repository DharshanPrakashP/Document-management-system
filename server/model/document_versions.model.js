const mongoose = require('mongoose');

const documentVersionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    documentId: {
        type: Number,
        required: true,
        unique: true
    },
    version_number: Number,
    file_url: String,
    notes: String,
    created_at: { 
        type: Date,
        default: Date.now
    }
});

const DocumentVersionModel = mongoose.model('DocumentVersion', documentVersionSchema);

module.exports = DocumentVersionModel;