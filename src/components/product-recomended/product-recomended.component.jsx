import { Link } from 'react-router-dom';

const ProductRecomended = (props) => {
  return (
    <div className="panel-footer">
      <div className="footer-inner">
        <div className="recommended">Recommended</div>

        <div className="columns has-text-centered">
          <div className="column"></div>

          {props.products.map((product, idx) => (
            <div key={`product_related_${idx}`} className="column is-3">
              <div className="featured-product">
                <div className="image">
                  <img src={product.pic} />
                </div>
                <div className="product-info has-text-centered">
                  <Link
                    to={`/product/${product.id}`}
                    className="product-details-link"
                  >
                    <h3 className="product-name">{product.name}</h3>
                  </Link>
                  <p className="product-description">{product.tagline}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="column"></div>
        </div>
      </div>
    </div>
  );
};
export default ProductRecomended;
