import React from 'react';
import classNames from 'classnames';
import { successToast } from '../../hooks/toast.hook';
import { connect } from 'react-redux';
import { deleteItemToWishSuccess } from '../../redux/wish/wish.actions';

const ModalDeleteItemWish = (props) => {
  const onSubmitModal = () => {
    props.deleteItem({ wish: props.wish, product: props.item });
    successToast({ meesage: 'Product successfully deleted' })();
    props.close();
  };
  return (
    <div
      className={classNames('modal wishlist-modal', {
        'is-active': props.isOpen,
      })}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <div className="box-body">
            <p className="title is-2">
              <b>Delete From Wishlist?</b>
            </p>
            <p>
              Are you sure you want to remove this product from the current
              wishlist?. This cannot be undone.
            </p>
            <div className="buttons">
              <button
                onClick={() => props.close()}
                className="button feather-button is-rounded raised opaque"
              >
                CANCEL
              </button>
              <button
                onClick={() => onSubmitModal()}
                className="button feather-button primary-button is-rounded raised opaque"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (payload) => dispatch(deleteItemToWishSuccess(payload)),
});

export default connect(null, mapDispatchToProps)(ModalDeleteItemWish);
