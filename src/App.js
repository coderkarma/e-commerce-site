import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    // open subscriptions
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user})
      createUserProfileDocument(user);
      // console.log(user)
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
