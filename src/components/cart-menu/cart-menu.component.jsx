import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenCartMenu } from '../../redux/app/app.selector';
import { onToggleCartMenu } from '../../redux/app/app.actions';

const CartMenu = (props) => {
  return (
    <div className={`cart-quickview ${props.isOpen ? 'is-active' : ''}`}>
      <div className="inner">
        <div className="quickview-header">
          <h2>Quick Cart</h2>
          <span
            onClick={() => props.toggleCartMenu()}
            className="close-shop-sidebar icon"
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="cart-action">
          <span className="cart-total">0.00</span>
          <a
            href="cart.html"
            className="button view-cart-button primary-button upper-button raised is-bold"
          >
            <span>View Cart</span>
          </a>
          <a className="button update-cart-button upper-button is-bold is-hidden">
            <span>Update</span>
          </a>
        </div>
        <div className="cart-body">
          <div className="empty-cart has-text-centered is-hidden">
            <img src="assets/img/icons/line/bag.svg" alt="" />
            <h3>Your cart is empty</h3>
            <p>Start by adding products to it</p>
            <a href="shop.html" className="button big-button rounded">
              Continue Shopping
            </a>
            <small>You can create your account later</small>
          </div>

          {/* <div className="cart-loader is-active">
            <div className="loader is-loading"></div>
          </div> */}

          <ul className="shopping-cart-items">
            <li className="clearfix">
              <img
                src="http://via.placeholder.com/250x250"
                data-demo-src="assets/img/products/office5.jpg"
                alt=""
              />
              <span className="item-meta">
                <span className="item-name">Cosy Chair</span>
                <span className="item-price">
                  <var>88.00</var> x <span>1</span>
                </span>
              </span>
              <span className="quantity">
                <div data-trigger="spinner" className="return-spinner">
                  <input
                    className="hidden-spinner"
                    type="hidden"
                    value="1"
                    data-spin="spinner"
                    data-rule="quantity"
                    data-min="1"
                    data-max="99"
                  />
                  <a className="spinner-button is-remove" data-spin="down">
                    <i data-feather="minus"></i>
                  </a>
                  <span className="spinner-value">1</span>
                  <a className="spinner-button is-add" data-spin="up">
                    <i data-feather="plus"></i>
                  </a>
                </div>
              </span>

              <span className="remove-item">
                <i
                  data-feather="x"
                  className="has-simple-popover"
                  data-content="Remove from Cart"
                  data-placement="top"
                ></i>
              </span>
            </li>
            <li className="clearfix">
              <img
                src="http://via.placeholder.com/250x250"
                data-demo-src="assets/img/products/red-seat.png"
                alt=""
              />
              <span className="item-meta">
                <span className="item-name">Red Seat</span>
                <span className="item-price">
                  <var>45.00</var> x <span>1</span>
                </span>
              </span>
              <span className="quantity">
                <div data-trigger="spinner" className="return-spinner">
                  <input
                    className="hidden-spinner"
                    type="hidden"
                    value="1"
                    data-spin="spinner"
                    data-rule="quantity"
                    data-min="1"
                    data-max="99"
                  />
                  <a className="spinner-button is-remove" data-spin="down">
                    <i data-feather="minus"></i>
                  </a>
                  <span className="spinner-value">1</span>
                  <a className="spinner-button is-add" data-spin="up">
                    <i data-feather="plus"></i>
                  </a>
                </div>
              </span>

              <span className="remove-item">
                <i
                  data-feather="x"
                  className="has-simple-popover"
                  data-content="Remove from Cart"
                  data-placement="top"
                ></i>
              </span>
            </li>
            <li className="clearfix">
              <img
                src="http://via.placeholder.com/250x250"
                data-demo-src="assets/img/products/kids2.jpg"
                alt=""
              />
              <span className="item-meta">
                <span className="item-name">Rabbit Lamp</span>
                <span className="item-price">
                  <var>14.49</var> x <span>3</span>
                </span>
              </span>
              <span className="quantity">
                <div data-trigger="spinner" className="return-spinner">
                  <input
                    className="hidden-spinner"
                    type="hidden"
                    value="3"
                    data-spin="spinner"
                    data-rule="quantity"
                    data-min="1"
                    data-max="99"
                  />
                  <a className="spinner-button is-remove" data-spin="down">
                    <i data-feather="minus"></i>
                  </a>
                  <span className="spinner-value">3</span>
                  <a className="spinner-button is-add" data-spin="up">
                    <i data-feather="plus"></i>
                  </a>
                </div>
              </span>

              <span className="remove-item">
                <i
                  data-feather="x"
                  className="has-simple-popover"
                  data-content="Remove from Cart"
                  data-placement="top"
                ></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenCartMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: () => dispatch(onToggleCartMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
