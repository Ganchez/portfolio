const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

const typesArray = loadFilesSync(path.join(__dirname, '../src/models/*/*.graphql'), { recursive: true });
const typeDefs = mergeTypeDefs(typesArray);

const resolversArray = loadFilesSync(path.join(__dirname, '../src/models/*/*.ts'), { recursive: true });
const resolvers = mergeResolvers(resolversArray);

module.exports = {
  typeDefs,
  resolvers
};

export {}