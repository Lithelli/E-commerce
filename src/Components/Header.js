import React, { Component } from 'react'



export default class Header extends Component {
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
        onClick
        >
          Bag
        </div>
      </div>
    )
  }
}



//////// Need to figure how I want to handle styling import. This will be the header of the new page!