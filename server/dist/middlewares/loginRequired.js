"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { cd_administrador, cd_email } = dados;
    const administrador = await _Admin2.default.findOne({
      where: {
        cd_administrador,
        cd_email,
      },
    });

    if (!administrador) {
      return res.status(401).json({
        errors: ['Usuário inválido.'],
      });
    }

    req.administradorId = cd_administrador;
    req.administradorEmail = cd_email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
