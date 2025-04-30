const express = require('express');
const { createDocumentVersion, getAllDocumentVersions, getDocumentById, updateDocumentVersion, deleteDocumentVersion } = require('../controller/document_version.controller');

const documentVersionRouter = express.Router();

documentVersionRouter.post('/', createDocumentVersion);
documentVersionRouter.get('/all', getAllDocumentVersions);
documentVersionRouter.get('/:id', getDocumentById);
documentVersionRouter.put('/', updateDocumentVersion);
documentVersionRouter.delete('/:id', deleteDocumentVersion);

models.exports = documentVersionRouter;  