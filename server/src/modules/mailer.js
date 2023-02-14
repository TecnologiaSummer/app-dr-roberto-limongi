const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
require('dotenv').config();

const host = process.env.HOST;
const port = process.env.PORT;
const user = process.env.USER;
const pass = process.env.PASS;

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

transport.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/'),
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}));

module.exports = transport;
