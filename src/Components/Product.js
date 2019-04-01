import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, quantity, title, img }) => {
  return (
    <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
   </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string
}

export default Product
