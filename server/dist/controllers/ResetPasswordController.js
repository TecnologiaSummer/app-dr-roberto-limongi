"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _mailer = require('../modules/mailer'); var _mailer2 = _interopRequireDefault(_mailer);
var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class ResetPasswordController {
  async store(req, res) {
    try {
      const { cd_email = '' } = req.body;

      const admin = await _Admin2.default.findOne({ where: { cd_email } });

      if (!admin) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      const resetToken = _crypto2.default.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);

      await admin.update({
        cd_password_reset_token: resetToken,
        cd_password_reset_expires: now,
      });

      _mailer2.default.sendMail({
        to: cd_email,
        name: 'Esqueceu a Senha',
        from: { name: 'Mateus Limongi', address: 'leonardo.rosa@summercomunicacao.com.br' },
        subject: 'Esqueceu a senha',
        template: 'auth/forgot_password',
        context: { resetToken },
      });

      return res.json({ resetToken });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new ResetPasswordController();
