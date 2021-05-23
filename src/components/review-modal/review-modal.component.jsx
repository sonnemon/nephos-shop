import React from 'react';
import classNames from 'classnames';

const ReviewModal = ({ close, isOpen }) => {
  return (
    <div
      className={classNames('modal review-modal', {
        'is-active': isOpen,
      })}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <div className="box-header">
            <img src="http://via.placeholder.com/250x250" alt="" />
            <span>Rate this product</span>
            <div className="modal-delete" onClick={() => close()}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="box-body">
            <fieldset className="rating">
              <input readOnly type="radio" id="star5" name="rating" value="5" />
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
              <input readOnly type="radio" id="star4" name="rating" value="4" />
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
              <input readOnly type="radio" id="star3" name="rating" value="3" />
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
              <input readOnly type="radio" id="star2" name="rating" value="2" />
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
              <input readOnly type="radio" id="star1" name="rating" value="1" />
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
  );
};
export default ReviewModal;
