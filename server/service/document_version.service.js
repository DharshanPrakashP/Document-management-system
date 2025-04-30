const documentVersion = require('../model/document_version.model');

class DocumentVersionService {
    async getAllDocumentVersions() {
        const documentVersions = await documentVersion.find({});
        return documentVersions;
    }

    async getDocumentById(id) {
        const document = await documentVersion.findById(id);
        return document;
    }

    async createDocumentVersion(document) {
        const newDocumentVersion = new documentVersion(document);
        await newDocumentVersion.save();
        return newDocumentVersion;
    }

    async updateDocumentVersion(document) {
        const id = document._id;
        const existingDocumentVersion = await documentVersion.findById(id);
        if (!existingDocumentVersion) {
            throw new Error('Document not found');
        }
        existingDocumentVersion.documentId = document.documentId;
        existingDocumentVersion.version_number = document.version_number;
        existingDocumentVersion.file_url = document.file_url;
        existingDocumentVersion.notes = document.notes;
        await existingDocumentVersion.save();
    }

    async deleteDocumentVersion(id) {
        await documentVersion.deleteOne({ _id: id });
    }
}

const documentVersionService = new DocumentVersionService();

module.exports = documentVersionService;