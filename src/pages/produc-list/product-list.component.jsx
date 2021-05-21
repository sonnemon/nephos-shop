import { useEffect, useState } from 'react';
import * as Icons from '../../components/category-menu/icons.component';
import CategoryIcon from '../../components/category-icon/category-icon.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import ProductItem from '../../components/product-item/product-item.component';
import Loader from '../../components/loader/loader.component';
import { connect } from 'react-redux';
import {
  selectProductList,
  selectProductError,
} from '../../redux/product/product.selectors';
import {
  selectCategoryItem,
  selectCategoryError,
} from '../../redux/categoty/category.selectors';
import { createStructuredSelector } from 'reselect';
import { fetchProductsStart } from '../../redux/product/product.actions';
import { fetchCategoryStart } from '../../redux/categoty/category.actions';

const ProductList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { category } = props.match.params;
  useEffect(() => {
    console.log('wtf ctmr');
    props.fetchCategory({
      categoryName: category,
      callback: () => {
        props.fetchProducts({
          category,
          callback: () => {
            setIsLoading(false);
          },
        });
      },
    });
  }, [category]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="shop-list" className="section">
      <div className="container">
        <div className="columns category-header">
          <div className="column main-column is-tablet-landscape-padded">
            <div className="category-title is-product-category">
              <h2>{props.category.name}</h2>
              <div className="category-icon is-hidden-mobile">
                <CategoryIcon name={props.category.name} />
              </div>
            </div>

            <div className="listing-controls">
              <div className="layout-controls">
                <a>
                  <span className="icon is-medium">
                    <i className="fas fa-x2 fa-th-large"></i>
                  </span>
                </a>
                <a>
                  <span className="icon is-medium">
                    <i className="fas fa-x2 fa-list"></i>
                  </span>
                </a>
              </div>

              <div className="sort-box">
                <div className="sort-box-select">
                  <CustomSelect
                    defaultValue={{ value: 'default', label: 'Default Sort' }}
                    options={[
                      { value: 'default', label: 'Default Sort' },
                      { value: 'sellers', label: 'Best Sellers' },
                      { value: 'rated', label: 'Highest Rated' },
                      { value: 'deals', label: 'Best Deals' },
                      { value: 'news', label: 'Newest Products' },
                    ]}
                  />
                </div>
              </div>
            </div>
            {props.error && (
              <div className="columns is-product-list is-multiline">
                <div className="column is-12">
                  <article className="message is-danger">
                    <div className="message-body">{props.error}</div>
                  </article>
                </div>
              </div>
            )}
            <div className="columns is-product-list is-multiline">
              <div className="column is-12">
                <ul>
                  {props.productList.map((product, idx) => {
                    if (category == product.category) {
                      return (
                        <ProductItem key={`product_${idx}`} {...product} />
                      );
                    }
                  })}
                </ul>
              </div>
            </div>

            {/* <div className="show-more">
              <a href="#">Show more products</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productList: selectProductList,
  error: selectProductError,
  category: selectCategoryItem,
  categoryError: selectCategoryError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (categoryName) => dispatch(fetchProductsStart(categoryName)),
  fetchCategory: (categoryName) => dispatch(fetchCategoryStart(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
