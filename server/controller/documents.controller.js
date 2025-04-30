const documentsService = require("/service/documents.service");

exports.createDocument = async function (req, res) {
    try {
        const payload = req.body;
        const document = await documentsService.createDocument(payload);
        res.status(201).json({
            status: true,
            message: "Document created successfully.",
            data: document
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};

exports.getAllDocuments = async function (req, res) {
    try {
        const documents = await documentsService.getAllDocuments();
        res.status(200).json({
            status: true,
            message: "Fetched all documents successfully.",
            data: documents
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};

exports.getDocumentById = async function (req, res) {
    try {
        const documentId = req.params.id;
        const document = await documentsService.getDocumentById(documentId);
        if (!document) {
            return res.status(404).json({
                status: false,
                message: "Document not found."
            });
        }
        res.status(200).json({
            status: true,
            message: "Document fetched successfully.",
            data: document
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};

exports.updateDocument = async function (req, res) {
    try {
        const documentId = req.params.id;
        const payload = req.body;
        const updated = await documentsService.updateDocument(documentId, payload);
        if (!updated) {
            return res.status(404).json({
                status: false,
                message: "Document not found."
            });
        }
        res.status(200).json({
            status: true,
            message: "Document updated successfully.",
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};

exports.deleteDocument = async function (req, res) {
    try {
        const documentId = req.params.id;
        const deleted = await documentsService.deleteDocument(documentId);
        if (!deleted) {
            return res.status(404).json({
                status: false,
                message: "Document not found."
            });
        }
        res.status(200).json({
            status: true,
            message: "Document deleted successfully."
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
};