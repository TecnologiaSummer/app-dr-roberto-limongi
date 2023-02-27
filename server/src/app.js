import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import usuarioRoutes from './routes/usuarioRoutes';
import grupoRoutes from './routes/grupoRoutes';
import grupoPermissaoRoute from './routes/grupoPermissaoRoute';
import tokenRoutes from './routes/tokenRoutes';
import resetPasswordRoutes from './routes/resetPasswordRoutes';

const whiteList = [
  'https://www.drrobertolimongi.com.br/',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/user/', usuarioRoutes);
    this.app.use('/auth/', tokenRoutes);
    this.app.use('/esqueceu/', resetPasswordRoutes);
    this.app.use('/grupo/', grupoRoutes);
    this.app.use('/grupo/', grupoPermissaoRoute);
  }
}

export default new App().app;
