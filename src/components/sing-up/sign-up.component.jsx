import React from 'react';

const SignUp = ({ isActive }) => {
  return (
    <div className={`registration-form-wrapper ${isActive ? 'is-hidden' : ''}`}>
      <div className="registration-form">
        <form>
          <div className="field has-flex-label has-validation">
            <label>
              <span>Email</span>
              <span className="error">Please enter a valid email</span>
            </label>
            <div className="control is-bigger has-icon">
              <input type="text" className="input" />
              <div className="form-icon">
                <i data-feather="mail"></i>
              </div>
              <div className="error-icon">
                <i data-feather="x"></i>
              </div>
            </div>
          </div>

          <div className="field">
            <label>First Name</label>
            <div className="control is-bigger has-icon">
              <input type="text" className="input" />
              <div className="form-icon">
                <i data-feather="user"></i>
              </div>
            </div>
          </div>

          <div className="field">
            <label>Last Name</label>
            <div className="control is-bigger has-icon">
              <input type="text" className="input" />
              <div className="form-icon">
                <i data-feather="user"></i>
              </div>
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="control is-bigger has-icon">
              <input type="password" className="input" />
              <div className="form-icon">
                <i data-feather="lock"></i>
              </div>
            </div>
          </div>

          <div className="flex-field">
            <label className="special-toggle">
              <input type="checkbox" />
              <span className="toggler">
                <span className="active">
                  <i className="fas fa-check" />
                </span>
                <span className="inactive">
                  <span className="icon">
                    <i className="far fa-circle" />
                  </span>
                </span>
              </span>
            </label>
            <div className="muted-text">Subscribe to Newsletter?</div>
          </div>

          <div className="button-wrap">
            <button
              type="button"
              className="button primary-button upper-button raised is-fullwidth is-rounded"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
