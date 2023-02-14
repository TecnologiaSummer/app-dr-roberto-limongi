import crypto from 'crypto';
import mailer from '../modules/mailer';
import Admin from '../models/Admin';

class ResetPasswordController {
  async store(req, res) {
    try {
      const { cd_email = '' } = req.body;

      const admin = await Admin.findOne({ where: { cd_email } });

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
        from: { name: 'Esqueceu a senha', address: 'leonardo.rosa@summercomunicacao.com.br' },
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

export default new ResetPasswordController();
