import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const TabAccount = ({ location, controls }) => {
  return (
    <div
      className={classNames('tabs account-tabs', { 'has-controls': controls })}
    >
      <ul>
        <li className={classNames({ 'is-active': location == '/account' })}>
          <Link to="/account">Account</Link>
        </li>
        <li className={classNames({ 'is-active': location == '/wishlist' })}>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className={classNames({ 'is-active': location == '/cart' })}>
          <Link to="/cart">Cart</Link>
        </li>
        <li className={classNames({ 'is-active': location == '/orders' })}>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};
export default TabAccount;
