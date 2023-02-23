import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Grupo from '../models/Grupo';
import Permissao from '../models/Permissao';
import GrupoPermissao from '../models/GrupoPermissao';

const models = [Usuario, Grupo, Permissao, GrupoPermissao];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
