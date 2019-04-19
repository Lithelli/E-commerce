import React, { Component } from 'react'


export default class Menu extends Component {
  render() {
    return (
      <div className="DropMenu">
        <div className="MenuSearch">
        <input type="search" placeholder="Search" size="1"/>
        </div>
        <div className="MenuItem">
            Designer Collection
        </div>
        <div className="MenuItem">
            New Products
        </div>
      </div>
    )
  }
}
