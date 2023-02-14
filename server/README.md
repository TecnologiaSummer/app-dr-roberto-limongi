npx eslint --init
npm i nodemon sucrase -D
npm i express
npm i dotenv
npm i sequelize
npm i -D sequelize-cli
npm i bcryptjs
npm i jsonwebtoken
npm i multer // RECEBER ARQUIVOS


SEQUELIZE DOCUMENTATION: https://sequelize.org/docs/v6/getting-started/
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database

MIGRATIONS
npx sequelize migration:create --name=tb_name
npx sequelize db:migrate
npx sequelize db:migrate:undo // desfaz o comando acima

SEEDS
npx sequelize seed:generate --name criar-usuarios
npx sequelize db:seed:all

LIST
1º Criar a migração,
2º Criar o Model,
3º Criar o Controller,
