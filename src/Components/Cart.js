import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  let totalP = 0;
  products.map(p => {totalP = totalP+p.quantity})
  const hasProducts = products.length > 0;
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
    <em>Add some merch to the bag.</em>
  )

  return (
    <div className="BagCheckout">
      <h3>Your Bag</h3>
      <p>Quanity: {totalP}</p>
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
