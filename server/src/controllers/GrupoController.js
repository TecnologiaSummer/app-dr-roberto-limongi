import Grupo from '../models/Grupo';
import Permissao from '../models/Permissao';

class GrupoController {
  async store(req, res) {
    try {
      const { permissoes, ...data } = req.body;
      const novoGrupo = await Grupo.create(data);

      if (permissoes && permissoes.length > 0) {
        novoGrupo.setPermissoes(permissoes);
      }

      return res.status(201).json(novoGrupo);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const grupos = await Grupo.findAll({
        include: [
          {
            model: Permissao,
            as: 'permissoes',
            through: { attributes: [] },
          },
        ],
      });
      return res.status(200).json(grupos);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const grupo = await Grupo.findOne({
        where: {
          cd_grupo: req.params.id,
          ic_status: true,
        },
      });

      if (!grupo) {
        return res.status(401).json({
          errors: ['ID inválido ou Grupo Desativado'],
        });
      }

      const { cd_grupo, nm_grupo, nm_descricao } = grupo;

      return res.json({ cd_grupo, nm_grupo, nm_descricao });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const grupo = await Grupo.findOne({
        where: {
          cd_grupo: id,
        },
      });

      if (grupo.cd_grupo < 3) {
        return res.status(400).json({
          errors: [`O grupo ${grupo.nm_grupo} não pode ser editado ou excluído.`],
        });
      }

      const { permissoes, ...data } = req.body;
      grupo.update(data);

      if (permissoes && permissoes.length > 0) {
        grupo.setPermissoes(permissoes);
      }

      return res.json(grupo);
    } catch (e) {
      return res.status(400).json({
        errors: ['ID inválido ou Grupo Desativado'],
      });
    }
  }

  async delete(req, res) {
    try {
      const grupo = await Grupo.findByPk(req.params.id);

      if (!grupo) {
        return res.status(400).json({
          errors: ['Grupo não existe.'],
        });
      }

      if (grupo.cd_grupo < 3) {
        return res.status(400).json({
          errors: [`O grupo ${grupo.nm_grupo} não pode ser editado ou excluído.`],
        });
      }

      if (grupo.ic_status === false) {
        return res.status(400).json({ Grupo: 'Esse grupo já se encontra-se excluido.' });
      }

      await grupo.update({
        ic_status: false,
      });
      return res.json({ Grupo: 'Grupo desativado com sucesso' });
    } catch (e) {
      return res.status(400).json({
        errors: ['ID inválido ou Grupo Desativado'],
      });
    }
  }
}

export default new GrupoController();
