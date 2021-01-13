module.exports = {
  development: {
    username: "gu0o4k354t57ctu9",
    password: "jsay3hcfeykbvptc",
    database: "i3obq7e8af1uteo3",
    host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
