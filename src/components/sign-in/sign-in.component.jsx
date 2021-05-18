import { useState } from 'react';
import classNames from 'classnames';
import PanelUsers from './panel-users.component';
import ForgotPassword from './forgot-password.component';
import { successToast, warningToast } from '../../hooks/toast.hook';
import { validateSignIn } from '../../utils/sing-in';

import { connect } from 'react-redux';
import { emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ isActive, emailSignIn }) => {
  const [isHiddenForgot, setIsHiddenForgot] = useState(true);
  const [customErrors, setCustomErrors] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const setFakeUser = (user) => setUser((prev) => ({ ...prev, ...user }));

  const onSingIn = (e) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    setCustomErrors({
      email: null,
      password: null,
    });
    const hasError = validateSignIn(user);
    if (hasError) {
      setCustomErrors(hasError);
      setIsLoading((prev) => !prev);
    } else {
      emailSignIn({
        user,
        callback: (hasError) => {
          if (hasError) {
            warningToast({
              meesage: `Couldn't find an account matching those credentials`,
            })();
            setIsLoading((prev) => !prev);
          } else {
            successToast({
              meesage: `Successfully loggued in.`,
            })();
          }
        },
      });
    }
  };

  const warning = warningToast({
    meesage: `Couldn't find an account matching those credentials`,
  });
  const success = successToast({
    meesage: `Successfully loggued in.`,
  });
  return (
    <div className={`login-form-wrapper ${isActive ? 'is-hidden' : ''}  `}>
      <div className={`login-form ${!isHiddenForgot ? 'is-hidden' : ''}`}>
        <form onSubmit={(e) => onSingIn(e)}>
          <div
            className={classNames('field has-flex-label has-validation', {
              'has-error': customErrors.email,
            })}
          >
            <label>
              <span>Email</span>
              {customErrors.email && (
                <span className="error">{customErrors.email}</span>
              )}
            </label>
            <div className="control is-bigger has-icon">
              <input
                value={user.email}
                type="text"
                className="input"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <div className="form-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="error-icon">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
          <div
            className={classNames('field has-flex-label has-validation', {
              'has-error': customErrors.password,
            })}
          >
            <label>
              <span>Password</span>
              {customErrors.password && (
                <span className="error">{customErrors.password}</span>
              )}
            </label>
            <div className="control is-bigger has-icon">
              <input
                id="login-password"
                value={user.password}
                type="password"
                className="input"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <div className="form-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="error-icon">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
          <div className="flex-field">
            <label className="special-toggle">
              <input
                type="checkbox"
                checked={user.rememberMe}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, rememberMe: e.target.checked }))
                }
              />
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
            <div className="muted-text">Remember me?</div>
          </div>

          <div className="button-wrap">
            <button
              className={classNames(
                'button primary-button upper-button raised is-fullwidth is-rounded',
                { 'is-loading': isLoading }
              )}
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="forgot-link has-text-centered">
            <a onClick={() => setIsHiddenForgot((prev) => !prev)}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <ForgotPassword {...{ isHiddenForgot, setIsHiddenForgot }} />
      <PanelUsers setFakeUser={setFakeUser} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  emailSignIn: (payload) => dispatch(emailSignInStart(payload)),
});
export default connect(null, mapDispatchToProps)(SignIn);
