import React from 'react';
import classNames from 'classnames';
import TabAccount from '../../components/tab-account/tab-account.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectTotalAmount,
  selectTaxes,
} from '../../redux/cart/cart.selectors';
import {
  changeQuantityToCart,
  removeItemToCart,
} from '../../redux/cart/cart.actions';

const CartPage = (props) => {
  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          <div className="columns account-header">
            <div className="column main-column is-tablet-landscape-padded">
              <div className="account-title">
                <h2>MY CART</h2>
                <img
                  className="brand-filigrane"
                  src="assets/img/logo/nephos-greyscale.svg"
                  alt=""
                />
              </div>

              <TabAccount location={props.location.pathname} />

              <div
                className={classNames('main-placeholder', {
                  'is-hidden': props.items.length,
                })}
              >
                <div className="placeholder-content">
                  <img
                    src="https://nephos.cssninja.io/assets/img/illustrations/shop.svg"
                    alt=""
                  />
                  <h3>Empty Cart</h3>
                  <p>
                    Your shopping cart is currenlty empty. Start adding products
                    to be able to checkout.
                  </p>
                  <div className="button-wrap">
                    <a
                      href="products.html"
                      className="button big-button primary-button rounded raised"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={classNames('columns is-account-grid is-multiline', {
                  'is-hidden': props.items.length == 0,
                })}
              >
                <div className="account-loader">
                  <div className="loader is-loading"></div>
                </div>
                <div id="cart-page-products" className="column is-8">
                  <div
                    className="flat-card is-auto cart-card product-container"
                    data-product-id="13"
                  >
                    <ul className="cart-content">
                      {props.items.map((product, idx) => (
                        <li key={`product_${idx}`}>
                          <img src={product.pic} />
                          <span className="product-info">
                            <span>{product.name}</span>
                            <span>{product.category}</span>
                          </span>
                          <span className="product-price">
                            <span>Price</span>
                            <span>{product.price}</span>
                          </span>

                          <div
                            data-trigger="spinner"
                            className="main-cart-spinner"
                          >
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
                            <span className="spinner-value">
                              {product.quantity}
                            </span>
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

                          <span className="action">
                            <div className="action-link is-remove remove-from-cartpage-action has-simple-popover">
                              <a onClick={() => props.removeItem(product)}>
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="flat-card cart-order-summary">
                    <div className="button-wrap">
                      <div className="summary-header">
                        <span className="span">
                          <i className="fas fa-trash" />
                        </span>
                        <div>
                          <var>1</var> <span>Item(s) in Cart</span>
                        </div>
                      </div>
                      <div className="cart-summary-list">
                        <div className="summary-item">
                          <span>Subtotal</span>
                          <span className="amount">{props.totalAmount}</span>
                        </div>
                        <div className="summary-item">
                          <span>Taxes</span>
                          <span className="amount">{props.taxes}</span>
                        </div>
                        <div className="summary-item">
                          <span>Shipping</span>
                          <span className="amount">0.00</span>
                        </div>
                        <div className="summary-item is-bold">
                          <span>Total</span>
                          <span className="amount">
                            {props.totalAmount + props.taxes}
                          </span>
                        </div>
                      </div>
                      <button className="button is-fullwidth feather-button is-bold primary-button raised is-rounded">
                        Checkout
                      </button>
                      <button className="button is-fullwidth feather-button is-bold secondary-button raised is-rounded is-hidden">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalAmount: selectTotalAmount,
  taxes: selectTaxes,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (item) => dispatch(changeQuantityToCart(item)),
  removeItem: (item) => dispatch(removeItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
