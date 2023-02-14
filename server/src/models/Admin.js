import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Admin extends Model {
  static init(sequelize) {
    super.init({
      cd_administrador: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: {
          msg: 'O código já está cadastrado',
        },
      },
      nm_administrador: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cd_email: {
        type: Sequelize.STRING,
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
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      cd_password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cd_password_reset_token: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cd_password_reset_expires: {
        type: Sequelize.DATE,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
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
        user.cd_password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.cd_password_hash);
  }
}
