import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Loader from '../../components/loader/loader.component';
import TabAccount from '../../components/tab-account/tab-account.component';
import ModalWhishlist from '../../components/modal-add-wishlist/modal-add-whishlist.component';
import ModalRemoveWhislist from '../../components/modal-remove-wishlist/modal-remove-whislist.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWishList } from '../../redux/wish/wish.selectors';
import { fetchWishesStart } from '../../redux/wish/wish.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { successToast } from '../../hooks/toast.hook';
import ModalDeleteItemWish from '../../components/modal-delete-item-wish/modal-delete-item-wish.component';

const WishlistPage = (props) => {
  const [currentWish, setCurrentWish] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!props.wishList) {
      props.fetchWishes({
        callback: () => {
          setIsLoading(false);
        },
      });
    }
  }, []);

  useEffect(() => {
    if (props.wishList) {
      setIsLoading(false);
      if (props.wishList.length) {
        props.wishList.find((wish) => currentWish == wish.name)
          ? setCurrentWish(
              props.wishList.find((wish) => currentWish == wish.name).name
            )
          : setCurrentWish(props.wishList[0].name);
      }
    }
  }, [props.wishList]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="shop-wrapper">
      <div className="section">
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

              <div className="main-placeholder is-hidden">
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

              <div className="main-placeholder is-hidden">
                <div className="placeholder-content">
                  <img src="assets/img/illustrations/add-to-cart.svg" alt="" />
                  <h3>No Wishlists</h3>
                  <p>
                    You currently don't have any wishlist saved. Start by
                    creating one.
                  </p>
                  <div className="button-wrap">
                    <a className="button big-button primary-button rounded raised modal-trigger">
                      Add Wishlist
                    </a>
                  </div>
                </div>
              </div>

              <div className="columns is-account-grid is-multiline">
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
                      {props.wishList.map((wish, key) => (
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
                              onClick={() => setToDelete(wish)}
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

                <div className="column is-8">
                  <div className="flat-card wishlist-card is-auto">
                    <ul className="wishlist">
                      {currentWish &&
                        (props.wishList.find((wish) => currentWish == wish.name)
                          ? props.wishList.find(
                              (wish) => currentWish == wish.name
                            ).products
                          : []
                        ).map((product, key) => (
                          <li className="wishlist-item" key={`product_${key}`}>
                            <div className="item-wrapper">
                              <img src={product.pic} />

                              <span className="product-info">
                                <a>{product.name}</a>
                                <span>{product.category}</span>
                              </span>
                              <div className="action">
                                <div
                                  onClick={() => {
                                    {
                                      props.addItemToCart({
                                        ...product,
                                        quantity: 1,
                                      });
                                      successToast({
                                        meesage:
                                          'Product successfully added to cart',
                                      })();
                                    }
                                  }}
                                  className="add-button"
                                >
                                  <span className="icon add-button-inner">
                                    <i className="fas fa-shopping-cart"></i>
                                  </span>
                                </div>
                                <div
                                  onClick={() => setProductToDelete(product)}
                                  className="remove-button"
                                >
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
                      (props.wishList.find((wish) => currentWish == wish.name)
                        ? props.wishList.find(
                            (wish) => currentWish == wish.name
                          ).products
                        : []
                      ).length == 0 && (
                        <ul id="wishlist-2" className="wishlist">
                          <li className="placeholder-wrap">
                            <div className="placeholder-content">
                              <img
                                src="https://nephos.cssninja.io/assets/img/illustrations/couch.svg"
                                alt=""
                              />
                              <h3>Empty Wishlist</h3>
                              <p>
                                This wishlist is still empty. Items will be
                                shown as soon as you add some to it.
                              </p>
                            </div>
                          </li>
                        </ul>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalWhishlist
          isOpen={isOpenModal}
          close={() => setIsOpenModal((prev) => !prev)}
        />
        <ModalRemoveWhislist
          wish={toDelete}
          isOpen={toDelete ? true : false}
          close={() => setToDelete(null)}
        />
        <ModalDeleteItemWish
          isOpen={productToDelete ? true : false}
          item={productToDelete}
          wish={props.wishList.find((wish) => currentWish == wish.name)}
          close={() => setProductToDelete(null)}
        />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  wishList: selectWishList,
});
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  fetchWishes: (payload) => dispatch(fetchWishesStart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);
