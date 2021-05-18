import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsOpenCategoryMenu } from '../../redux/app/app.selector';

import * as Icon from './icons.component';

const CategoryMenu = (props) => {
  return (
    <div className={`category-quickview ${props.isOpen ? 'is-active' : ''}`}>
      <div className="inner">
        <ul className="category-menu">
          <li>
            <a href="products.html">
              <span>House</span>
              <Icon.Home />
            </a>
          </li>
          <li>
            <a href="products.html">
              <span>Office</span>
              <Icon.Office />
            </a>
          </li>
          <li>
            <a href="products.html">
              <span>For kids</span>
              <Icon.ForKids />
            </a>
          </li>
          <li>
            <a href="products.html">
              <span>Kitchen</span>
              <Icon.Kitchen />
            </a>
          </li>
          <li>
            <a href="products.html">
              <span>Accessories</span>
              <Icon.Accesories />
            </a>
          </li>
          <li>
            <a href="products.html">
              <span>View All</span>
              <Icon.All />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenCategoryMenu,
});

export default connect(mapStateToProps)(CategoryMenu);
