import React from 'react';
import backtitle from '../../images/logo/nephos-greyscale.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import classNames from 'classnames';
import TabAccount from '../../components/tab-account/tab-account.component';

const AccountPage = (props) => {
  const { user } = props;
  const [billingAddress, shippingAddress] = user.addresses;
  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          <div className="columns account-header">
            <div className="column main-column is-tablet-landscape-padded">
              <div className="account-title">
                <h2>ACCOUNT</h2>
                <img className="brand-filigrane" src={backtitle} alt="" />
              </div>

              <TabAccount location={props.location.pathname} />

              <div className="main-placeholder is-hidden">
                <div className="placeholder-content">
                  <img src="assets/img/illustrations/profile.svg" alt="" />
                  <h3>Welcome, Guest</h3>
                  <p>
                    Guest users don't have accounts. Please login or register to
                    view your account.
                  </p>
                  <div className="button-wrap">
                    <a
                      href="/authentication.html"
                      className="button big-button primary-button rounded raised"
                    >
                      Log In
                    </a>
                  </div>
                  <a>Don't have an account?</a>
                </div>
              </div>

              <div className="columns is-account-grid is-multiline">
                {/* <div className="account-loader is-active">
                <div className="loader is-pulled is-loading"></div>
              </div> */}
                <div className="column is-5">
                  <div className="flat-card profile-card is-auto">
                    <div className="card-body">
                      <div className="profile-image">
                        <img src={user.photoUrl} />
                      </div>
                      <div className="username has-text-centered">
                        <span id="full-name">{`${user.firstName} ${user.lastName}`}</span>
                        <small id="full-email">{user.email}</small>
                      </div>
                    </div>
                    <div className="profile-footer has-text-centered">
                      <span className="achievement-title">
                        Next Achievement
                      </span>
                      <div className="count">24/150</div>
                    </div>
                  </div>
                  <div className="flat-card profile-info-card is-auto is-dark is-achievement">
                    <div className="card-body">
                      <img src="assets/img/logo/nephos-gold.svg" alt="" />
                      <div className="achievement-name">
                        <span className="is-gold">Nephos Gold Customer</span>
                        <span>
                          As a Gold Customer, you have a permanent 10% discount
                          on all your purchases.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flat-card profile-info-card is-auto is-dark is-achievement">
                    <div className="card-body">
                      <img src="assets/img/logo/nephos-referral.svg" alt="" />
                      <div className="achievement-name">
                        <span className="is-green">Nephos Referer</span>
                        <span>
                          You have referred <b>30+</b> customers. You get a 2.5%
                          discount on all your purchases.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-7">
                  <div className="flat-card profile-info-card is-auto">
                    <div className="card-title">
                      <h3>Account details</h3>

                      <div
                        className="edit-account has-simple-popover popover-hidden-mobile"
                        data-content="Edit Account"
                        data-placement="top"
                      >
                        <a href="account-edit.html">
                          <i className="fas fa-cog"></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="columns">
                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">First Name</span>
                            <span
                              id="account-first-name"
                              className="label-value"
                            >
                              {user.firstName}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Email</span>
                            <span id="account-email" className="label-value">
                              {user.email}
                            </span>
                          </div>
                        </div>

                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">Last Name</span>
                            <span
                              id="account-last-name"
                              className="label-value"
                            >
                              {user.lastName}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Phone</span>
                            <span
                              id="account-phone-number"
                              className="label-value"
                            >
                              {user.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="card-bg"
                      src="assets/img/logo/nephos-greyscale.svg"
                      alt=""
                    />
                  </div>

                  <div className="flat-card profile-info-card is-auto">
                    <div className="card-title">
                      <h3>Billing address</h3>
                      <div className="edit-account is-vhidden">
                        <a href="account-edit.html">
                          <i
                            className="feather-icons"
                            data-feather="settings"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="columns">
                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">Number</span>
                            <span className="label-value address1">
                              {billingAddress.address1}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">City</span>
                            <span className="label-value city">
                              {billingAddress.city}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">State</span>
                            <span className="label-value state">
                              {billingAddress.state}
                            </span>
                          </div>
                        </div>

                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">Street</span>
                            <span className="label-value address2">
                              {billingAddress.address2}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Postal Code</span>
                            <span className="label-value postal-code">
                              {billingAddress.postalCode}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Country</span>
                            <span className="label-value country">
                              {billingAddress.country}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={classNames(
                      'flat-card profile-info-card is-auto',
                      {
                        'is-hidden': shippingAddress.disabled,
                      }
                    )}
                  >
                    <div className="card-title">
                      <h3>Shipping address</h3>
                      <div className="edit-account is-vhidden">
                        <a href="account-edit.html">
                          <i
                            className="feather-icons"
                            data-feather="settings"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="columns">
                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">Number</span>
                            <span className="label-value address1">
                              {shippingAddress.address1}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">City</span>
                            <span className="label-value city">
                              {shippingAddress.city}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">State</span>
                            <span className="label-value state">
                              {shippingAddress.state}
                            </span>
                          </div>
                        </div>

                        <div className="column is-6">
                          <div className="info-block">
                            <span className="label-text">Street</span>
                            <span className="label-value address2">
                              {shippingAddress.address2}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Postal Code</span>
                            <span className="label-value postal-code">
                              {shippingAddress.postalCode}
                            </span>
                          </div>

                          <div className="info-block">
                            <span className="label-text">Country</span>
                            <span className="label-value country">
                              {shippingAddress.country}
                            </span>
                          </div>
                        </div>
                      </div>
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
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);
