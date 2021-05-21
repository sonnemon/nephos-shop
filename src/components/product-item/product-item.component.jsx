import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  return (
    <li
      className="flat-card product-container is-auto is-list-item"
      data-product-id="1"
      data-product-category="House"
    >
      <span className="image">
        <img src={`https://nephos.cssninja.io/${props.pic}`} alt="" />
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

        <Link to={`/product/${props.id}`} className="product-details-link">
          <span className="product-name">{props.name}</span>
        </Link>
        <span className="product-description">Lorem ipsum sit dolor amet</span>
        <span className="product-price">
          <span>{props.price}</span>
          {props.discounted && (
            <span className="sale-price">{props.oldPrice}</span>
          )}
        </span>
      </span>

      <span className="product-abstract is-hidden-mobile">
        This is a well designed and crafted product that will suit many needs,
        in terms of quality, craftmanship and aesthetics.
        <span className="view-more">
          <Link to={`/product/${props.id}`} className="product-details-link">
            View more
            <i className="fas view-more fa-chevron-right"></i>
          </Link>
        </span>
      </span>

      <span className="actions">
        <span className="add icon">
          <i className="has-simple-popover fas fa-shopping-cart"></i>
        </span>
        <span className="like icon">
          <i className="fas fa-heart"></i>
        </span>
      </span>

      {props.discounted && (
        <div className="on-sale">
          <i className="has-simple-popover fas fa-dollar-sign"></i>
        </div>
      )}
    </li>
  );
};
export default ProductItem;
