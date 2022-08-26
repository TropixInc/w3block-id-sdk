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

const handleCatch = (e) => {
  console.group('handleCatch');
  console.error('Message:', e.message);
  console.error('Stack:', e.stack);

  if (e.isAxiosError && e.response) {
    console.error('Response:', e.response.data);
  }

  console.groupEnd();
  process.exit(1);
};

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown', err);
  process.exit(1);
});

module.exports = {
  getConfig,
  handleCatch,
};