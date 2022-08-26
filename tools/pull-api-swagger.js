require('dotenv/config');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const { getConfig, handleCatch } = require('./config');

async function run() {
  const config = getConfig();
  const { data } = await axios.get(config.swagger.jsonPath);

  const dest = config.swagger.dest;
  const filename = config.swagger.filename;
  const fullPath = path.resolve(dest, filename);

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));

  console.log(`Generated swagger file at ${fullPath}`);
}

run().catch(handleCatch);