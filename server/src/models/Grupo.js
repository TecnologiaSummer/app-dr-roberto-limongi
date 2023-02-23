import Sequelize, { Model } from 'sequelize';

export default class Grupo extends Model {
  static init(sequelize) {
    super.init({
      cd_grupo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: {
          msg: 'O código já está cadastrado',
        },
      },
      nm_grupo: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Grupo já existe',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo grupo deve ter entre 3 e 255 caracteres',
          },
        },
      },
      nm_descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo grupo deve ter entre 3 e 255 caracteres',
          },
        },
      },
      ic_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

    }, {
      sequelize,
      timestamps: true,
      tableName: 'tb_grupos',

    });
  }

  static associate(models) {
    this.belongsToMany(models.Permissao, {
      through: 'tb_grupos_permissoes',
      as: 'permissoes',
      foreignKey: 'cd_grupo',
    });
  }
}
