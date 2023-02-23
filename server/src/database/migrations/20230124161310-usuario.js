module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tb_usuarios', {
      cd_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cd_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cd_password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cd_reset_hash: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cd_reset_expira_em: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ic_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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

  down: (queryInterface) => queryInterface.dropTable('tb_usuarios'),

};
