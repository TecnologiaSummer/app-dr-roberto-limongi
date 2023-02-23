const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('tb_usuarios', [
    {
      nm_usuario: 'Gustavo',
      cd_email: 'contato@summercomunicacao.com.br',
      cd_password_hash: await bcryptjs.hash('123456', 8),
      dt_criado_em: new Date(),
      dt_atualizado_em: new Date(),

    },
    {
      nm_usuario: 'Leonardo',
      cd_email: 'leonardo.rosa@summercomunicacao.com.br',
      cd_password_hash: await bcryptjs.hash('123456', 8),
      dt_criado_em: new Date(),
      dt_atualizado_em: new Date(),

    },
    {
      nm_usuario: 'João',
      cd_email: 'joao.gorgonio@summercomunicacao.com.br',
      cd_password_hash: await bcryptjs.hash('123456', 8),
      dt_criado_em: new Date(),
      dt_atualizado_em: new Date(),

    },
    {
      nm_usuario: 'Mateus',
      cd_email: 'mateus.santos@summercomunicacao.com.br',
      cd_password_hash: await bcryptjs.hash('123456', 8),
      dt_criado_em: new Date(),
      dt_atualizado_em: new Date(),

    },
    {
      nm_usuario: 'Enzo',
      cd_email: 'enzo.costa@summercomunicacao.com.br',
      cd_password_hash: await bcryptjs.hash('123456', 8),
      dt_criado_em: new Date(),
      dt_atualizado_em: new Date(),

    }], {}),

  down: () => {},
};
