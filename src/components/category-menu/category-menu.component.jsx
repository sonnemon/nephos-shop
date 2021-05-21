import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCategoriesStart } from '../../redux/categoty/category.actions';
import { selectCategoryList } from '../../redux/categoty/category.selectors';
import { selectIsOpenCategoryMenu } from '../../redux/app/app.selector';
import { Link } from 'react-router-dom';
import CategoryIcon from '../category-icon/category-icon.component';

const CategoryMenu = (props) => {
  useEffect(() => {
    if (!props.categoryList) {
      props.fetchCategories({ callback: () => {} });
    }
  }, []);
  return (
    <div className={`category-quickview ${props.isOpen ? 'is-active' : ''}`}>
      <div className="inner">
        <ul className="category-menu">
          {props.categoryList &&
            props.categoryList.map((category, idx) => (
              <li key={`cateogry_${idx}`}>
                <Link to={`/products/${category.name}`}>
                  <span>{category.name}</span>
                  <CategoryIcon name={category.name} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenCategoryMenu,
  categoryList: selectCategoryList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: (payload) => dispatch(fetchCategoriesStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
