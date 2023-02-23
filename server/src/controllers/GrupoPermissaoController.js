import GrupoPermissao from '../models/GrupoPermissao';

// import Grupo from '../models/Grupo';
import Permissao from '../models/Permissao';

class GrupoPermissaoController {
  async show(req, res) {
    const grupo = await Grupo.findOne({
      where: {
        cd_grupo: req.params.cd_grupo,
        ic_status: true,
      },
    });

    const { cd_grupo, nm_grupo } = grupo;

    if (cd_grupo === 1) {
      return res.status(403).json({ info: [`Não é necessário atribuir ou remover permissões de acesso para o grupo ${nm_grupo} pois esse grupo é Administrador.`] });
    }

    if (cd_grupo === 2) {
      return res.status(403).json({ info: [`Não é necessário atribuir ou remover permissões de acesso para o grupo de ${nm_grupo}.`] });
    }

    if (cd_grupo > 2) {

    }

    return res.json('2OI');
  }

  recuperaPermissoesDoGrupo(id) {
    GrupoPermissao.findAll({ attributes: ['cd_grupo'] });
  }
}

export default new GrupoPermissaoController();
