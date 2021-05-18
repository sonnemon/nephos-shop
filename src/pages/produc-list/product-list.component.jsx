import React from 'react';
import * as Icons from '../../components/category-menu/icons.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import { connect } from 'react-redux';
import { selectProductList } from '../../redux/product/product.selectors';
import { createStructuredSelector } from 'reselect';

const ProductList = (props) => {
  return (
    <div id="shop-list" className="section">
      <div className="container">
        <div className="columns category-header">
          <div className="column main-column is-tablet-landscape-padded">
            <div className="category-title is-product-category">
              <h2>HOUSE</h2>
              <div className="category-icon is-hidden-mobile">
                <Icons.Home />
              </div>
            </div>

            <div className="listing-controls">
              <div className="layout-controls">
                <a href="products.html">
                  <span className="icon is-medium">
                    <i className="fas fa-x2 fa-th-large"></i>
                  </span>
                </a>
                <a href="products-list.html">
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

            <div className="columns is-product-list is-multiline">
              <div className="column is-12">
                <ul>
                  {props.productList.slice(0, 8).map((product, idx) => (
                    <Product key={`product_${idx}`} {...product} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="show-more">
              <a href="#">Show more products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = (props) => (
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

      <a className="product-details-link" href="product.html">
        <span className="product-name">{props.name}</span>
      </a>
      <span className="product-description">Lorem ipsum sit dolor amet</span>
      <span className="product-price">
        <span>{props.price}</span>
        {props.discounted && (
          <span className="sale-price">{props.oldPrice}</span>
        )}
      </span>
    </span>

    <span className="product-abstract is-hidden-mobile">
      This is a well designed and crafted product that will suit many needs, in
      terms of quality, craftmanship and aesthetics.
      <span className="view-more">
        <a className="product-details-link" href="product.html">
          View more
          <i className="fas view-more fa-chevron-right"></i>
        </a>
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

const mapStateToProps = createStructuredSelector({
  productList: selectProductList,
});

export default connect(mapStateToProps)(ProductList);
