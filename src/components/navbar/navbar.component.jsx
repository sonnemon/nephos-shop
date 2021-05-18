import React, { useState } from 'react';
import classNames from 'classnames';
import main_logo from '../../images/logo/nephos.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { onToggleSidebar } from '../../redux/app/app.actions';
import { selectIsOpenSidebar } from '../../redux/app/app.selector';

const Navbar = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav
      className={classNames(
        'navbar mobile-navbar is-hidden-desktop is-hidden-tablet',
        { 'is-active': props.isHidden }
      )}
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={main_logo} alt="" />
        </Link>

        <a
          onClick={() => props.onToggle()}
          className="navbar-item is-icon is-sidebar-toggler"
        >
          <span className="icon">
            <i className="fas fa-arrow-right" />
          </span>
        </a>

        <div
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className={classNames('navbar-burger', { 'is-active': isOpenMenu })}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classNames('navbar-menu', { 'is-active': isOpenMenu })}>
        <div className="navbar-item has-dropdown">
          <a href="account.html" className="navbar-link">
            <img
              id="mobile-avatar"
              src="http://via.placeholder.com/250x250"
              data-demo-src="assets/img/avatars/altvatar.png"
              alt=""
            />
            <span id="mobile-username" className="is-heading">
              Welcome, Guest
            </span>
          </a>

          <div className="navbar-dropdown">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="cart-empty.html" className="navbar-item is-flex">
              <span>Cart</span>
              <span id="mobile-cart-count" className="menu-badge">
                0
              </span>
            </a>
            <a href="/account.html" className="navbar-item">
              Account
            </a>
            <a href="/wishlists.html" className="navbar-item">
              Wishlists
            </a>
            <a href="/orders.html" className="navbar-item">
              Orders
            </a>
            <a
              id="mobile-login-link"
              href="authentication.html"
              className="navbar-item"
            >
              Login
            </a>
            <a
              id="mobile-register-link"
              href="authentication.html"
              className="navbar-item"
            >
              Register
            </a>
            <a id="mobile-logout-link" className="navbar-item is-hidden">
              Logout
            </a>
          </div>
        </div>

        <div className="navbar-item has-dropdown">
          <a className="navbar-link">
            <i data-feather="grid"></i>
            <span className="is-heading">Categories</span>
          </a>

          <div className="navbar-dropdown">
            <a href="products.html" className="navbar-item">
              House
            </a>
            <a href="products.html" className="navbar-item">
              Office
            </a>
            <a href="products.html" className="navbar-item">
              Kids
            </a>
            <a href="products.html" className="navbar-item">
              Kitchen
            </a>
            <a href="products.html" className="navbar-item">
              Accessories
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  isHidden: selectIsOpenSidebar,
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch(onToggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
