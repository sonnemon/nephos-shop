import React from 'react';
import classNames from 'classnames';
import main_logo from '../../images/logo/nephos.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  selectIsOpenSearchMenu,
  selectIsOpenHomeMenu,
  selectIsOpenCartMenu,
  selectIsOpenSidebar,
} from '../../redux/app/app.selector';
import {
  onToggleCartMenu,
  onToggleHomeMenu,
  onToggleSearchMenu,
  onToggleSidebar,
} from '../../redux/app/app.actions';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const MainSidebar = (props) => {
  return (
    <div
      className={classNames('main-sidebar', {
        'is-pushed-mobile': props.isOpenSidebar && props.isMobile,
      })}
    >
      <div className="sidebar-brand">
        <Link to="/">
          <img src={main_logo} alt="" />
        </Link>
      </div>
      <div className="sidebar-inner">
        <ul className="icon-menu">
          <li>
            <a
              className={`${props.isOpenHomeMenu ? 'is-active' : ''}`}
              onClick={() => props.toggleHomeMenu()}
            >
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
            </a>
          </li>
          <li>
            <a
              className={`${props.isOpenCartMenu ? 'is-active' : ''}`}
              onClick={() => props.toggleCartMenu()}
            >
              <span className="icon">
                <i className="fas fa-shopping-cart"></i>
              </span>
            </a>
          </li>

          <li>
            <a
              className={classNames({
                'is-active': props.isOpenSearchMenu,
                'is-hidden': props.isOpenSearchMenu,
              })}
              onClick={() => props.toogleSearchMenu()}
            >
              <span className="icon">
                <i className="fas fa-search"></i>
              </span>
            </a>
            <a
              onClick={() => props.toogleSearchMenu()}
              className={classNames({
                'is-hidden': !props.isOpenSearchMenu,
                'is-inactive': !props.isOpenSearchMenu,
              })}
            >
              <span className="icon">
                <i className="fas fa-times"></i>
              </span>
            </a>
          </li>

          <li className="is-hidden">
            <a id="open-filters">
              <i data-feather="filter"></i>
            </a>
          </li>
          <li id="sidebar-wishlist-button" className="is-hidden">
            <a
              className="sidebar-whishlist modal-trigger"
              data-modal="add-to-wishlist-modal"
            >
              <i data-feather="heart"></i>
            </a>
          </li>
        </ul>

        <ul className="bottom-menu">
          <li className="is-hidden-mobile">
            <div className="small-auth-loader">
              <div className="loader is-loading"></div>
            </div>
            <Link
              to="/authentication"
              className={classNames({ 'is-hidden': props.currentUser })}
            >
              <span className="icon has-text-gray">
                <i className="fas fa-user"></i>
              </span>
            </Link>
            <a
              onClick={() => props.signOut()}
              className={classNames({ 'is-hidden': !props.currentUser })}
            >
              <span className="icon">
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </a>
          </li>
          {/* this is for mobile */}
          <li id="fold-link" className="fold-link">
            <a onClick={() => props.onToggleSidebar()}>
              <span className="icon">
                <i className="fas fa-arrow-left" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpenHomeMenu: selectIsOpenHomeMenu,
  isOpenCartMenu: selectIsOpenCartMenu,
  isOpenSearchMenu: selectIsOpenSearchMenu,
  isOpenSidebar: selectIsOpenSidebar,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: () => dispatch(onToggleCartMenu()),
  toggleHomeMenu: () => dispatch(onToggleHomeMenu()),
  toogleSearchMenu: () => dispatch(onToggleSearchMenu()),
  onToggleSidebar: () => dispatch(onToggleSidebar()),
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebar);
