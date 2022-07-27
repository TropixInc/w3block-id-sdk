require('dotenv/config');

const path = require('node:path');

const getConfig = (context = 'id') => {
  const rootDir = path.resolve('./');
  return {
    path: {
      rootDir: rootDir,
    },
    swagger: {
      jsonPath: process.env.SWAGGER_JSON_PATH || 'http://localhost:6007/sdk-json',
      dest: path.resolve(rootDir, `./src/${context}/api`),
      filename: 'swagger.json'
    },
    output: {
      api: path.resolve(rootDir, `./src/${context}/api/api.ts`),
    }
  }
};

module.exports = {
  getConfig,
};