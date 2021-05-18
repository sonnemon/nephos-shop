import React, { useState } from 'react';
import classNames from 'classnames';
import * as Icons from '../../components/category-menu/icons.component';
import CustomSelect from '../../components/custom-select/custom-select.component';

const ProductDetail = () => {
  const [currentView, setCurrentView] = useState('product-view');
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);
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
          class={classNames('product-image translateLeft', {
            'is-hidden': currentView != 'product-view',
          })}
        >
          <div className="is-carousel">
            <div>
              <img
                // src="http://via.placeholder.com/500x500/ffffff/999999"
                src="https://nephos.cssninja.io/assets/img/products/red-seat.png"
                data-demo-src="assets/img/products/red-seat.png"
                data-action="zoom"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class={classNames('translateLeft', {
            'is-hidden': currentView != 'meta-view',
          })}
        >
          <div className="detailed-description">
            <div className="meta-block">
              <h3>Product name</h3>
              <p id="panel-product-name">Red Seat</p>
            </div>
            <div className="meta-block">
              <h3>Product SKU</h3>
              <p id="panel-product-sku">W589</p>
            </div>

            <div className="meta-block">
              <h3>Vendor</h3>
              <p id="panel-product-vendor">Govo</p>
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
              <p className="spaced">
                Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat
                aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum
                voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui
                ut. Quo mazim scripta labores cu, sit no quaeque electram. Per
                at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.
              </p>
              <p className="spaced">
                Solum movet salutatus ne has, nec probo suavitate urbanitas in.
                Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad
                pri mutat paulo inermis, at usu persius copiosae. Timeam
                democritum eloquentiam vim an.
              </p>
            </div>

            <div className="meta-block">
              <h3>Availability</h3>
              <p id="panel-product-availability">Available</p>
            </div>

            <div className="meta-block">
              <h3>Dimensions</h3>
              <p id="panel-product-dimensions">4” x 4” x 8"</p>
            </div>

            <div className="meta-block">
              <h3>Weight</h3>
              <p id="panel-product-weight">6.77 Lbs</p>
            </div>

            <div className="meta-block">
              <h3>Shipping Delay</h3>
              <p id="panel-product-shipping-delay">2 weeks</p>
            </div>
          </div>
        </div>

        <div
          class={classNames('translateLeft', {
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
              class={classNames('icon product-action', {
                'is-active': 'product-view' == currentView,
              })}
            >
              <i className="fas fa-image"></i>
            </span>

            <span
              onClick={() => setCurrentView('meta-view')}
              class={classNames('icon product-action', {
                'is-active': 'meta-view' == currentView,
              })}
            >
              <i className="fas fa-bars"></i>
            </span>

            <span
              onClick={() => setCurrentView('rating-view')}
              class={classNames('icon product-action', {
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
              <div id="office-icon" className="category-icon">
                <Icons.Office />
              </div>
              <h2 id="product-category">Office</h2>
            </div>
          </div>

          <div className="panel-body">
            <h3 className="product-name">
              <var id="product-details-name">Red Seat</var>{' '}
              <span id="product-details-sku">SKU-W589</span>
            </h3>
            <p id="product-details-shortDesc" className="product-description">
              This seat is nicely and will fit perfectly in your living room.
              Lorem ipsum sit dolor amet. Consecteture adipscing elit. Ut
              fermentum interdum malesuada. Sed ornare posuere lobortis. Lasis
              Ut fermentum interdum malesuada sed ornare
            </p>

            <div className="product-controls">
              <div className="product-price">
                <div className="heading">Price</div>
                <div className="value">
                  <span id="new-price">65.00</span>
                  <span id="old-price">90.00</span>
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
                    className="hidden-spinner"
                    type="hidden"
                    value="1"
                    data-spin="spinner"
                    data-rule="quantity"
                    data-min="1"
                    data-max="99"
                  />
                  <a
                    className="spinner-button is-remove"
                    href="javascript:;"
                    data-spin="down"
                  >
                    <span className="icon">
                      <i className="fas fa-minus"></i>
                    </span>
                  </a>
                  <span className="spinner-value">1</span>
                  <a
                    className="spinner-button is-add"
                    href="javascript:;"
                    data-spin="up"
                  >
                    <span className="icon">
                      <i className="fas fa-plus"></i>
                    </span>
                  </a>
                </div>
                <div className="control is-hidden">
                  <input className="input is-rounded" type="number" value="1" />
                </div>
              </div>

              <div className="add-to-cart">
                <div className="heading is-vhidden">Add to cart</div>
                <button
                  id="details-add-to-cart"
                  className="button big-button cart-button primary-button upper-button rounded is-bold raised"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <div className="footer-inner">
              <div className="recommended">Recommended</div>

              <div id="related-products" className="columns has-text-centered">
                <div className="column"></div>

                <div className="column is-3">
                  <div id="related-product-0" className="featured-product">
                    <div className="image">
                      <img
                        src="http://via.placeholder.com/250x250"
                        data-demo-src="assets/img/products/dark-seat.jpg"
                        alt=""
                      />
                    </div>
                    <div className="product-info has-text-centered">
                      <a className="product-details-link" href="#">
                        <h3 className="product-name">Dark seat</h3>
                      </a>
                      <p className="product-description">
                        Lorem ipsum sit dolor amet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div id="related-product-1" className="featured-product">
                    <div className="image">
                      <img
                        src="http://via.placeholder.com/250x250"
                        data-demo-src="assets/img/products/blue-seat.png"
                        alt=""
                      />
                    </div>
                    <div className="product-info has-text-centered">
                      <a className="product-details-link" href="#">
                        <h3 className="product-name">Blue seat</h3>
                      </a>
                      <p className="product-description">
                        Lorem ipsum sit dolor amet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div id="related-product-2" className="featured-product">
                    <div className="image">
                      <img
                        src="http://via.placeholder.com/250x250"
                        data-demo-src="assets/img/products/red-seat.png"
                        alt=""
                      />
                    </div>
                    <div className="product-info has-text-centered">
                      <a className="product-details-link" href="#">
                        <h3 className="product-name">Red seat</h3>
                      </a>
                      <p className="product-description">
                        Lorem ipsum sit dolor amet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="review-modal"
        class={classNames('modal review-modal', {
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
                <input type="radio" id="star5" name="rating" value="5" />
                <label
                  className="full"
                  for="star5"
                  title="Awesome - 5 stars"
                ></label>
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  value="4 and a half"
                />
                <label
                  className="half"
                  for="star4half"
                  title="Great - 4.5 stars"
                ></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label
                  className="full"
                  for="star4"
                  title="Very good - 4 stars"
                ></label>
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  value="3 and a half"
                />
                <label
                  className="half"
                  for="star3half"
                  title="Pretty good - 3.5 stars"
                ></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label
                  className="full"
                  for="star3"
                  title="Good - 3 stars"
                ></label>
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  value="2 and a half"
                />
                <label
                  className="half"
                  for="star2half"
                  title="Average - 2.5 stars"
                ></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label
                  className="full"
                  for="star2"
                  title="Mediocre - 2 stars"
                ></label>
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  value="1 and a half"
                />
                <label
                  className="half"
                  for="star1half"
                  title="Weak - 1.5 stars"
                ></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label
                  className="full"
                  for="star1"
                  title="Bad - 1 star"
                ></label>
                <input type="radio" id="starhalf" name="rating" value="half" />
                <label
                  className="half"
                  for="starhalf"
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
export default ProductDetail;
