import { Link } from 'react-router-dom';
import ProductActions from '../product-actions/product-actions.components';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const ProductItem = (props) => {
  return (
    <li
      className="flat-card product-container is-auto is-list-item"
      data-product-id="1"
      data-product-category="House"
    >
      <span className="image">
        <img src={props.product.pic} />
      </span>

      <span className="product-info">
        <span className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <small className="is-hidden-mobile">47 Ratings</small>
        </span>

        <Link
          to={`/product/${props.product.id}`}
          className="product-details-link"
        >
          <span className="product-name">{props.product.name}</span>
        </Link>
        <span className="product-description">Lorem ipsum sit dolor amet</span>
        <span className="product-price">
          <span>{props.product.price}</span>
          {props.product.discounted && (
            <span className="sale-price">{props.product.oldPrice}</span>
          )}
        </span>
      </span>

      <span className="product-abstract is-hidden-mobile">
        This is a well designed and crafted product that will suit many needs,
        in terms of quality, craftmanship and aesthetics.
        <span className="view-more">
          <Link
            to={`/product/${props.product.id}`}
            className="product-details-link"
          >
            View more
            <i className="fas view-more fa-chevron-right"></i>
          </Link>
        </span>
      </span>

      <ProductActions product={props.product} />

      {props.product.discounted && (
        <div className="on-sale">
          <i className="has-simple-popover fas fa-dollar-sign"></i>
        </div>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
