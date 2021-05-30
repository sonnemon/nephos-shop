import React from 'react';
import classNames from 'classnames';
import ActionBar from '../../components/action-bar/action-bar.component';
import CheckoutSide from '../../components/checkout-side/checkout-side.component';
import ShippingIcons from '../../components/shipping-icons/shipping-icons.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setShippingMethod } from '../../redux/cart/cart.actions';
import { selectShippingMethod } from '../../redux/cart/cart.selectors';
import { selectShippingList } from '../../redux/shipping/shipping.selectors';
const Step2Page = (props) => {
  return (
    <>
      <ActionBar step={2} />
      <div className="shop-wrapper">
        <div className="section no-padding">
          <div className="checkout-wrapper" data-checkout-step="2">
            <div className="checkout-main">
              <div className="checkout-container">
                <div className="checkout-shipping-methods">
                  <h2>Shipping Method</h2>
                  <p>
                    Choose one of the above shipping methods to continue
                    checkout.
                  </p>

                  <div className="shipping-methods-grid">
                    <div className="columns is-multiline">
                      {props.shippingList.map((shipping, idx) => (
                        <div className="column is-6" key={`shipping_${idx}`}>
                          <div
                            className={classNames('method-card is-selected')}
                          >
                            <input
                              type="radio"
                              name="shipping_methods"
                              checked={
                                props.shipping
                                  ? props.shipping.id == shipping.id
                                  : false
                              }
                              onChange={({ target }) =>
                                target.checked && props.setShipping(shipping)
                              }
                            />
                            <div className="method-card-inner">
                              <div className="icon-container">
                                <ShippingIcons id={shipping.id} />
                                <div className="indicator gelatine">
                                  <i className="fas fa-check"></i>
                                </div>
                              </div>
                              <div className="meta">
                                <h3>{shipping.name}</h3>
                                <p>{shipping.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CheckoutSide step="step2" />
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  shippingList: selectShippingList,
  shipping: selectShippingMethod,
});
const mapDispatchToProps = (dispatch) => ({
  setShipping: (item) => dispatch(setShippingMethod(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step2Page);
