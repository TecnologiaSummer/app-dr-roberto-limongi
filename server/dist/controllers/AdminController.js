"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class AdminController {
  async store(req, res) {
    try {
      const novoAdmin = await _Admin2.default.create(req.body);
      const { cd_administrador, nm_administrador, cd_email } = novoAdmin;
      return res.status(201).json({ cd_administrador, nm_administrador, cd_email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const administradores = await _Admin2.default.findAll({ attributes: ['cd_administrador', 'nm_administrador', 'cd_email'] });
      return res.status(200).json(administradores);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const administrador = await _Admin2.default.findOne({
        where: {
          cd_administrador: req.params.id,
          ic_status: true,
        },
      });

      if (!administrador) {
        return res.status(401).json({
          errors: ['ID inválido ou Administrador Desativado'],
        });
      }

      const { cd_administrador, nm_administrador, cd_email } = administrador;

      return res.json({ cd_administrador, nm_administrador, cd_email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const administrador = await _Admin2.default.findOne({
        where: {
          cd_administrador: req.params.id,
        },
      });

      if (!administrador) {
        return res.status(400).json({
          errors: ['Administrador não existe.'],
        });
      }

      const novosDados = await administrador.update(req.body);
      const { cd_administrador, nm_administrador, cd_email } = novosDados;
      return res.json({ cd_administrador, nm_administrador, cd_email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const administrador = await _Admin2.default.findByPk(req.params.id);

      if (!administrador) {
        return res.status(400).json({
          errors: ['Administrador não existe.'],
        });
      }

      // await administrador.destroy(req.body);
      await administrador.update({
        ic_status: false,
      });
      return res.json({ administrador: 'Administrado desativado com sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AdminController();
