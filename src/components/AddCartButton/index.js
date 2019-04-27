import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import { connect } from 'react-redux'
import { addProduct } from '../../actions';
import { formatPrice } from '../../helpers';

export class AddCartButton extends Component {
  static propTypes = {
    product: PropTypes.object,
    currency: PropTypes.string,
    styles: PropTypes.object
  }

  addProductToCart = (event, product) => {
    product.quantity = 1;
    this.props.addProduct(product)
  }

  render() {
    const {
      product,
      styles,
    } = this.props

    return (
      <div>
        <button style={{ ...styles }} onClick={ (event) => this.addProductToCart(event, product)}>Add</button> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addProduct: (product) => dispatch(addProduct(product)) }
}

export default connect(
  null,
  mapDispatchToProps
)( AddCartButton);

