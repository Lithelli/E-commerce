import React from "react";
import PropTypes from "prop-types";
import RSF1 from "../assets/RSF1.jpeg";
import SL1 from "../assets/SL1.jpg";
import SL2 from "../assets/SL2.jpg";
import SL from "../assets/SL.jpg";
import RSF6 from "../assets/RSF6.jpg";
import RSF3 from "../assets/RSF3.jpeg";
import RSF5 from "../assets/RSF5.jpg";
import RSF2 from "../assets/RSF2.jpg";



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
  let picture;
  if(img === "RSF1"){
    picture = RSF1
  } else if (img === "SL"){
    picture = SL
  } else if (img === "SL1"){
    picture = SL1
  }  else if (img === "SL2"){
    picture = SL2
  }  else if (img === "RSF2"){
    picture = RSF2
  } else if (img === "RSF5"){
    picture = RSF5
  } else if (img === "RSF6"){
    picture = RSF6
  } else if (img === "RSF3"){
    picture = RSF3
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
