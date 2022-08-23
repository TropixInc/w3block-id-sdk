# W3block ID SDK 
## Installation

Install the package with npm
```
npm i @w3block/sdk-id --save
```

Use the package in the project

```js
import 'dotenv/config'
import { W3blockIdSDK } from '@w3block/pixwayid-sdk'

async function main() {
  const sdk = new W3blockIdSDK({
    credential: {
      email: 'your-email',
      password: 'your-password',
      tenantId: 'your-id',
    },
    baseURL: 'http://localhost:6007',
    autoRefresh: false
  });
}

main().then(() => {
  console.log('script running with success')
})


```



## Generate Api from Swagger

`SWAGGER_JSON_PATH=http://localhost:6007/sdk-json npm run gen:api`
