import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenHomeMenu } from '../../redux/app/app.selector';
import { onToggleHomeMenu } from '../../redux/app/app.actions';

const HomeMenu = (props) => {
  return (
    <div
      className={`shop-quickview has-background-image ${
        props.isOpen ? 'is-active' : ''
      }`}
      data-background="http://via.placeholder.com/1280x853"
      data-demo-background="assets/img/bg/sidebar.jpeg"
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
            <a>
              <img
                id="quickview-avatar"
                src="http://via.placeholder.com/250x250"
                data-demo-src="assets/img/avatars/altvatar.png"
                alt=""
              />
              <span className="user">
                <span id="quickview-username">Guest</span>
                <span id="quickview-cart-count">
                  <var>0</var> <small>Items in Cart</small>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenHomeMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHomeMenu: () => dispatch(onToggleHomeMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
