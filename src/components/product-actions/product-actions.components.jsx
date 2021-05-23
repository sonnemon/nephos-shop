import { connect } from 'react-redux';
import { successToast } from '../../hooks/toast.hook';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { onToggleWishModal } from '../../redux/wish/wish.actions';

const ProductActions = (props) => {
  return (
    <span className="actions">
      <span
        onClick={() => {
          props.addItem({ ...props.product, quantity: 1 });
          successToast({
            meesage: 'Product successfully added to cart',
          })();
        }}
        className="add icon"
      >
        <i className="has-simple-popover fas fa-shopping-cart"></i>
      </span>
      <span
        onClick={() => props.onToggle({ item: props.product })}
        className="like icon"
      >
        <i className="fas fa-heart"></i>
      </span>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  onToggle: (payload) => dispatch(onToggleWishModal(payload)),
});

export default connect(null, mapDispatchToProps)(ProductActions);
