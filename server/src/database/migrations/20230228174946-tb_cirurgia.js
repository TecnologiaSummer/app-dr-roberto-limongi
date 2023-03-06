"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("tb_cirurgia", {
      cd_cirurgia: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      nm_cirurgia: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      ds_pre_operatorio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      ds_pos_operatorio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      ds_exames: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      ds_medicamentos: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      dt_criado_em: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      dt_atualizado_em: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tb_cirurgia");
  },
};
