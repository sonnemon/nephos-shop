import React from 'react';
import CategoryItem from '../../components/category-item/category-item.component';
import backtitle from '../../images/logo/nephos-greyscale.svg';
import { connect } from 'react-redux';
import { selectCategoryList } from '../../redux/categoty/category.selectos';
import { createStructuredSelector } from 'reselect';

const CategoryPage = (props) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns category-header">
          <div className="column main-column is-tablet-landscape-padded">
            <div className="category-title no-border is-padded">
              <h2>SHOP</h2>
              <img className="brand-filigrane" src={backtitle} alt="" />
            </div>
            <div className="is-categories-grid">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <CategoryItem {...props.categoryList['accesories']} />
                      <CategoryItem {...props.categoryList['kitchen']} />
                    </div>
                    <div className="tile is-parent">
                      <CategoryItem {...props.categoryList['house']} />
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <CategoryItem {...props.categoryList['for_kids']} />
                  </div>
                </div>
                <div className="tile is-parent">
                  <CategoryItem {...props.categoryList['office']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryList: selectCategoryList,
});

export default connect(mapStateToProps)(CategoryPage);
