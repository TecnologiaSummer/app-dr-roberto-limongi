module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tb_permissoes', {
      cd_permissao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nm_nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('tb_permissoes'),

};
