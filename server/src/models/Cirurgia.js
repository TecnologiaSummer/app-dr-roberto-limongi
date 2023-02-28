import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class Cirurgia extends Model {
  static init(sequelize) {
    super.init(
      {
        cd_cirurgia: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: {
            msg: "O código já está cadastrado",
          },
        },

        nm_cirurgia: {
          type: Sequelize.STRING,
        },

        ds_pre_operatorio: {
          type: Sequelize.TEXT,
        },

        ds_pos_operatorio: {
          type: Sequelize.TEXT,
        },

        ds_exames: {
          type: Sequelize.TEXT,
        },

        ds_medicamentos: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        timestamps: true,
        tableName: "tb_cirurgia",
      }
    );
  }
}
