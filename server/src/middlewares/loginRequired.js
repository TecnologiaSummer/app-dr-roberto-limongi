import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { cd_administrador, cd_email } = dados;
    const administrador = await Admin.findOne({
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
