import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { successToast } from '../../hooks/toast.hook';
import { connect } from 'react-redux';
import { selectIsOpen, selectWishList } from '../../redux/wish/wish.selectors';
import {
  onToggleWishModal,
  fetchWishesStart,
  addItemToWishSuccess,
} from '../../redux/wish/wish.actions';
import { createStructuredSelector } from 'reselect';

const ModalAddToWishlist = (props) => {
  const [wishSelected, setWishSelected] = useState(null);
  useEffect(() => {
    if (!props.wishList) {
      props.fetchWishes({
        callback: () => {
          setIsLoading(false);
        },
      });
    }
  }, []);
  const onSubmitModal = () => {
    props.addItemToWish({
      wishId: wishSelected,
    });
    successToast({ meesage: 'Product successfully added' })();
  };
  return (
    <div
      className={classNames('modal add-to-wishlist-modal', {
        'is-active': props.isOpen,
      })}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box scaleIn">
          <div className="box-header">
            <img
              src="https://nephos.cssninja.io/assets/img/logo/nephos-greyscale.svg"
              alt=""
            />
            <span>ADD TO WISHLIST</span>
            <div onClick={() => props.onToggle()} className="modal-delete">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="box-body">
            <div className="inner-content">
              <div className="message is-link has-close-icon is-hidden">
                <div className="message-body">
                  <a className="close-icon"></a>
                  This product already exists in the selected wishlist. Please
                  try another one.
                </div>
              </div>
              <div
                className={classNames('modal-placeholder', {
                  'is-hidden': props.wishList ? props.wishList.length : false,
                })}
              >
                <div className="placeholder-content">
                  <img src="assets/img/illustrations/bed.svg" alt="" />
                  <h3>No Wishlists</h3>
                  <p>
                    You currently don't have any wishlist saved. Start by
                    creating one.
                  </p>
                  <div className="button-wrap">
                    <a
                      onClick={() => {
                        props.onToggle();
                        props.history.push('/wishlist');
                      }}
                      className="button big-button primary-button rounded raised modal-delete"
                    >
                      Add Wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="wishlist-modal-list">
                <p>
                  Add a new sub list to classify your wishlist items. You can
                  then manage them and find them more easily.
                </p>
                <ul>
                  {props.wishList &&
                    props.wishList.map((wish, idx) => (
                      <li
                        onClick={() => setWishSelected(wish.id)}
                        key={`wish_${idx}`}
                        className={classNames('list-item', {
                          'is-active': wishSelected == wish.id,
                        })}
                      >
                        <div className="meta">
                          <span className="name">{wish.name}</span>
                          <span className="count">
                            <var>{wish.products.length}</var> Items
                          </span>
                        </div>
                        <div className="selected-indicator">
                          <span className="icon">
                            <i className="fas fa-check" />
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
                <div className="button-wrap">
                  <button
                    onClick={() => onSubmitModal()}
                    className="button add-to-wishlist-action is-fullwidth feather-button is-bold primary-button raised"
                  >
                    Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProp = createStructuredSelector({
  isOpen: selectIsOpen,
  wishList: selectWishList,
});
const mapDispatchToProps = (dispatch) => ({
  onToggle: (payload) => dispatch(onToggleWishModal(payload)),
  fetchWishes: (payload) => dispatch(fetchWishesStart(payload)),
  addItemToWish: (payload) => dispatch(addItemToWishSuccess(payload)),
});
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ModalAddToWishlist));
