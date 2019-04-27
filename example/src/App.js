import React, { Component } from 'react'

import { AddCartButton } from 'react-cart-components'

const products = [
  {
    id: 1,
    name: 'test product 1',
    sku: 'kskskskks',
    price: 200.00
  },
  {
    id: 2,
    name: 'test product 2',
    sku: 'kskskskks',
    price: 300.00
  },
  {
    id: 3,
    name: 'test product 3',
    sku: 'kskskskks',
    price: 400.00
  }
]

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="container">
        { products.map((product, key) => {
          return <div key={key}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <AddCartButton product={product} styles={{ backgroundColor: 'red', color: 'white' }}/>
          </div>;
        })}
        </div>
      </div>
    )
  }
}
