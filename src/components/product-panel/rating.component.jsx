import { useState } from 'react';
import classNames from 'classnames';
import ReviewModal from '../review-modal/review-modal.component';

const Rating = ({ currentView }) => {
  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);
  return (
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
        </div>
      </div>
      <ReviewModal
        isOpen={isOpenReviewModal}
        close={() => setIsOpenReviewModal((prev) => !prev)}
      />
    </div>
  );
};
export default Rating;
