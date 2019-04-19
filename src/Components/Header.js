import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer';
import SearchIcon from '../assets/search.png'
import Menu from "../Components/Menu";


export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCart: false,
      makeInput: false,
      showMenu: false
    }
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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
  toggleSearch(e){
    e.preventDefault();
    if(!this.state.makeInput){
      this.setState({
        makeInput: true
      })
    } else {
      this.setState({
        makeInput: false
      })
    }
  }
  toggleMenu(e){
    e.preventDefault();
    if(!this.state.showMenu){
      this.setState({
        showMenu: true
      })
    } else {
      this.setState({
        showMenu: false
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
        <div 
        className="Search"
        onClick={(e) => this.toggleSearch(e)}
        >
          <img src={SearchIcon}/>
          <input type="search" placeholder="Search" size="1"/>
          {/* {
            this.state.makeInput
            ? <input type="search" placeholder="Search"/> 
            : null
          } */}
        </div>
        <div className="Menu"
        onClick={(e) => this.toggleMenu(e)}
        >
            Menu
        </div>
        {
          this.state.showMenu
          ? <Menu closeMenu={this.toggleMenu}/>
          : null
        }
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
