import { useEffect, useState } from 'react';
import CategoryItem from '../../components/category-item/category-item.component';
import Loader from '../../components/loader/loader.component';
import backtitle from '../../images/logo/nephos-greyscale.svg';
import { connect } from 'react-redux';
import { fetchCategoriesStart } from '../../redux/categoty/category.actions';
import { selectCategoryList } from '../../redux/categoty/category.selectors';
import { createStructuredSelector } from 'reselect';

const CategoryPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.fetchCategories({
      callback: () => {
        setIsLoading(false);
      },
    });
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="shop-wrapper">
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
                        <CategoryItem {...props.categoryList[2]} />
                        <CategoryItem {...props.categoryList[3]} />
                      </div>
                      <div className="tile is-parent">
                        <CategoryItem {...props.categoryList[4]} />
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <CategoryItem {...props.categoryList[1]} />
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <CategoryItem {...props.categoryList[0]} />
                  </div>
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

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: (payload) => dispatch(fetchCategoriesStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
