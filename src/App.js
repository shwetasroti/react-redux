import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import WishlistPage from './containers/Wishlist';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/wishlist" component={WishlistPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
