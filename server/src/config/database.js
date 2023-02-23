require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    createdAt: 'dt_criado_em',
    updatedAt: 'dt_atualizado_em',
  },
  dialectOptions: {
    timezone: '-03:00',
  },
  timezone: '-03:00',
};
