# react-cart-components

> A react shopping cart components with redux with instant updates for e-commerce applications

[![NPM](https://img.shields.io/npm/v/react-cart-components.svg)](https://www.npmjs.com/package/react-cart-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package provides several components:

- [**Cart**](#cart)
- [**CartReducers**](#cartreducers)
- [**AddCartButton**](#addtocartbutton)

**Meta**

- **author**: Dennis Paler &lt;dtpaler@gmail.com>
- **license**: MIT

#### Features

- Add and remove product to the cart
- Cart Products persist after page reloads

## Demo

demo: [`https://react-cart-components-demo.herokuapp.com/`](https://react-cart-components-demo.herokuapp.com/)


## Install

```bash
npm install --save react-cart-components
```

## Usage

**With Redux.**

```jsx
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'


import { CartReducers } from react-cart-components'

const store = createStore(
  combineReducers({
    cart: CartReducers
    // Your own reducers here,
  })
);

import React, { Component } from 'react'

import { Cart, AddCartButton } from 'react-cart-components'

const products = [
  {
    id: 1,
    name: 'Flamboyant Pink Top',
    sku: 'kskskskks',
    price: 200.0,
    image: 'https://colorlib.com/preview/theme/divisima/img/product/6.jpg'
  },
  {
    id: 2,
    name: 'Black and White Stripes Dress',
    sku: 'kskskskks',
    price: 300.0,
    image: 'https://colorlib.com/preview/theme/divisima/img/product/5.jpg'
  },
  {
    id: 3,
    name: 'Flamboyant Pink Top',
    sku: 'kskskskks',
    price: 400.0,
    image: 'https://colorlib.com/preview/theme/divisima/img/product/7.jpg' 
  },
  {
    id: 4,
    name: 'Flamboyant Pink Top',
    sku: 'kskskskks',
    price: 400.0,
    image: 'https://colorlib.com/preview/theme/divisima/img/product/8.jpg' 
  },
];

class Example extends Component {
  render () {
    return (
      <Cart currency="USD" />
      <div>
      {products.map((product, key) => {
            return (
                <div className="col" key={key}>
                  <div className="product-item">
                    <div className="pi-pic">
                       <img src={product.image} />
                       <div className="pi-links">
                          <AddCartButton
                            product={product}
                            styles={{ backgroundColor: '#009688', color: 'white', border: '0' }}
                          />
                       </div>
                    </div>
                    <div className="pi-text">
                        <p>{product.name}</p>
                        <h6>{formatter.format(product.price)}</h6>
                    </div>
                  </div>
                </div>
              );
      })}
      </div>
    )
  }
}
```


## Props

### Cart Component

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| currencySymbol | string | `USD` | Currency symbol to be used |
| checkoutTextLabel | string | `Checkout` | A checkout button text on the cart |
| cartTextLabel | string | `Your Cart` | A cart header title |
| subTotalTextLabel | string | `Sub Total` |  Cart  - Sub Total Text |
| quantityTextLabel | string | `Quantity` |  Cart  - Product Qty Text |
| handleCheckout | Function | null |  `handleCheckout` will be triggered when `checkoutLabel` button is clicked and return cart products object. |


### AddCartButton

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| product | Object | null | (Required) Product object to be added to the cart |
| styles | Array[Object] \| Object | `[{}]` | The style used for button |
| addLabel | string | `Add to Cart` | A add cart button text |


Type: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

**Properties**

- `id` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Product's id. Required.
- `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Product Name to display pattern. Required.
- `price` **[Price](#price)** {currency: value}. Required
- `image` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to main image. Required.

## License

MIT © [Dennis Paler](https://github.com/akosidencio)
