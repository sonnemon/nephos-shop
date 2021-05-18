import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import TabAccount from '../../components/tab-account/tab-account.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
const WishlistPage = (props) => {
  const { wishlists } = props.user;
  const [currentWish, setCurrentWish] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  useEffect(() => {
    if (wishlists.length) {
      setCurrentWish(wishlists[0].name);
    }
  }, []);
  return (
    <div id="shop-wishlist" className="section">
      <div className="container">
        <div className="columns account-header">
          <div className="column main-column is-tablet-landscape-padded">
            <div className="account-title">
              <h2>WISHLIST</h2>

              <img
                className="brand-filigrane"
                src="assets/img/logo/nephos-greyscale.svg"
                alt=""
              />
            </div>

            <TabAccount location={props.location.pathname} />

            <div
              id="wishlist-main-placeholder"
              className="main-placeholder is-hidden"
            >
              <div className="placeholder-content">
                <img src="assets/img/illustrations/add-to-cart.svg" alt="" />
                <h3>Welcome, Guest</h3>
                <p>
                  Please login to your account, or create a new one to be able
                  to use wishlists.
                </p>
                <div className="button-wrap">
                  <a className="button big-button primary-button rounded raised">
                    Log In
                  </a>
                </div>
                <a>Don't have an account?</a>
              </div>
            </div>

            <div
              id="wishlist-empty-placeholder"
              className="main-placeholder is-hidden"
            >
              <div className="placeholder-content">
                <img src="assets/img/illustrations/add-to-cart.svg" alt="" />
                <h3>No Wishlists</h3>
                <p>
                  You currently don't have any wishlist saved. Start by creating
                  one.
                </p>
                <div className="button-wrap">
                  <a className="button big-button primary-button rounded raised modal-trigger">
                    Add Wishlist
                  </a>
                </div>
              </div>
            </div>

            <div
              id="wishlist-main"
              className="columns is-account-grid is-multiline"
            >
              {/* <div className="account-loader is-active">
                <div className="loader is-loading"></div>
              </div> */}

              <div className="column is-4">
                <div className="flat-card is-auto menu-card">
                  <div className="card-title">
                    <h3>Add Wishlist</h3>

                    <div className="edit-account">
                      <a
                        onClick={() => setIsOpenModal((prev) => !prev)}
                        className="modal-trigger has-simple-popover"
                      >
                        <i className="feather-icons fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <ul className="wishlists">
                    {wishlists.map((wish, key) => (
                      <li
                        onClick={() => setCurrentWish(wish.name)}
                        key={`wishitem_${key}`}
                        className={classNames({
                          'is-active': wish.name == currentWish,
                        })}
                      >
                        <a>{wish.name}</a>
                        <div className="action-block">
                          <span>{wish.products.length} items</span>
                          <button
                            onClick={() =>
                              setIsOpenDeleteModal((prev) => !prev)
                            }
                            className="remove-button"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="wishlists-container" className="column is-8">
                <div className="flat-card wishlist-card is-auto">
                  <ul className="wishlist">
                    {currentWish &&
                      wishlists
                        .find((wish) => currentWish == wish.name)
                        .products.map((product, key) => (
                          <li className="wishlist-item" key={`product_${key}`}>
                            <div className="item-wrapper">
                              <img
                                src={`https://nephos.cssninja.io/${product.images[0].url}`}
                                data-demo-src="assets/img/products/office6.png"
                                alt=""
                              />

                              <span className="product-info">
                                <a>{product.name}</a>
                                <span>{product.category}</span>
                              </span>
                              <div className="action">
                                <div className="add-button">
                                  <span className="icon add-button-inner">
                                    <i className="fas fa-shopping-cart"></i>
                                  </span>
                                </div>
                                <div className="remove-button">
                                  <span className="icon remove-button-inner">
                                    <i className="fas fa-trash"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                  </ul>
                  {currentWish &&
                    wishlists.find((wish) => currentWish == wish.name).products
                      .length == 0 && (
                      <ul id="wishlist-2" className="wishlist">
                        <li className="placeholder-wrap">
                          <div className="placeholder-content">
                            <img
                              src="https://nephos.cssninja.io/assets/img/illustrations/couch.svg"
                              alt=""
                            />
                            <h3>Empty Wishlist</h3>
                            <p>
                              This wishlist is still empty. Items will be shown
                              as soon as you add some to it.
                            </p>
                          </div>
                        </li>
                      </ul>
                    )}
                </div>

                {/* <div className="wishlist-pagination">
                  <ul>
                    <li className="is-active">
                      <span>1</span>
                    </li>
                    <li>
                      <span>2</span>
                    </li>
                    <li>
                      <span>3</span>
                    </li>
                    <li>
                      <span>4</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="new-wishlist"
        className={classNames('modal wishlist-modal', {
          'is-active': isOpenModal,
        })}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="box-header">
              <img
                src="https://nephos.cssninja.io/assets/img/logo/nephos-greyscale.svg"
                alt=""
              />
              <span>NEW LIST</span>
              <div
                onClick={() => setIsOpenModal((prev) => !prev)}
                className="modal-delete"
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="box-body">
              <img
                src="https://nephos.cssninja.io/assets/img/illustrations/wishlist.svg"
                alt=""
              />
              <div className="inner-content">
                <p>
                  Add a new sub list to classify your wishlist items. You can
                  then manage them and find them more easily.
                </p>
                <div className="control">
                  <input
                    id="new-wishlist-input"
                    type="text"
                    className="input is-minimal"
                    placeholder="Wishlist name"
                  />
                </div>
                <div className="button-wrap">
                  <button
                    type="submit"
                    className="button add-wishlist-action is-fullwidth feather-button is-bold primary-button raised"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames('modal wishlist-modal', {
          'is-active': isOpenDeleteModal,
        })}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="box-body">
              <p className="title is-2">
                <b>Delete Wishlist?</b>
              </p>
              <p>
                Are you sure you want to delete this wishlist? All items will be
                removed and this cannot be undone.
              </p>
              <div className="buttons">
                <button
                  onClick={() => setIsOpenDeleteModal((prev) => !prev)}
                  className="button feather-button is-rounded raised opaque"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => setIsOpenDeleteModal((prev) => !prev)}
                  className="button feather-button primary-button is-rounded raised opaque"
                >
                  DELETE
                </button>
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
export default connect(mapStateToProps)(WishlistPage);
