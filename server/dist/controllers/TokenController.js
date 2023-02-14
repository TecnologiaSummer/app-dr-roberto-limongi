"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

class TokenController {
  async store(req, res) {
    const { cd_email = '', password = '' } = req.body;

    if (!cd_email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Invalidas'],
      });
    }

    const admin = await _Admin2.default.findOne({ where: { cd_email } });

    if (!admin) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await admin.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha Invalida'],
      });
    }

    const { cd_administrador } = admin;

    const token = _jsonwebtoken2.default.sign({ cd_administrador, cd_email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

exports. default = new TokenController();
