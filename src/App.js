import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};
export default App;
