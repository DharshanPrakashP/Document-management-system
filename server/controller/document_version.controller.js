const documentVersionService = require('../service/document_version.service');

exports.getAllDocumentVersions = async (req, res) => {
    const documentVersion = await documentVersionService.getAllDocumentVersions;
    try{
        res.status(200).json({
            status: true,
            data: {documentVersion},
            message: 'Document version recived Successfully'
        });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'error in retriving document version'
        })
    }
}

exports.getDocumentById = async (req, res) => {
    const id = req.params.id;
    const document = await documentVersionService.getDocumentById(id);
    try{
        res.status(200).json({
            status: true,
            data: {document},
            message: 'Document version recived Successfully'
        });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'error in retriving document version'
        })
    }
}

exports.createDocumentVersion = async (req, res) => {
    const document = req.body;
    const newDocumentVersion = await documentVersionService.createDocumentVersion(document);
    try{
        res.status(201).json({
            status: true,
            message: 'Document version created Successfully'
        });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'error in creating document version'
        })
    }
}

exports.updateDocumentVersion = async (req, res) => {
    try{
        const documentVersion = req.body;
        await documentVersionService.updateDocumentVersion(documentVersion);
        res.status(200).json({
            status: true,
            message: 'Document version updated Successfully'
        });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'error in updating document version'
        })
    }
}

exports.deleteDocumentVersion = async (req, res) => {
    const id = req.params.id;
    try{
        await documentVersionService.deleteDocumentVersion(id);
        res.status(200).json({
            status: true,
            message: 'Document version deleted Successfully'
        });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'error in deleting document version'
        })
    }
}