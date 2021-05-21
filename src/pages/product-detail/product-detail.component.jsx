import { useState, useEffect } from 'react';
import classNames from 'classnames';
import CustomSelect from '../../components/custom-select/custom-select.component';
import Loader from '../../components/loader/loader.component';
import CategoryIcon from '../../components/category-icon/category-icon.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductStart } from '../../redux/product/product.actions';
import { selectProductItem } from '../../redux/product/product.selectors';
import { createStructuredSelector } from 'reselect';

const ProductDetail = (props) => {
  const [currentView, setCurrentView] = useState('product-view');
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.fetchProduct({
      productId: props.match.params.productId,
      callback: () => {
        setIsLoading(false);
      },
    });
  }, [props.match.params.productId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="product-panel">
        <div className="panel-header">
          <div className="likes">
            <span>263</span>
            <span className="icon">
              <i className="fas fa-heart is-liked"></i>
            </span>
          </div>
        </div>

        <div
          className={classNames('product-image translateLeft', {
            'is-hidden': currentView != 'product-view',
          })}
        >
          <div className="is-carousel">
            <div>
              <img
                src={`https://nephos.cssninja.io/${props.product.pic}`}
                data-demo-src="assets/img/products/red-seat.png"
                data-action="zoom"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className={classNames('translateLeft', {
            'is-hidden': currentView != 'meta-view',
          })}
        >
          <div className="detailed-description">
            <div className="meta-block">
              <h3>Product name</h3>
              <p>{props.product.name}</p>
            </div>
            <div className="meta-block">
              <h3>Product SKU</h3>
              <p>{props.product.sku}</p>
            </div>

            <div className="meta-block">
              <h3>Vendor</h3>
              <p>{props.product.vendor}</p>
            </div>

            <div className="meta-block is-hidden">
              <h3>Colors</h3>
              <div className="colored-dots">
                <div className="dot-wrapper">
                  <div className="dot is-blue"></div>
                </div>
                <div className="dot-wrapper">
                  <div className="dot is-red"></div>
                </div>
                <div className="dot-wrapper">
                  <div className="dot is-dark"></div>
                </div>
                <div className="dot-wrapper">
                  <div className="dot is-cream"></div>
                </div>
              </div>
            </div>

            <div className="meta-block">
              <h3 className="spaced">Description</h3>
              <p className="spaced">{props.product.longDesc}</p>
            </div>

            <div className="meta-block">
              <h3>Availability</h3>
              <p>Available</p>
            </div>

            <div className="meta-block">
              <h3>Dimensions</h3>
              <p>{props.product.dimensions}</p>
            </div>

            <div className="meta-block">
              <h3>Weight</h3>
              <p>{props.product.weight}</p>
            </div>

            <div className="meta-block">
              <h3>Shipping Delay</h3>
              <p>{props.product.shippingTime}</p>
            </div>
          </div>
        </div>

        <div
          className={classNames('translateLeft', {
            'is-hidden': currentView != 'rating-view',
          })}
        >
          <div className="product-ratings">
            <div className="main-rating">
              <h3>Product Rating</h3>
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <span>
                Rated <small>4,5/5</small> out of <small>29</small> reviews
              </span>
              <span
                onClick={() => setIsOpenReviewModal((prev) => !prev)}
                className="add-review modal-trigger"
                data-modal="review-modal"
              >
                <i className="fas fa-plus"></i> Add review
              </span>
            </div>

            <div className="customer-ratings">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/elie.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Elie Daniels</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/john.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>John Smith</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas nullam.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/marjory.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Marjory Cambell</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/danny.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Danny Welsh</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas nullam.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/ron.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Ron Sutherly</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas nullam.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/samantha.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Samantha Jackson</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/eddie.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Eddy Smith</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </span>
                  </p>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      src="http://via.placeholder.com/250x250"
                      data-demo-src="assets/img/avatars/arthur.jpg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p>
                    <span>Arthur Baxter</span>
                    <small>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                    </small>
                    <br />
                    <span className="rating-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-actions">
          <div className="zoom-buttons">
            <span className="icon">
              <i className="fas fa-plus-circle"></i>
            </span>
            <span className="icon">
              <i className="fas fa-minus-circle"></i>
            </span>
          </div>

          <div className="right-actions">
            <span
              onClick={() => setCurrentView('product-view')}
              className={classNames('icon product-action', {
                'is-active': 'product-view' == currentView,
              })}
            >
              <i className="fas fa-image"></i>
            </span>

            <span
              onClick={() => setCurrentView('meta-view')}
              className={classNames('icon product-action', {
                'is-active': 'meta-view' == currentView,
              })}
            >
              <i className="fas fa-bars"></i>
            </span>

            <span
              onClick={() => setCurrentView('rating-view')}
              className={classNames('icon product-action', {
                'is-active': 'rating-view' == currentView,
              })}
            >
              <i className="fas fa-comment"></i>
            </span>
          </div>
        </div>
      </div>

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
                  <input
                    readOnly
                    className="hidden-spinner"
                    type="hidden"
                    value="1"
                    data-spin="spinner"
                    data-rule="quantity"
                    data-min="1"
                    data-max="99"
                  />
                  <a className="spinner-button is-remove" data-spin="down">
                    <span className="icon">
                      <i className="fas fa-minus"></i>
                    </span>
                  </a>
                  <span className="spinner-value">1</span>
                  <a className="spinner-button is-add" data-spin="up">
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
                <button className="button big-button cart-button primary-button upper-button rounded is-bold raised">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <div className="footer-inner">
              <div className="recommended">Recommended</div>

              <div className="columns has-text-centered">
                <div className="column"></div>

                {props.product.relatedItems.map((product, idx) => (
                  <div key={`product_related_${idx}`} className="column is-3">
                    <div className="featured-product">
                      <div className="image">
                        <img
                          src={`https://nephos.cssninja.io/${product.pic}`}
                          data-demo-src="assets/img/products/dark-seat.jpg"
                          alt=""
                        />
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
        </div>
      </div>

      <div
        id="review-modal"
        className={classNames('modal review-modal', {
          'is-active': isOpenReviewModal,
        })}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <div className="box-header">
              <img src="http://via.placeholder.com/250x250" alt="" />
              <span>Rate this product</span>
              <div
                className="modal-delete"
                onClick={() => setIsOpenReviewModal((prev) => !prev)}
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="box-body">
              <fieldset className="rating">
                <input
                  readOnly
                  type="radio"
                  id="star5"
                  name="rating"
                  value="5"
                />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star4half"
                  name="rating"
                  value="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Great - 4.5 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Very good - 4 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star3half"
                  name="rating"
                  value="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Pretty good - 3.5 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star3"
                  name="rating"
                  value="3"
                />
                <label
                  className="full"
                  htmlFor="star3"
                  title="Good - 3 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star2half"
                  name="rating"
                  value="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Average - 2.5 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star2"
                  name="rating"
                  value="2"
                />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Mediocre - 2 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star1half"
                  name="rating"
                  value="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Weak - 1.5 stars"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="star1"
                  name="rating"
                  value="1"
                />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Bad - 1 star"
                ></label>
                <input
                  readOnly
                  type="radio"
                  id="starhalf"
                  name="rating"
                  value="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Terrible - 0.5 stars"
                ></label>
              </fieldset>

              <div className="control">
                <textarea
                  className="textarea is-button"
                  placeholder="write something..."
                ></textarea>
                <div className="textarea-button">
                  <button className="button primary-button raised">
                    Post review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductItem,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (payload) => dispatch(fetchProductStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
