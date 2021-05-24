import React from 'react';
import classNames from 'classnames';

const ShippingAddress = ({ address, setaddress }) => {
  return (
    <div className="flat-card profile-info-card is-auto has-overflow is-shipping">
      <div className="card-title">
        <h3>Shipping Address</h3>
        <div className="switch-wrapper has-simple-popover">
          <label className="form-switch">
            <input
              checked={!address.disabled}
              onChange={({ target }) =>
                setaddress((prev) => ({ ...prev, disabled: !target.checked }))
              }
              type="checkbox"
              className="is-switch"
            />
            <i className="fas fa-check" />
          </label>
        </div>
      </div>
      <div
        className={classNames('card-body ', {
          'is-disabled': address.disabled,
        })}
      >
        <div className="columns">
          <div className="column is-6">
            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Number</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={address.address1}
                  onChange={({ target }) =>
                    setaddress((prev) => ({ ...prev, address1: target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>City</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={address.city}
                  onChange={({ target }) =>
                    setaddress((prev) => ({ ...prev, city: target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>State</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={address.state}
                  onChange={({ target }) =>
                    setaddress((prev) => ({ ...prev, state: target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Street</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={address.address2}
                  onChange={({ target }) =>
                    setaddress((prev) => ({ ...prev, address2: target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Postal Code</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={address.postalCode}
                  onChange={({ target }) =>
                    setaddress((prev) => ({
                      ...prev,
                      postalCode: target.value,
                    }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Country</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control has-rounded-autocpl">
                <input
                  value={address.country}
                  onChange={({ target }) =>
                    setaddress((prev) => ({
                      ...prev,
                      country: target.value,
                    }))
                  }
                  type="text"
                  className="input country-autocpl is-default fake-validation"
                />
                <div className="error-icon">
                  <i data-feather="x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShippingAddress;
