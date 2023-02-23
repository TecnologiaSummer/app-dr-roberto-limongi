import Sequelize, { Model } from 'sequelize';

export default class GrupoPermissao extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: {
          msg: 'O código já está cadastrado',
        },
      },
      cd_grupo: {
        type: Sequelize.INTEGER,

      },
      cd_permissao: {
        type: Sequelize.INTEGER,

      },
    }, {
      sequelize,
      tableName: 'tb_grupos_permissoes',

    });
  }
}
