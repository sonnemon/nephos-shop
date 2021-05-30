import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenCartMenu } from '../../redux/app/app.selector';
import { onToggleCartMenu } from '../../redux/app/app.actions';
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors';
import {
  changeQuantityToCart,
  removeItemToCart,
} from '../../redux/cart/cart.actions';

const CartMenu = (props) => {
  return (
    <div
      className={classNames('cart-quickview', { 'is-active': props.isOpen })}
    >
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
          <span className="cart-total">{props.total}</span>
          <Link
            to="/cart"
            className="button view-cart-button primary-button upper-button raised is-bold"
          >
            <span>View Cart</span>
          </Link>
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
          <ul className="shopping-cart-items">
            {props.cartItems.map((product, idx) => (
              <li className="clearfix" key={`cart_item_${idx}`}>
                <img src={product.pic} />
                <span className="item-meta">
                  <span className="item-name">{product.name}</span>
                  <span className="item-price">
                    <var>{product.price}</var> x <span>{product.quantity}</span>
                  </span>
                </span>
                <span className="quantity">
                  <div className="sidebar-spinner">
                    <input
                      className="hidden-spinner"
                      type="hidden"
                      value={product.quantity}
                      data-min="1"
                      data-max="99"
                    />
                    <a
                      onClick={() =>
                        props.changeQuantity({
                          ...product,
                          quantity: product.quantity - 1,
                        })
                      }
                      className="spinner-button is-remove"
                    >
                      <i className="fas fa-minus"></i>
                    </a>
                    <span className="spinner-value">{product.quantity}</span>
                    <a
                      onClick={() =>
                        props.changeQuantity({
                          ...product,
                          quantity: product.quantity + 1,
                        })
                      }
                      className="spinner-button is-add"
                    >
                      <i className="fas fa-plus"></i>
                    </a>
                  </div>
                </span>

                <span
                  onClick={() => props.removeItem(product)}
                  className="remove-item"
                >
                  <i className="has-simple-popover fas fa-times"></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenCartMenu,
  cartItems: selectCartItems,
  total: selectTotal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: () => dispatch(onToggleCartMenu()),
  changeQuantity: (item) => dispatch(changeQuantityToCart(item)),
  removeItem: (item) => dispatch(removeItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);
