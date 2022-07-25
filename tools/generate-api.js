require('dotenv/config');
const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const fs = require('fs');

const FILENAME = 'api.ts';
const OUTPUT_PATH = path.resolve(process.cwd(), './src/api');

const filePrefix = `/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

`;
async function run() {
  const { files, configuration } = await generateApi({
    name: FILENAME,
    input: path.resolve(OUTPUT_PATH, 'api-swagger.json'),
    // url: process.env.SWAGGER_JSON_PATH || 'http://localhost:6007/sdk-json',
    httpClientType: 'axios',
    generateRouteTypes: true,
  })

  files.forEach(({ content, name }) => {
    const fullPath = path.resolve(OUTPUT_PATH, name);

    fs.writeFileSync(fullPath, `${filePrefix}${content}`, );
    console.log(`Generated ${name} to ${fullPath}`);
  });
};

run().catch((e) => console.error(e));
