import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  let totalP = 0;
  products.map(p => {totalP = totalP+p.inventory})
  const nodes = hasProducts ? (
    products.map(product =>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
        />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className="BagCheckout">
      <h3>Your Cart</h3>
      <p>quantity {totalP}</p>
      <div>{nodes}</div>
      <p className="Total">Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}
        className="CheckoutButton"
        >
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart;
