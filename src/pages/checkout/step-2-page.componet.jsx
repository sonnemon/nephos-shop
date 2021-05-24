import React from 'react';
import ActionBar from '../../components/action-bar/action-bar.component';
import CheckoutSide from '../../components/checkout-side/checkout-side.component';

const Step2Page = () => {
  return (
    <>
      <ActionBar step={2} />
      <div class="shop-wrapper">
        <div class="section no-padding">
          <div class="checkout-wrapper" data-checkout-step="2">
            <div class="checkout-main">
              <div class="checkout-container">
                <div class="checkout-shipping-methods">
                  <h2>Shipping Method</h2>
                  <p>
                    Choose one of the above shipping methods to continue
                    checkout.
                  </p>

                  <div class="shipping-methods-grid">
                    <div class="columns is-multiline">
                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="5.00">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/ground.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>Ground Shipping</h3>
                              <p>
                                If you want the traditional good old school
                                method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="8.50">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/tram.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>Ground Express</h3>
                              <p>
                                If you want the traditional good old school
                                method
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="15.00">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/world.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>Air Express</h3>
                              <p>If you want to ship your items worldwide</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="65.00">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/container.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>International</h3>
                              <p>If you want to ship your items worldwide</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="6.50">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/ups.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>UPS</h3>
                              <p>
                                If you want to use our dedicated UPS services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="5.85">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/usps.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>USPS</h3>
                              <p>
                                If you want to use our dedicated USPS services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="column is-6">
                        <div class="method-card" data-shipping-rate="9.95">
                          <input type="radio" name="shipping_methods" />
                          <div class="method-card-inner">
                            <div class="icon-container">
                              <img
                                src="assets/img/icons/checkout/fedex.svg"
                                alt=""
                              />
                              <div class="indicator gelatine">
                                <i data-feather="check"></i>
                              </div>
                            </div>
                            <div class="meta">
                              <h3>Fedex Express</h3>
                              <p>
                                If you want to use our Fedex Express services
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
export default Step2Page;
