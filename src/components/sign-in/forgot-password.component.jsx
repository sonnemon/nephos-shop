import React from 'react';

const ForgotPassword = (props) => {
  return (
    <div className={`reset-form ${props.isHiddenForgot ? 'is-hidden' : ''}`}>
      <form>
        <p className="form-description">
          Enter your email to be able to reset your password. We'll send you an
          email with the instructions to follow.
        </p>

        <div className="field">
          <label>Email</label>
          <div className="control is-bigger has-icon">
            <input type="text" className="input" />
            <div className="form-icon">
              <i data-feather="mail"></i>
            </div>
          </div>
        </div>

        <div className="button-wrap">
          <button
            type="button"
            className="button primary-button upper-button raised is-fullwidth is-rounded"
          >
            Reset Password
          </button>
        </div>

        <div className="back-link has-text-centered">
          <a onClick={() => props.setIsHiddenForgot((prev) => !prev)}>
            Back To Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
