[![npm](https://img.shields.io/npm/v/ts-http-error.svg)](https://www.npmjs.com/package/ts-http-error)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# ts-http-error
Custom HTTP error for typescript

# Install
```sh
npm install --save ts-http-error
```
or
```sh
yarn add ts-http-error
```

# Usage
```typescript
import { BadRequest } from 'ts-http-error'
```

# Example
### Error.ts
```typescript
import { BadRequest } from 'ts-http-error'

export default const error = {
  GET_PRODUCT_ERROR = BadRequest(1000, 'Get product error'),
  GET_PRODUCTS_ERROR = BadRequest(1001, 'Get products error')
}
```

### ProductService.ts
```typescript
export default class ProductService {
  public getProduct(id: string) {
    try {
      ...do stuff
    } catch (e) {
      throw error.GET_PRODUCT_ERROR
    }
  }

  public getProducts() {
    try {
      ...do stuff
    } catch (e) {
      throw error.GET_PRODUCTS_ERROR
    }
  }
}
```

# Contributing
1. Fork this repository.
2. Create new branch with feature name.
3. Run `npm install` or `yarn`
3. Create your feature.
4. Commit and set commit message with feature name.
5. Push your code to your fork repository.
6. Create pull request.

# Licence
[MIT](LICENCE)

Made with love