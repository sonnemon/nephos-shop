import { Link } from 'react-router-dom';
import ProductActions from '../product-actions/product-actions.components';

const ProductCart = (props) => {
  return (
    <div className="flat-card product-container">
      <div className="image">
        <img src={props.product.pic} />
      </div>
      <div className="product-info has-text-centered">
        <Link
          to={`/product/${props.product.id}`}
          className="product-details-link"
        >
          <h3 className="product-name">{props.product.name}</h3>
        </Link>
        <p className="product-description">{props.product.tagline}</p>
        <p className="product-price">
          <span>{props.product.price}</span>
          {props.product.discounted && (
            <span className="sale-price">{props.product.oldPrice}</span>
          )}
        </p>
      </div>

      <ProductActions product={props.product} />
    </div>
  );
};

export default ProductCart;
