import { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { selectFakeUsers } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const USERS = [
  {
    email: 'elie@mail.com',
    password: 'testpassword',
    pic: 'http://via.placeholder.com/250x250',
  },
  {
    email: 'john@mail.com',
    password: 'testpassword',
    pic: 'http://via.placeholder.com/250x250',
  },
  {
    email: 'luis@mail.com',
    password: 'testpassword',
    pic: 'http://via.placeholder.com/250x250',
  },
  {
    email: 'karla@mail.com',
    password: 'testpassword',
    pic: 'http://via.placeholder.com/250x250',
  },
];

const PanelUsers = (props) => {
  const [isOpenPanelUsers, setIsOpenPanelUsers] = useState(true);
  return (
    <>
      <div
        className={classNames('login-accounts-panel', {
          'is-active': isOpenPanelUsers,
        })}
      >
        <div className="panel-inner ">
          <div
            onClick={() => setIsOpenPanelUsers((prev) => !prev)}
            className="close-button"
          >
            <i className="fas fa-times" />
          </div>
          <div className="header">
            <h3>Demo Accounts</h3>
            <p>
              Use one of the following credentials to login to a demo Nephos
              account.
            </p>
          </div>

          {props.fakeUsers.map((user, idx) => (
            <div
              onClick={() =>
                props.setFakeUser({
                  email: user.email,
                  password: user.password,
                })
              }
              key={`user_${idx}`}
              className="login-block"
            >
              <img src={`https://nephos.cssninja.io/${user.photoUrl}`} />
              <div className="meta">
                <span>
                  <label>Email: </label>
                  <span className="fake-email">{user.email}</span>
                </span>
                <span>
                  <label>Password: </label>
                  <span className="fake-password">{user.password}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setIsOpenPanelUsers((prev) => !prev)}
        className={classNames('login-accounts-trigger', {
          'is-active': !isOpenPanelUsers,
        })}
      >
        <i className="fas fa-ellipsis-h" />
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  fakeUsers: selectFakeUsers,
});
export default connect(mapStateToProps)(PanelUsers);
