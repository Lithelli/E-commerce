import React, { Component } from 'react'

export default class Subscribe extends Component {
  render() {
    return (
      <div className="SubscribeInput">
        <input 
        style={{margin:0}}
        placeholder="Email Address"
        type="email"
        />
        <button 
        style={{margin:0, backgroundColor:"#393638", color:"whitesmoke"}}
        >Sign Up</button>
      </div>
    )
  }
}
