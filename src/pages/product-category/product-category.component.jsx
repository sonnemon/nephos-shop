import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../../components/product-cart/product-cart.component';
import Loader from '../../components/loader/loader.component';
import CategoryIcon from '../../components/category-icon/category-icon.component';

import { connect } from 'react-redux';
import { fetchProductsCategoryStart } from '../../redux/product/product.actions';
import { selectProductCategory } from '../../redux/product/product.selectors';
import { createStructuredSelector } from 'reselect';

const ProductCategory = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.fetchProducts({
      callback: () => {
        setIsLoading(false);
      },
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          {props.productList.map((category, idx) => (
            <div className="columns category-header" key={`category_${idx}`}>
              <div className="column main-column is-tablet-landscape-padded">
                <div className="category-title is-product-category">
                  <h2>{category.name}</h2>
                  <div className="category-icon is-hidden-mobile">
                    <CategoryIcon name={category.name} />
                  </div>
                </div>
                <div className="columns is-product-grid is-multiline">
                  {category.products.map((product, idx) => (
                    <div className="column is-4" key={`product_${idx}`}>
                      <ProductCart product={product} />
                    </div>
                  ))}
                </div>
                <div className="show-more">
                  <Link to={`/products/${category.name}`}>
                    Show more products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productList: selectProductCategory,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (payload) => dispatch(fetchProductsCategoryStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
