import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenHomeMenu } from '../../redux/app/app.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { onToggleHomeMenu } from '../../redux/app/app.actions';

const HomeMenu = (props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    let quantity = 0;
    for (const item of props.cartItems) {
      quantity = quantity + item.quantity;
    }
    setTotalQuantity(quantity);
  }, [props.cartItems]);
  return (
    <div
      className={classNames('shop-quickview has-background-image', {
        'is-active': props.isOpen,
      })}
    >
      <div className="inner">
        <div className="quickview-header">
          <h2>Nephos</h2>
          <span
            onClick={() => props.toggleHomeMenu()}
            className="close-shop-sidebar icon"
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <ul className="shop-menu">
          <li>
            <Link to="/category">
              <span>Shop</span>
              <i className="fas fa-th-large"></i>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <span>All Products</span>
              <i className="fas fa-box"></i>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <span>My Account</span>
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <span>My Orders</span>
              <i className="fas fa-credit-card"></i>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <span>My Wishlists</span>
              <i className="fas fa-heart"></i>
            </Link>
          </li>
        </ul>
        <ul className="user-profile">
          <li>
            {props.user ? (
              <a>
                <img src={props.user.photoUrl} />
                <span className="user">
                  <span id="quickview-username">{props.user.firstName}</span>
                  <span id="quickview-cart-count">
                    <var>{totalQuantity}</var> <small>Items in Cart</small>
                  </span>
                </span>
              </a>
            ) : (
              <a>
                <img src="http://via.placeholder.com/250x250" />
                <span className="user">
                  <span id="quickview-username">Guest</span>
                  <span id="quickview-cart-count">
                    <var>{totalQuantity}</var> <small>Items in Cart</small>
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenHomeMenu,
  user: selectCurrentUser,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHomeMenu: () => dispatch(onToggleHomeMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
