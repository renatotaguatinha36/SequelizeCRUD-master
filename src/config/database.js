require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'sequelizenode',
  dialect: "mysql"
};
