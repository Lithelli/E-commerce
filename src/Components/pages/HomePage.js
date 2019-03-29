import React, { Component } from 'react';
import Header from '../Header';
import HPI from '../HPI'
import Footer from '../Footer';
import ProductsContainer from '../../containers/ProductsContainer';
import CartContainer from '../../containers/CartContainer';



class Home extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
          <Header/>
          <CartContainer />
          <HPI/>
          </header>
          <ProductsContainer className="PCardC"/>
          <Footer />
        </div>
      );
    }
  }
  
   export default Home;