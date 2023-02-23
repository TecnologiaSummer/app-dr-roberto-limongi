import Sequelize, { Model } from 'sequelize';

export default class Permissao extends Model {
  static init(sequelize) {
    super.init({
      cd_permissao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: {
          msg: 'O código já está cadastrado',
        },
      },
      nm_nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Permissão já existe',
        },
      },
    }, {
      sequelize,
      tableName: 'tb_permissoes',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Grupo, {
      through: 'tb_grupos_permissoes',
      as: 'grupos',
      foreignKey: 'cd_permissao',
    });
  }
}
