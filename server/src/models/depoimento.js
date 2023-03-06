"use strict";
const { Model, Sequelize } = require("sequelize");
export default class Depoimento extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, {
      through: "tb_usuario",
      as: "usuario",
      foreignKey: "cd_paciente",
    });
  }
  static init(sequelize) {
    super.init(
      {
        cd_depoimento: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: {
            msg: "O código já está cadastrado",
          },
        },

        ds_depoimento: {
          type: Sequelize.TEXT,
          defaultValue: "",
        },

        ic_aprovado: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },

        cd_paciente: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: true,
        tableName: "tb_depoimento",
      }
    );
  }
}
