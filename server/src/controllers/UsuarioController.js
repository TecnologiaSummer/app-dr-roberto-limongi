import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      const { cd_usuario, nm_usuario, cd_email } = novoUsuario;
      return res.status(201).json({ cd_usuario, nm_usuario, cd_email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.status(200).json(usuarios);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          cd_usuario: req.params.id,
          ic_status: true,
        },
      });

      if (!usuario) {
        return res.status(401).json({
          errors: ['ID inválido ou Administrador Desativado'],
        });
      }

      const { cd_usuario, nm_usuario, cd_email } = usuario;

      return res.json({ cd_usuario, nm_usuario, cd_email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: {
          cd_usuario: req.params.id,
        },
      });

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await usuario.update(req.body);
      const { cd_usuario, nm_usuario, cd_email } = novosDados;
      return res.json({ cd_usuario, nm_usuario, cd_email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      // await administrador.destroy(req.body);
      await usuario.update({
        ic_status: false,
      });
      return res.json({ usuario: 'Usuário desativado com sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuarioController();
