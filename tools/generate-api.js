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

generateApi({
    name: FILENAME,
    url: process.env.SWAGGER_JSON_PATH || 'http://localhost:6007/sdk-json',
    httpClientType: 'axios',
    generateRouteTypes: true,
  })
  .then(({ files, configuration }) => {
    files.forEach(({ content, name }) => {
      console.log('TARGET PATH => ', OUTPUT_PATH, name);
      fs.writeFileSync(path.resolve(OUTPUT_PATH, name), `${filePrefix}${content}`, );

    });
  })
  .catch((e) => console.error(e));