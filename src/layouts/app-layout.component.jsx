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

import { resetMenu } from '../redux/app/app.actions';
import { connect } from 'react-redux';

const AppLayout = ({ children, history, resetMenu }) => {
  history.listen(() => {
    resetMenu(resetMenu);
  });
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 300);
  }, []);

  return (
    <>
      <div
        className={classNames('pageloader is-full', {
          'is-active': isLoading,
        })}
      />
      <div
        className={classNames('infraloader is-full', {
          'is-active': isLoading,
        })}
      />
      <Navbar />
      <MainSidebar isMobile={isMobile} />
      <QuickView />
      <CategoryMenu />
      <HomeMenu />
      <CartMenu />
      <SearchMenu />
      <div
        className="shop-wrapper has-background-image"
        data-background="http://via.placeholder.com/1920x1080"
        data-demo-background="assets/img/bg/main-bg.jpg"
      >
        {children}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetMenu: () => dispatch(resetMenu()),
});
export default connect(null, mapDispatchToProps)(withRouter(AppLayout));
