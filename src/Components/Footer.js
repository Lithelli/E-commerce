import React, { Component } from 'react'
import Subscribe from '../Components/Subscribe';
import Contact from '../Components/Contact';
import SocialInfo from '../Components/Social';

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
          showCart: false,
          showContact: false,
          showSocial: false
        }
        this.toggleSubscribe = this.toggleSubscribe.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.toggleSocial = this.toggleSocial.bind(this);
      }
      toggleSubscribe(e){
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
      toggleContact(e){
        e.preventDefault();
        if(!this.state.showContact){
          this.setState({
            showContact: true
          })
        } else {
          this.setState({
            showContact: false
          })
        }
      }
      toggleSocial(e){
        e.preventDefault();
        if(!this.state.showSocial){
          this.setState({
            showSocial: true
          })
        } else {
          this.setState({
            showSocial: false
          })
        }
      }

  render() {
    return (
    <div className="Footer"> 
        <div className="Content">
            <div className="Social">
                <p
                onClick={(e) => this.toggleSocial(e)}
                >
                  Social
                </p>
                {
          this.state.showSocial
          ? <SocialInfo closeContact={this.toggleSocial}/>
          : null
        }
            </div>
            <div className="Contact">
                <p
                onClick={(e) => this.toggleContact(e)}
                >
                  Contact
                </p>
                {
          this.state.showContact
          ? <Contact closeContact={this.toggleContact}/>
          : null
        }
            </div>
            <div className="Subscribe" >
                <p
                onClick={(e) => this.toggleSubscribe(e)}
                >
                Subscribe
                </p>
            {
          this.state.showCart
          ? <Subscribe closeCart={this.toggleSubscribe}/>
          : null
        }
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
