require('dotenv/config');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const FILENAME = 'api-swagger.json';
const OUTPUT_PATH = path.resolve(process.cwd(), './src/api');

async function run() {
  const ENDPOINT = process.env.SWAGGER_JSON_PATH || 'http://localhost:6007/sdk-json';
  const { data } = await axios.get(ENDPOINT);

  const fullPath = path.resolve(OUTPUT_PATH, FILENAME);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));

  console.log(`Generated ${FILENAME} to ${fullPath}`);
}

run().catch((e) => console.error(e));
