module.exports = {
  client: 'pg',
  connection: process.env.DATABASE,
  searchPath: ['knex', 'public'],
};

export {}