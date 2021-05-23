import { useState, useEffect } from 'react';
import CustomSelect from '../../components/custom-select/custom-select.component';
import Loader from '../../components/loader/loader.component';
import CategoryIcon from '../../components/category-icon/category-icon.component';
import { successToast } from '../../hooks/toast.hook';
import { connect } from 'react-redux';
import { fetchProductStart } from '../../redux/product/product.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { selectProductItem } from '../../redux/product/product.selectors';
import { createStructuredSelector } from 'reselect';
import ProductPanel from '../../components/product-panel/product-panel.component';
import ProductRecomended from '../../components/product-recomended/product-recomended.component';

const ProductDetail = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    props.fetchProduct({
      productId: props.match.params.productId,
      callback: () => {
        setIsLoading(false);
      },
    });
  }, [props.match.params.productId]);

  const addItem = () => {
    props.addItemToCart({
      ...props.product,
      quantity,
    });
    successToast({
      meesage: 'Product successfully added to cart',
    })();
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="shop-wrapper product-container">
      <ProductPanel product={props.product} />
      <div className="product-info-panel">
        <div className="inner-panel">
          <div className="panel-header">
            <div className="category-title">
              <div className="category-icon">
                <CategoryIcon name={props.product.categoryItem.name} />
              </div>
              <h2>{props.product.categoryItem.name}</h2>
            </div>
          </div>

          <div className="panel-body">
            <h3 className="product-name">
              <var>{props.product.name}</var> <span>{props.product.sku}</span>
            </h3>
            <p className="product-description">{props.product.shortDesc}</p>

            <div className="product-controls">
              <div className="product-price">
                <div className="heading">Price</div>
                <div className="value">
                  <span>{props.product.price}</span>
                  {props.product.price < props.product.oldPrice && (
                    <span>{props.product.oldPrice}</span>
                  )}
                </div>
              </div>
              <div className="size-box-wrap">
                <div className="heading">Sizes</div>
                <div className="sort-box size-box">
                  <div className="sort-box-select">
                    <CustomSelect
                      defaultValue={{ value: 'sm', label: 'SM - Small' }}
                      options={[
                        { value: 'sm', label: 'SM - Small' },
                        { value: 'md', label: 'MD - Medium' },
                        { value: 'lg', label: 'LG - Large' },
                        { value: 'xl', label: 'XL - Extra Large' },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="product-quantity">
                <div className="heading">Quantity</div>
                <div data-trigger="spinner" className="details-spinner">
                  <a
                    onClick={() => {
                      if (quantity <= 1) return;
                      setQuantity((prev) => prev - 1);
                    }}
                    className="spinner-button is-remove"
                  >
                    <span className="icon">
                      <i className="fas fa-minus"></i>
                    </span>
                  </a>
                  <span className="spinner-value">{quantity}</span>
                  <a
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="spinner-button is-add"
                  >
                    <span className="icon">
                      <i className="fas fa-plus"></i>
                    </span>
                  </a>
                </div>
                <div className="control is-hidden">
                  <input
                    readOnly
                    className="input is-rounded"
                    type="number"
                    value="1"
                  />
                </div>
              </div>

              <div className="add-to-cart">
                <div className="heading is-vhidden">Add to cart</div>
                <button
                  onClick={() => addItem()}
                  className="button big-button cart-button primary-button upper-button rounded is-bold raised"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <ProductRecomended products={props.product.relatedItems} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductItem,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (payload) => dispatch(fetchProductStart(payload)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
