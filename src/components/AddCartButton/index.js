import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

import { connect } from 'react-redux'

import { addProduct } from '../../actions';

export default class AddCartButton extends Component {
  static propTypes = {
    product: PropTypes.object
  }

  addProductToCart = (event, product) => {
     console.log(product)
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

