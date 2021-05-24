import React from 'react';
import ActionBar from '../../components/action-bar/action-bar.component';
import CheckoutSide from '../../components/checkout-side/checkout-side.component';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Step1Page = (props) => {
  return (
    <>
      <ActionBar step={1} />
      <div className="shop-wrapper">
        <div className="section no-padding">
          <div className="checkout-wrapper" data-checkout-step="1">
            <div className="checkout-main">
              <div className="checkout-container">
                <div className="flex-table">
                  <div className="flex-table-header">
                    <span className="product">
                      <span>Product</span>
                    </span>
                    <span className="quantity">Quantity</span>
                    <span className="price">Price</span>
                    <span className="discount">Discount</span>
                    <span className="total">Total</span>
                  </div>

                  {props.cartItems.map((item, idx) => (
                    <div className="flex-table-item" key={`product_${idx}`}>
                      <div className="product">
                        <img src={item.pic} />
                        <span className="product-name">{item.name}</span>
                      </div>
                      <div className="quantity">
                        <span>{item.quantity}</span>
                      </div>
                      <div className="price">
                        <span className="has-price">{item.price}</span>
                      </div>
                      <div className="discount">
                        <span className="has-price">0</span>
                      </div>
                      <div className="total">
                        <span className="has-price">
                          {item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="coupon-wrapper">
                  <h3>Apply Coupon Code</h3>
                  <p>
                    Enter any promotional code you have here. Promotional codes
                    can only be used once.
                  </p>
                  <div className="field">
                    <div className="control has-icon is-bigger">
                      <input
                        type="text"
                        className="input is-default"
                        placeholder="Paste Coupon Code"
                      />
                      <div className="form-icon">
                        <i className="fas fa-tag"></i>
                      </div>
                      <button className="button primary-button raised coupon-button">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CheckoutSide step="step1" />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Step1Page);
