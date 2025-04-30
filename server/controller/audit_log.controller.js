// controller/auditlog.controller.js
const AuditLog = require('../models/auditlog.model');

class AuditLogController {
  // Create a new audit log entry
  async createLog(req, res) {
    try {
      const { user_id, action, document_id, details } = req.body;

      const newLog = await AuditLog.create({
        user_id,
        action,
        document_id,
        details,
      });

      res.status(201).json({ success: true, data: newLog });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get all audit logs (optional: add filters later)
  async getAllLogs(req, res) {
    try {
      const logs = await AuditLog.find().populate('user_id document_id');
      res.status(200).json({ success: true, data: logs });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get audit logs by document ID
  async getLogsByDocument(req, res) {
    try {
      const logs = await AuditLog.find({ document_id: req.params.document_id })
        .populate('user_id');
      res.status(200).json({ success: true, data: logs });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get audit logs by user ID
  async getLogsByUser(req, res) {
    try {
      const logs = await AuditLog.find({ user_id: req.params.user_id })
        .populate('document_id');
      res.status(200).json({ success: true, data: logs });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new AuditLogController();
