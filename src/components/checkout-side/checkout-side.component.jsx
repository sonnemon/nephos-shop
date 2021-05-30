import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectTaxes,
  selectTotal,
  selectTotalAmount,
  selectShippingMethod,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CheckoutSide = (props) => {
  return (
    <div className="checkout-side">
      <div className="side-header">
        <h2 className="side-title">Checkout</h2>
        <a
          onClick={() => props.history.goBack()}
          className="button is-rounded checkout-back"
        >
          Previous
        </a>
      </div>
      <div className="side-inner has-slimscroll">
        <div className="side-card user-card">
          <div className="avatar-container">
            <img src={props.user.photoUrl} />
          </div>
          <div className="meta">
            <span>Checkout as</span>
            <span id="checkout-username">{`${props.user.firstName} ${props.user.lastName}`}</span>
          </div>
        </div>

        <div className="side-card is-address">
          <label className="form-switch is-vhidden">
            <input id="shipping-switch" type="checkbox" className="is-switch" />
            <i></i>
          </label>
          <h3 className="address-title">Shipping Address</h3>
          {props.user.addresses[1].disabled ? (
            <p className="address">
              <var>{props.user.addresses[0].address1}</var>,{' '}
              <var>{props.user.addresses[0].address2}</var>
              <br />
              <var>{props.user.addresses[0].city}</var>,{' '}
              <var>{props.user.addresses[0].state}</var>{' '}
              <var>{props.user.addresses[0].postalCode}</var>
              <br />
              <var>{props.user.addresses[0].country}</var>
            </p>
          ) : (
            <p className="address">
              <var>{props.user.addresses[1].address1}</var>,{' '}
              <var>{props.user.addresses[1].address2}</var>
              <br />
              <var>{props.user.addresses[1].city}</var>,{' '}
              <var>{props.user.addresses[1].state}</var>{' '}
              <var>{props.user.addresses[1].postalCode}</var>
              <br />
              <var>{props.user.addresses[1].country}</var>
            </p>
          )}
        </div>

        <div className="side-card is-totals">
          <h3 className="info-title">Payment Information</h3>
          <div className="payment-block">
            <span>Order subtotal</span>
            <span id="checkout-subtotal-value" className="has-price">
              {props.total}
            </span>
          </div>
          <div className="payment-block">
            <span>Order shipping</span>
            <span id="checkout-shipping-value" className="has-price">
              {props.shipping ? props.shipping.price : '0.00'}
            </span>
          </div>
          <div className="payment-block">
            <span>Order tax</span>
            <span id="checkout-tax-value" className="has-price">
              {props.taxes}
            </span>
          </div>
          <div className="payment-block">
            <span className="is-bold">Order total</span>
            <span id="checkout-grandtotal-value" className="has-price is-bold">
              {props.totalAmount}
            </span>
          </div>
        </div>

        <div className="side-action">
          {props.step == 'step1' && (
            <Link
              to="/checkout/step2"
              className="button primary-button raised is-fullwidth is-rounded"
            >
              Next Step
            </Link>
          )}
          {props.step == 'step2' && (
            <button
              disabled={!props.shipping}
              onClick={() => props.history.push('/checkout/step3')}
              className="button primary-button raised is-fullwidth is-rounded"
            >
              Next Step
            </button>
          )}
          {/* <button className="button primary-button raised is-fullwidth is-rounded">
            Next Step
          </button> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  totalAmount: selectTotalAmount,
  taxes: selectTaxes,
  total: selectTotal,
  shipping: selectShippingMethod,
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(withRouter(CheckoutSide));
