// controllers/permission.controller.js

const PermissionService = require('../services/permission.service');

class PermissionController {
  // POST /permissions
  async createPermission(req, res) {
    try {
      const { document_id, user_id, access_level, granted_by } = req.body;
      const permission = await PermissionService.grantPermission(document_id, user_id, access_level, granted_by);
      res.status(201).json({ success: true, data: permission });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // PUT /permissions/:id
  async updatePermission(req, res) {
    try {
      const permissionId = req.params.id;
      const updates = req.body;
      const updated = await PermissionService.updatePermission(permissionId, updates);
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // GET /permissions/user/:user_id
  async getPermissionsByUser(req, res) {
    try {
      const permissions = await PermissionService.getPermissionsByUser(req.params.user_id);
      res.status(200).json({ success: true, data: permissions });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // GET /permissions/document/:document_id
  async getPermissionsByDocument(req, res) {
    try {
      const permissions = await PermissionService.getPermissionsByDocument(req.params.document_id);
      res.status(200).json({ success: true, data: permissions });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // DELETE /permissions/:id
  async deletePermission(req, res) {
    try {
      await PermissionService.revokePermission(req.params.id);
      res.status(200).json({ success: true, message: 'Permission revoked successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new PermissionController();
