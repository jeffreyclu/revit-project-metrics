const sql = require('mssql');

const config = {
  user: process.env.WEB_DATABASE_USER,
  password: process.env.WEB_DATABASE_PASSWORD,
  database: process.env.WEB_DATABASE_STAGING, // TODO: add rule to change this to production DB when not in dev
  server: process.env.WEB_DATABASE_SERVER,
  options: {
    encrypt: true,
  }
};

module.exports = {
  query: (text) => {
    // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
    return sql.connect(config).then((pool) => {
      if (process.env.NODE_ENV !== 'production') console.log('executed query', text);
      return pool.query(text)
    })
  }
}