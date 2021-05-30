import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';

import MainSidebar from '../components/main-sidebar/main-sidebar.component';
import Navbar from '../components/navbar/navbar.component';
import QuickView from '../components/quick-view/quick-view.component';
import CategoryMenu from '../components/category-menu/category-menu.component';
import HomeMenu from '../components/home-menu/home-menu.component';
import CartMenu from '../components/cart-menu/cart-menu.component';
import SearchMenu from '../components/search-menu/search-menu.component';
import ModalAddToWishlist from '../components/modal-add-to-wishlist/modal-add-to-wishlist.component';
import { resetMenu } from '../redux/app/app.actions';
import { connect } from 'react-redux';

const AppLayout = ({ children, history, resetMenu, ...otherProps }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  history.listen(() => {
    resetMenu(isMobile);
  });

  return (
    <>
      {!history.location.pathname.includes('checkout') && <Navbar />}
      <MainSidebar isMobile={isMobile} />
      <QuickView />
      <CategoryMenu />
      <HomeMenu />
      <CartMenu />
      <SearchMenu />
      {children}
      <ModalAddToWishlist />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetMenu: (payload) => dispatch(resetMenu(payload)),
});
export default connect(null, mapDispatchToProps)(withRouter(AppLayout));
