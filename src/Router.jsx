import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/home.component';
import CategoryPage from './pages/category-page/category-page.component';
import Authentication from './pages/authentication/authentication.component';
import ProductList from './pages/produc-list/product-list.component';
import ProductDetail from './pages/product-detail/product-detail.component';
import AccountPage from './pages/account-page/account-page.component';
import WishlistPage from './pages/wishlist-page/wishlist-page.component';
import CartPage from './pages/cart-page/cart-page.component';
import OrdersPage from './pages/orders-page/orders-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

const Router = (props) => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/category" component={CategoryPage} exact />
      <Route path="/products/:category" component={ProductList} exact />
      <Route path="/product/:productId" component={ProductDetail} exact />
      <Route
        path="/authentication"
        exact
        render={(routeProps) =>
          props.currentUser ? (
            <Redirect to="/account" />
          ) : (
            <Authentication {...routeProps} />
          )
        }
      />
      <Route path="/cart" exact component={CartPage} />

      <Route
        path="/account"
        exact
        render={(routeProps) =>
          props.currentUser ? (
            <AccountPage {...routeProps} />
          ) : (
            <Redirect to="/authentication" />
          )
        }
      />
      <Route
        path="/wishlist"
        exact
        render={(routeProps) =>
          props.currentUser ? (
            <WishlistPage {...routeProps} />
          ) : (
            <Redirect to="/authentication" />
          )
        }
      />
      <Route
        path="/orders"
        exact
        render={(routeProps) =>
          props.currentUser ? (
            <OrdersPage {...routeProps} />
          ) : (
            <Redirect to="/authentication" />
          )
        }
      />
    </Switch>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Router);
