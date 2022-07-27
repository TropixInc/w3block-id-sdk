const { getConfig } = require('./config');
const { generateApi } = require('swagger-typescript-api');
const fs = require('fs');
const path = require('path');

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
  const config = getConfig();
  const { files } = await generateApi({
    input: path.resolve(config.swagger.dest, config.swagger.filename),
    httpClientType: 'axios',
    generateRouteTypes: true,
  })

  files.forEach(({ content, name }) => {
    fs.writeFileSync(config.output.api, `${filePrefix}${content}`, );
    console.log(`Generated ${name} to ${config.output.api}`);
  });
};

run().catch((e) => console.error(e));