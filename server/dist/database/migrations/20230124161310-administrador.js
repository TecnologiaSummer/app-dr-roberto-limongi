"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tb_administrador', {
      cd_administrador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_administrador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cd_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ic_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      cd_password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cd_password_reset_token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cd_password_reset_expires: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      dt_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dt_atualizacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('tb_administrador'),

};
