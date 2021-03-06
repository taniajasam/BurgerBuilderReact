import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import {Route, Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  // state = {
  //   show: true
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   },5000);
  // }

  render() {
    return (
      <div>
        <Layout>
         {/* {this.state.show ? <BurgerBuilder /> : null} */}
         <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
         </Switch>
         
        </Layout>
      </div>
    );
  }
}

export default App;
