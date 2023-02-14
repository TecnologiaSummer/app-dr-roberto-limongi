import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import adminRoutes from './routes/adminRoutes';
import tokenRoutes from './routes/tokenRoutes';
import resetPasswordRoutes from './routes/resetPasswordRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/administrador/', adminRoutes);
    this.app.use('/auth/', tokenRoutes);
    this.app.use('/forgot_password/', resetPasswordRoutes);
  }
}

export default new App().app;
