const { getConfig, handleCatch } = require('./config');
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
    generateResponses: true,
    defaultResponseAsSuccess: true,
    hooks: {
      onParseSchema: (schema, parsed) => {
        // Parse ChainId enum correctly
        if (parsed.name === 'ChainId' && parsed.schemaType === 'enum') {
          const chainIds = {
            1: 'Mainnet',
            3: 'Ropsten',
            4: 'Rinkeby',
            5: 'Goerli',
            42: 'Kovan',
            1337: 'Local',
            137: 'Polygon',
            80001: 'Mumbai',
          };

          parsed.content = parsed.content.map((content) => {
            const chainIdValue = JSON.parse(content.value);
            return {
              key: chainIds[chainIdValue],
              type: 'number',
              value: chainIdValue
            };
          });
        }
        return parsed;
      },
      onPrepareConfig: (config) => {
        config.additionalProperties = false;
        return config;
      }
    }
  })

  files.forEach(({ content, name }) => {
    fs.writeFileSync(config.output.api, `${filePrefix}${content}`, );
    console.log(`Generated ${name} to ${config.output.api}`);
  });
};

run().catch(handleCatch);
