import React from 'react';
import ActionBar from '../../components/action-bar/action-bar.component';
import CheckoutSide from '../../components/checkout-side/checkout-side.component';

const Step3Page = () => {
  return (
    <>
      <ActionBar step={3} />
      <div className="shop-wrapper">
        <div className="section no-padding">
          <div className="checkout-wrapper" data-checkout-step="3">
            <div className="checkout-main">
              <div className="checkout-container">
                <div className="checkout-payment-methods">
                  <h2>Payment Method</h2>
                  <p>
                    Choose one of the above shipping methods to continue
                    checkout.
                  </p>

                  <div className="payment-methods-grid">
                    <div className="columns is-multiline">
                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="paypal"
                            type="radio"
                            name="payment_methods"
                            data-value-id="paypal"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/paypal.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Paypal</h3>
                              <p>
                                If you want the traditional good old school
                                method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="stripe"
                            type="radio"
                            name="payment_methods"
                            data-value-id="stripe"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/stripe.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Stripe</h3>
                              <p>
                                If you want the traditional good old school
                                method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="visa"
                            type="radio"
                            name="payment_methods"
                            data-value-id="credit-card"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/visa.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Visa</h3>
                              <p>If you want to ship your items worldwide</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="mastercard"
                            type="radio"
                            name="payment_methods"
                            data-value-id="credit-card"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/mastercard.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Mastercard</h3>
                              <p>If you want to ship your items worldwide</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="cod"
                            type="radio"
                            name="payment_methods"
                            data-value-id="cod"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/cash.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Cash On Delivery</h3>
                              <p>
                                If you want to use our dedicated UPS services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="method-card">
                          <input
                            id="bank-transfer"
                            type="radio"
                            name="payment_methods"
                            data-value-id="bank-transfer"
                          />
                          <div className="method-card-inner">
                            <div className="icon-container">
                              <img
                                src="assets/img/icons/checkout/bank.svg"
                                alt=""
                              />
                              <div className="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div className="meta">
                              <h3>Bank Transfer</h3>
                              <p>
                                If you want to use our dedicated USPS services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="payment-methods-paypal"
                  className="checkout-payment-methods is-hidden"
                >
                  <div className="title-wrap">
                    <a className="payment-back">
                      <i data-feather="chevron-left"></i>
                    </a>
                    <h2>Paypal</h2>
                  </div>
                  <p>Checkout using our paypal integrated services.</p>

                  <div className="checkout-form">
                    <div className="columns">
                      <div className="column is-7">
                        <div className="field">
                          <label>Paypal Email</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="text"
                              className="input is-default"
                              value="elie@mail.com"
                            />
                            <div className="form-icon">
                              <i data-feather="mail"></i>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Paypal Password</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="password"
                              className="input is-default"
                              value="testpassword"
                            />
                            <div className="form-icon">
                              <i data-feather="lock"></i>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Confirm Password</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="password"
                              className="input is-default"
                              value="testpassword"
                            />
                            <div className="form-icon">
                              <i data-feather="lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-5">
                        <div className="payment-disclaimer">
                          <div className="title-wrap">
                            <img
                              src="assets/img/icons/checkout/paypal.svg"
                              alt=""
                            />
                            <h3>Disclaimer</h3>
                          </div>

                          <p>
                            By clicking on "Confirm & Pay", I agree to the
                            Nephos <a>Terms Of Servive</a>, and to the Nephos{' '}
                            <a>Shopping Policy</a>.
                          </p>
                          <p>
                            By doing so, I also agree to the Paypal{' '}
                            <a>Terms Of Servive</a>.
                          </p>

                          <div className="agree-block">
                            <div className="animated-checkbox">
                              <input type="checkbox" />
                              <div className="checkmark-wrap">
                                <div className="shadow-circle"></div>
                                <svg
                                  className="checkmark"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 52 52"
                                >
                                  <circle
                                    className="checkmark-circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                  />
                                  <path
                                    className="checkmark-check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span>I agree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="payment-methods-stripe"
                  className="checkout-payment-methods is-hidden"
                >
                  <div className="title-wrap">
                    <a className="payment-back">
                      <i data-feather="chevron-left"></i>
                    </a>
                    <h2>Stripe</h2>
                  </div>
                  <p>Checkout using our stripe integrated services.</p>

                  <div className="checkout-form">
                    <div className="columns">
                      <div className="column is-7">
                        <div className="field">
                          <label>Stripe Email</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="text"
                              className="input is-default"
                              value="elie@mail.com"
                            />
                            <div className="form-icon">
                              <i data-feather="mail"></i>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Stripe Password</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="password"
                              className="input is-default"
                              value="testpassword"
                            />
                            <div className="form-icon">
                              <i data-feather="lock"></i>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Confirm Password</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="password"
                              className="input is-default"
                              value="testpassword"
                            />
                            <div className="form-icon">
                              <i data-feather="lock"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-5">
                        <div className="payment-disclaimer">
                          <div className="title-wrap">
                            <img
                              src="assets/img/icons/checkout/stripe.svg"
                              alt=""
                            />
                            <h3>Disclaimer</h3>
                          </div>

                          <p>
                            By clicking on "Confirm & Pay", I agree to the
                            Nephos <a>Terms Of Servive</a>, and to the Nephos
                            <a>Shopping Policy</a>.
                          </p>
                          <p>
                            By doing so, I also agree to the Stripe{' '}
                            <a>Terms Of Servive</a>.
                          </p>

                          <div className="agree-block">
                            <div className="animated-checkbox">
                              <input type="checkbox" />
                              <div className="checkmark-wrap">
                                <div className="shadow-circle"></div>
                                <svg
                                  className="checkmark"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 52 52"
                                >
                                  <circle
                                    className="checkmark-circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                  />
                                  <path
                                    className="checkmark-check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span>I agree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="payment-methods-credit-card"
                  className="checkout-payment-methods is-hidden"
                >
                  <div className="title-wrap">
                    <a className="payment-back">
                      <i data-feather="chevron-left"></i>
                    </a>
                    <h2>Credit Card</h2>
                  </div>
                  <p>Checkout using our credit card integration services.</p>

                  <div id="credit-card" className="checkout-form">
                    <div className="demo-container">
                      <div className="form-container active">
                        <form>
                          <div className="columns is-multiline is-gapless">
                            <div className="column is-6">
                              <div className="card-wrapper"></div>
                            </div>
                            <div className="column is-6">
                              <div className="field">
                                <div className="control has-icon">
                                  <input
                                    className="input is-default"
                                    placeholder="Card number"
                                    type="text"
                                    name="number"
                                  />
                                  <div className="form-icon">
                                    <i data-feather="credit-card"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="field">
                                <div className="control has-icon">
                                  <input
                                    className="input is-default"
                                    placeholder="MM/YY"
                                    type="text"
                                    name="expiry"
                                  />
                                  <div className="form-icon">
                                    <i data-feather="clock"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="field">
                                <div className="control has-icon">
                                  <input
                                    className="input is-default"
                                    placeholder="Full name"
                                    type="text"
                                    name="name"
                                  />
                                  <div className="form-icon">
                                    <i data-feather="user"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="field">
                                <div className="control has-icon">
                                  <input
                                    className="input is-default"
                                    placeholder="CVC"
                                    type="text"
                                    name="cvc"
                                  />
                                  <div className="form-icon">
                                    <i data-feather="lock"></i>
                                  </div>
                                </div>
                              </div>
                              <div className="payment-disclaimer is-narrow">
                                <div className="title-wrap">
                                  <img
                                    src="assets/img/icons/checkout/visa.svg"
                                    alt=""
                                  />
                                  <h3>Disclaimer</h3>
                                </div>

                                <p>
                                  By clicking on "Confirm & Pay", I agree to the
                                  Nephos <a>Terms Of Servive</a>, and to the
                                  Nephos
                                  <a>Shopping Policy</a>.
                                </p>
                                <p>
                                  By doing so, I also agree to the Visa{' '}
                                  <a>Terms Of Servive</a>.
                                </p>

                                <div className="agree-block">
                                  <div className="animated-checkbox">
                                    <input type="checkbox" />
                                    <div className="checkmark-wrap">
                                      <div className="shadow-circle"></div>
                                      <svg
                                        className="checkmark"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                      >
                                        <circle
                                          className="checkmark-circle"
                                          cx="26"
                                          cy="26"
                                          r="25"
                                          fill="none"
                                        />
                                        <path
                                          className="checkmark-check"
                                          fill="none"
                                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span>I agree</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="payment-methods-cod"
                  className="checkout-payment-methods is-hidden"
                >
                  <div className="title-wrap">
                    <a className="payment-back">
                      <i data-feather="chevron-left"></i>
                    </a>
                    <h2>Cash On Delivery</h2>
                  </div>
                  <p>Checkout using our cash on delivery service.</p>
                  <div className="checkout-form">
                    <div className="columns">
                      <div className="column is-7">
                        <img
                          className="form-image"
                          src="assets/img/icons/checkout/cash.svg"
                          alt=""
                        />

                        <div className="field">
                          <label>Person Name</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="text"
                              className="input is-default"
                              placeholder="The person in charge of the payment"
                            />
                            <div className="form-icon">
                              <i data-feather="user"></i>
                            </div>
                          </div>
                        </div>

                        <p className="form-text">
                          We need to make sure that you or another person will
                          be there when we deliver your products.
                        </p>
                      </div>

                      <div className="column is-5">
                        <div className="payment-disclaimer">
                          <div className="title-wrap">
                            <img
                              src="assets/img/icons/checkout/cash.svg"
                              alt=""
                            />
                            <h3>Disclaimer</h3>
                          </div>

                          <p>
                            By clicking on "Confirm & Pay", I agree to the
                            Nephos <a>Terms Of Servive</a>, and to the Nephos
                            <a>Shopping Policy</a>.
                          </p>
                          <p>
                            By doing so, I also agree to the Nephos{' '}
                            <a>Cash On Delivery Policy</a>.
                          </p>

                          <div className="agree-block">
                            <div className="animated-checkbox">
                              <input type="checkbox" />
                              <div className="checkmark-wrap">
                                <div className="shadow-circle"></div>
                                <svg
                                  className="checkmark"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 52 52"
                                >
                                  <circle
                                    className="checkmark-circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                  />
                                  <path
                                    className="checkmark-check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span>I agree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="payment-methods-bank-transfer"
                  className="checkout-payment-methods is-hidden"
                >
                  <div className="title-wrap">
                    <a className="payment-back">
                      <i data-feather="chevron-left"></i>
                    </a>
                    <h2>Bank Transfer</h2>
                  </div>
                  <p>Checkout using our bank transfer service.</p>
                  <div className="checkout-form">
                    <div className="columns">
                      <div className="column is-7">
                        <img
                          className="form-image"
                          src="assets/img/icons/checkout/bank.svg"
                          alt=""
                        />

                        <div className="field">
                          <label>Account Number</label>
                          <div className="control has-icon is-bigger">
                            <input
                              type="text"
                              className="input is-default"
                              placeholder="The account that will make the transfer"
                            />
                            <div className="form-icon">
                              <i data-feather="dollar-sign"></i>
                            </div>
                          </div>
                        </div>

                        <p className="form-text">
                          We need to know the account number of the bank account
                          that will make the transfer, so we can process your
                          order efficiently.
                        </p>
                      </div>

                      <div className="column is-5">
                        <div className="payment-disclaimer">
                          <div className="title-wrap">
                            <img
                              src="assets/img/icons/checkout/bank.svg"
                              alt=""
                            />
                            <h3>Disclaimer</h3>
                          </div>

                          <p>
                            By clicking on "Confirm & Pay", I agree to the
                            Nephos <a>Terms Of Servive</a>, and to the Nephos
                            <a>Shopping Policy</a>.
                          </p>
                          <p>
                            By doing so, I also agree to the Nephos{' '}
                            <a>Bank Transfer Policy</a>.
                          </p>

                          <div className="agree-block">
                            <div className="animated-checkbox">
                              <input type="checkbox" />
                              <div className="checkmark-wrap">
                                <div className="shadow-circle"></div>
                                <svg
                                  className="checkmark"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 52 52"
                                >
                                  <circle
                                    className="checkmark-circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                  />
                                  <path
                                    className="checkmark-check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span>I agree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CheckoutSide step="step3" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Step3Page;
