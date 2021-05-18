import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenSearchMenu } from '../../redux/app/app.selector';

const SearchMenu = (props) => {
  return (
    <>
      <div className={`search-overlay ${props.isOpen ? 'is-active' : ''}`} />
      <div
        className={`search-input-wrapper is-desktop ${
          props.isOpen ? '' : 'is-hidden'
        }`}
      >
        <div className={`field ${props.isOpen ? 'is-active' : ''}`}>
          <div className="control">
            <input
              id="nephos-search"
              type="text"
              name="search"
              placeholder="Search a Product"
            />
            <span id="clear-search" role="button">
              <i data-feather="x"></i>
            </span>
            <span className="bar"></span>
          </div>
          <span className="search-help">
            Type the name of the product you are looking for
          </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenSearchMenu,
});

export default connect(mapStateToProps)(SearchMenu);
