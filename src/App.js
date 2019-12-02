import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/shop/Shop';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
};
export default App;
