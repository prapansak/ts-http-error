[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# ts-http-error
Custom HTTP error for typescript

## Install
```sh
npm install https://github.com/prapansak/ts-http-error.git
```
or
```sh
yarn add https://github.com/prapansak/ts-http-error.git
```

## Usage
```typescript
import { BadRequest } from 'ts-http-error'
```

## Example
### Error.ts
```typescript
import { BadRequest } from 'ts-http-error'

export default const error = {
  ProductNotFound = BadRequest(1000, 'Product not found'),
  UnableGetProduct = BadRequest(1001, 'Unable get product')
}
```

### ProductService.ts
```typescript
export default class ProductService {
  public getProduct(id: string) {
    try {
      // do stuff
    } catch (e) {
      throw error.ProductNotFound
    }
  }

  public getProducts() {
    try {
      // do stuff
    } catch (e) {
      throw error.UnableGetProduct
    }
  }
}
```

## Contributing
1. Fork this repository.
2. Create new branch with feature name.
3. Run `npm install` or `yarn`
3. Create your feature.
4. Commit and set commit message with feature name.
5. Push your code to your fork repository.
6. Create pull request.

## Licence
[MIT](LICENCE)

Made with love