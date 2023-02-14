import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

class TokenController {
  async store(req, res) {
    const { cd_email = '', password = '' } = req.body;

    if (!cd_email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Invalidas'],
      });
    }

    const admin = await Admin.findOne({ where: { cd_email } });

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

    const token = jwt.sign({ cd_administrador, cd_email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
