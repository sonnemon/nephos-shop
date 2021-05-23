import { useState } from 'react';
import SignUp from '../../components/sing-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';
import backtitle from '../../images/logo/nephos-greyscale.svg';

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          <div className="columns account-header is-auth">
            <div className="column main-column is-tablet-landscape-padded">
              <div className="auth-title">
                <h2>LOGIN</h2>
                <img className="brand-filigrane" src={backtitle} alt="" />
              </div>
              <div className="auth-toggler">
                <input
                  type="checkbox"
                  checked={isSignUp}
                  onChange={(e) => setIsSignUp(e.target.checked)}
                />
                <div className="toggler-track">
                  <div className="hexagon-wrap">
                    <div className="hexagon">
                      {isSignUp ? (
                        <span className="icon has-text-white">
                          <i className="fas fa-layer-group"></i>
                        </span>
                      ) : (
                        <span className="icon">
                          <i className="fas fa-user"></i>
                        </span>
                      )}

                      {/* <i className="login-icon" data-feather="user"></i>
                    <i className="register-icon" data-feather="layers"></i> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-auth-wrapper">
                <SignIn isActive={isSignUp} />
                <SignUp isActive={!isSignUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authentication;
