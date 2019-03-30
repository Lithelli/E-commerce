import React from "react";
import PropTypes from "prop-types";
import cycling1 from "../assets/cycling1.jpg";
import SL1 from "../assets/SL1.jpg";
import SL2 from "../assets/SL2.jpg";
import SL from "../assets/SL.jpg";
import p2 from "../assets/p2.jpg";


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div
    className="PCard"
    onClick={onAddToCartClicked}
    disabled={product.inventory > 0 ? "" : "disabled"}
  >
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
      img={product.img}
    />
    {product.inventory > 0 ? "Add to cart" : "Sold Out"}
  </div>
);


const Product = ({ price, quantity, title, img }) => {
  console.log(img, "productImg")
  let picture;
  // console.log(picture, 'sup')
  if(img == "cycling1"){
    picture = cycling1
  } else if (img == "SL"){
    picture = SL
  } else if (img == "SL1"){
    picture = SL1
  }  else if (img == "SL2"){
    picture = SL2
  }  else if (img == "p2"){
    picture = p2
  }
  return (
    <div>
      <img style={{width: "100%"}} src={picture}/>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
   </div>
  )
}


ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    img: PropTypes.string
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
