const get = require('../../db/get')

const draw = async () => {
  const response = await get()
  console.log('response', response)
  return {
    title: 'teste',
  }
}

module.exports = {
  Query: { draw }
}

export {}