module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tb_grupos_permissoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cd_grupo: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_grupos', key: 'cd_grupo' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      cd_permissao: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_permissoes', key: 'cd_permissao' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },

    });
  },

  down: (queryInterface) => queryInterface.dropTable('tb_grupos_permissoes'),

};
