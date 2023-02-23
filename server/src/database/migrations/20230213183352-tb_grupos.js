module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tb_grupos', {
      cd_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_grupo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nm_descricao: {
        type: Sequelize.STRING,
        allowNull: false,
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

  down: (queryInterface) => queryInterface.dropTable('tb_grupos'),

};
