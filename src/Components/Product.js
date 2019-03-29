import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, quantity, title, img }) => {
  console.log(img, "productImg")
  // let picture = url('../assets/cycling1.jpg')
  // console.log(picture, 'sup')
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
