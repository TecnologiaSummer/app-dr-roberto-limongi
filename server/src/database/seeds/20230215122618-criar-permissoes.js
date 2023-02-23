module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('tb_permissoes', [{
    nm_nome: 'listar-usuarios',
  },
  {
    nm_nome: 'criar-usuarios',
  }, {
    nm_nome: 'editar-usuarios',
  }, {
    nm_nome: 'excluir-usuarios',
  },

  ], {}),

  down: () => {},
};
