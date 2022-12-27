import knex from 'knex';

const get = async () => {
  return await knex('draws')
}

module.exports = get

export {}