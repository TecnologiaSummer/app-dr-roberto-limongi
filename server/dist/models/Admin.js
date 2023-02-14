"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Admin extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      cd_administrador: {
        type: _sequelize2.default.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: {
          msg: 'O código já está cadastrado',
        },
      },
      nm_administrador: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cd_email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      ic_status: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: true,
      },
      cd_password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cd_password_reset_token: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cd_password_reset_expires: {
        type: _sequelize2.default.DATE,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 a 50 caracteres',
          },
        },
      },

    }, {
      sequelize,
      modelName: 'tb_administrador',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.cd_password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.cd_password_hash);
  }
} exports.default = Admin;
