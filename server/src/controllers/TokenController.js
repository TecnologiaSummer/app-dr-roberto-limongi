import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async store(req, res) {
    const { cd_email = '', password = '' } = req.body;

    if (!cd_email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Invalidas'],
      });
    }

    const usuario = await Usuario.findOne({ where: { cd_email } });

    if (!usuario) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await usuario.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha Invalida'],
      });
    }

    const { cd_usuario } = usuario;

    const token = jwt.sign({ cd_usuario, cd_email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, usuario: { cd_usuario, nome: usuario.nm_usuario, cd_email } });
  }
}

export default new TokenController();
