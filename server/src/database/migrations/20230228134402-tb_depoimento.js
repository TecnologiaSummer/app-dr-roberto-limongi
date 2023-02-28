"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("tb_depoimento", {
      cd_depoimento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      ds_depoimento: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      cd_paciente: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("tb_depoimento");
  },
};
