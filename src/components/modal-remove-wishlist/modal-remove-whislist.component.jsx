import classNames from 'classnames';
import { successToast } from '../../hooks/toast.hook';
import { connect } from 'react-redux';
import { deleteWishSuccess } from '../../redux/wish/wish.actions';

const ModalRemoveWhislist = ({ isOpen, close, wish, deleteWish }) => {
  const onSubmitModal = () => {
    deleteWish(wish);
    successToast({ meesage: 'Wishlist successfully deleted' })();
    close();
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
                onClick={() => close()}
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
  deleteWish: (wish) => dispatch(deleteWishSuccess(wish)),
});

export default connect(null, mapDispatchToProps)(ModalRemoveWhislist);
