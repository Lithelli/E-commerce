import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <div className="Footer"> 
        <div className="Content">
            <div className="Social">
                Social
            </div>
            <div className="Contact">
                Contact
            </div>
            <div className="Subscribe">
                Subscribe
            </div>
        </div>
        <div className="Legal">
            <div className="Terms">
                Terms Of Service
            </div>
            <div className="CopyRight">
                Copyright © 2019 Scotty Harmon Sunglasses®
            </div>
        </div>
    </div>
    )
  }
}
