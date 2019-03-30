import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer';


export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCart: false
    }
    this.toggleCart = this.toggleCart.bind(this);
  }
  toggleCart(e){
    e.preventDefault();
    if(!this.state.showCart){
      this.setState({
        showCart: true
      })
    } else {
      this.setState({
        showCart: false
      })
    }
  }
  render() {
    return (
        <div className="Header">
        <div className="Title">
            <span className="long-text">Scotty Harmon Sunglasses</span>
            <span className="short-text">Scotty Harmon</span>
        </div>
        <div className="Search">
          Search
        </div>
        <div className="Menu">
            Menu
        </div>
        <div
          className="Bag"
          onClick={(e) => this.toggleCart(e)}
        >
          Bag
        </div>
        {
          this.state.showCart
          ? <CartContainer closeCart={this.toggleCart}/>
          : null
        }

      </div>
    )
  }
}



//////// Need to figure how I want to handle styling import. This will be the header of the new page!
