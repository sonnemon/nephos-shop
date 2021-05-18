import React from 'react';
import classNames from 'classnames';
import TabAccount from '../../components/tab-account/tab-account.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartProducts } from '../../redux/cart/cart.selectors';

const CartPage = (props) => {
  return (
    <div id="cart-page" className="section">
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
                'is-hidden': props.products.length,
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
                'is-hidden': props.products.length == 0,
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
                    {props.products.map((product, idx) => (
                      <li key={`product_${idx}`}>
                        <img
                          src={`https://nephos.cssninja.io/${product.images[0].url}`}
                          data-demo-src="assets/img/products/office9.png"
                          alt=""
                        />
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
                            data-spin="spinner"
                            data-rule="quantity"
                            data-min="1"
                            data-max="99"
                          />
                          <a
                            className="spinner-button is-remove"
                            data-spin="down"
                          >
                            <i className="fas fa-minus" />
                          </a>
                          <span className="spinner-value">2</span>
                          <a className="spinner-button is-add" data-spin="up">
                            <i className="fas fa-plus" />
                          </a>
                        </div>

                        <span className="action">
                          <div className="action-link is-remove remove-from-cartpage-action has-simple-popover">
                            <a>
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
                        <var id="cart-page-count">1</var>{' '}
                        <span>Item(s) in Cart</span>
                      </div>
                    </div>
                    <div className="cart-summary-list">
                      <div className="summary-item">
                        <span>Subtotal</span>
                        <span id="cart-summary-subtotal" className="amount">
                          960.00
                        </span>
                      </div>
                      <div className="summary-item">
                        <span>Taxes</span>
                        <span id="cart-summary-taxes" className="amount">
                          57.60
                        </span>
                      </div>
                      <div className="summary-item">
                        <span>Shipping</span>
                        <span id="cart-summary-shipping" className="amount">
                          0.00
                        </span>
                      </div>
                      <div className="summary-item is-bold">
                        <span>Total</span>
                        <span id="cart-summary-total" className="amount">
                          1017.60
                        </span>
                      </div>
                    </div>
                    <button
                      id="init-checkout"
                      className="button is-fullwidth feather-button is-bold primary-button raised is-rounded"
                    >
                      Checkout
                    </button>
                    <button
                      id="update-cart-page"
                      className="button is-fullwidth feather-button is-bold secondary-button raised is-rounded is-hidden"
                    >
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
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCartProducts,
});
export default connect(mapStateToProps)(CartPage);
