import { useState } from 'react';
import classNames from 'classnames';
import { successToast, failureToast } from '../../hooks/toast.hook';
import { connect } from 'react-redux';
import { createWishStart } from '../../redux/wish/wish.actions';

const ModalWhishlist = ({ isOpen, close, createWish }) => {
  const [name, setName] = useState('');
  const onSubmitModal = () => {
    if (!name) {
      failureToast({ message: 'Invalid name from wishlist' })();
      return;
    }
    createWish({
      name,
      callback: () => {
        successToast({ meesage: 'New wishlist successfully added' })();
        close();
      },
    });
  };
  return (
    <div
      className={classNames('modal wishlist-modal', {
        'is-active': isOpen,
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
            <div onClick={() => close()} className="modal-delete">
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
                Add a new sub list to classify your wishlist items. You can then
                manage them and find them more easily.
              </p>
              <div className="control">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input is-minimal"
                  placeholder="Wishlist name"
                />
              </div>
              <div className="button-wrap">
                <button
                  onClick={() => onSubmitModal()}
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
  );
};

const mapDispatchToProps = (dispatch) => ({
  createWish: (payload) => dispatch(createWishStart(payload)),
});

export default connect(null, mapDispatchToProps)(ModalWhishlist);
