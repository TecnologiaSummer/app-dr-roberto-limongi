"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _adminRoutes = require('./routes/adminRoutes'); var _adminRoutes2 = _interopRequireDefault(_adminRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _resetPasswordRoutes = require('./routes/resetPasswordRoutes'); var _resetPasswordRoutes2 = _interopRequireDefault(_resetPasswordRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/administrador/', _adminRoutes2.default);
    this.app.use('/auth/', _tokenRoutes2.default);
    this.app.use('/forgot_password/', _resetPasswordRoutes2.default);
  }
}

exports. default = new App().app;
