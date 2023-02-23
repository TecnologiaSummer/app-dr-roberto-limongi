module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('tb_grupos', [{
    nm_grupo: 'Administrado',
    nm_descricao: 'Grupo com acesso total ao sistema.com',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },
  {
    nm_grupo: 'Clientes',
    nm_descricao: 'Esse grupo é destinado para atribuição de clientes, pois os mesmos poderão logar no sistema para acessar suas ordens de serviços',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },
  {
    nm_grupo: 'Atendentes',
    nm_descricao: 'Esse grupo acessa o sistema para realizar atendimento aos clientes.',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },

  {
    nm_grupo: 'Especialista em Microcomponentes',
    nm_descricao: 'Grupo que será escolhido como opção na hora de definir um responsável técnico pela ordem de serviço.',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },
  {
    nm_grupo: 'Gerente',
    nm_descricao: 'Acessa o sistema como gerente.',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },
  {
    nm_grupo: 'Financeiro',
    nm_descricao: 'Acessa o sistema para trabalhar como financeiro.',
    dt_criado_em: new Date(),
    dt_atualizado_em: new Date(),
  },
  ], {}),

  down: () => {},
};
