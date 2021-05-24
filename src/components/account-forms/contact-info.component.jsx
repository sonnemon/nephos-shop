import React from 'react';
import { connect } from 'react-redux';

const ContactInfo = ({ info, setInfo }) => {
  return (
    <div className="flat-card profile-info-card is-auto">
      <div className="card-title">
        <h3>Contact info</h3>

        <div className="confirm-button is-vhidden">
          <a className="has-simple-popover">
            <i className="fas fa-check" />
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className="columns">
          <div className="column is-6">
            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>First Name</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={info.firstName}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, firstName: e.target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Email</span>
                <span className="error">Enter a valid email</span>
              </label>
              <div className="control">
                <input
                  value={info.email}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="text"
                  className="input is-default fake-email-validation"
                />
                <div className="error-icon">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="field info-block has-flex-label has-validation">
              <label className="label-text">
                <span>Last Name</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={info.lastName}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, lastName: e.target.value }))
                  }
                  type="text"
                  className="input is-default fake-validation"
                />
                <div className="error-icon">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>

            <div className="field info-block has-flex-label">
              <label className="label-text">
                <span>Phone</span>
                <span className="error">Minimum 2 characters</span>
              </label>
              <div className="control">
                <input
                  value={info.phone}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  type="text"
                  className="input is-default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
