import crypto from 'crypto';
import mailer from '../modules/mailer';
import Admin from '../models/Usuario';

class ResetPasswordController {
  async store(req, res) {
    try {
      const { cd_email } = req.body;

      const admin = await Admin.findOne({ cd_email });

      if (!admin) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      const resetToken = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);

      await admin.update({
        cd_password_reset_token: resetToken,
        cd_password_reset_expires: now,
      });

      mailer.sendMail({
        to: cd_email,
        name: 'Esqueceu a Senha',
        from: { name: 'Teste', address: 'leonardo.rosa@summercomunicacao.com.br' },
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

  async update(req, res) {
    try {
      const { cd_email, token, password } = req.body;
      const admin = await Admin.findOne({ where: { cd_email } }).select('+passwordResetToken cd_password_reset_expires');

      if (!admin) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      if (token !== admin.cd_password_reset_token) {
        return res.status(400).send({ error: 'TOKEN invalid' });
      }

      const now = new Date();

      if (now > admin.cd_password_reset_expires) {
        return res.status(400).send({ error: 'Token Expired, generate a new one' });
      }

      admin.password = password;

      await admin.save();

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: 'Cannot reset password, try again' });
    }
  }
}

export default new ResetPasswordController();
