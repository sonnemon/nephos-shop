import { useState, useEffect } from 'react';
import BillingAddress from '../../components/account-forms/billing-address.component';
import ContactInfo from '../../components/account-forms/contact-info.component';
import ShippingAddress from '../../components/account-forms/shipping-address.component';
import TabAccount from '../../components/tab-account/tab-account.component';
import ModalUploadPhoto from '../../components/modal-upload-photo/modal-upload-photo.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { editUserSuccess } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { successToast } from '../../hooks/toast.hook';

const AccountEditPage = (props) => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [info, setinfo] = useState(null);
  const [billingAddress, setbillingAddress] = useState(null);
  const [shippingAddress, setshippingAddress] = useState(null);

  useEffect(() => {
    if (props.user) {
      setinfo(() => (({ addresses, orders, ...o }) => o)(props.user));
      setbillingAddress(props.user.addresses[0]);
      setshippingAddress(props.user.addresses[1]);
    }
  }, [props.user]);

  const onSubmitForms = () => {
    props.editUser({
      ...props.user,
      ...info,
      addresses: [billingAddress, shippingAddress],
    });
    successToast({ meesage: 'Profile successfully edited' })();
  };

  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          <div className="columns account-header">
            <div className="column main-column">
              <div className="account-title">
                <h2>EDIT ACCOUNT</h2>
                <img className="brand-filigrane" src={props.user.pic} />
              </div>

              <TabAccount location="/account" />

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
                <div className="account-loader">
                  <div className="loader is-pulled-lg is-loading"></div>
                </div>
                <div className="column is-4">
                  <div className="flat-card upload-card is-auto">
                    <div className="card-body">
                      <div className="avatar-wrapper has-simple-popover">
                        <img
                          className="profile-pic"
                          src={props.user.photoUrl}
                        />
                        <div
                          onClick={() => setisOpenModal((prev) => !prev)}
                          className="upload-button modal-trigger"
                        >
                          <span className="icon">
                            <i className="fas fa-plus" />
                          </span>
                        </div>
                      </div>

                      <div className="username has-text-centered">
                        <span>{`${props.user.firstName} ${props.user.lastName}`}</span>
                        <span>{props.user.email}</span>
                      </div>

                      <div className="has-text-centered pop-button">
                        <button
                          onClick={() => onSubmitForms()}
                          className="button feather-button primary-button is-rounded raised opaque"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-8">
                  {info && <ContactInfo info={info} setInfo={setinfo} />}

                  {billingAddress && (
                    <BillingAddress
                      address={billingAddress}
                      setaddress={setbillingAddress}
                    />
                  )}

                  {shippingAddress && (
                    <ShippingAddress
                      address={shippingAddress}
                      setaddress={setshippingAddress}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalUploadPhoto
        isOpen={isOpenModal}
        close={() => setisOpenModal(false)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (user) => dispatch(editUserSuccess(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountEditPage);
