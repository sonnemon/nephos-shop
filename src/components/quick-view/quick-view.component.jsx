import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import { selectIsOpenCategoryMenu } from '../../redux/app/app.selector';

import { onToggleCategoryMenu } from '../../redux/app/app.actions';
import { createStructuredSelector } from 'reselect';

const QuickView = (props) => {
  return (
    <div
      onClick={() => props.toogleCategoryMenu()}
      id="quickview-trigger"
      className="menu-fab is-hidden-mobile"
    >
      <a className="hamburger-btn">
        <span className="menu-toggle">
          <span
            className={classNames('icon-box-toggle', { active: props.isOpen })}
          >
            <span className="rotate">
              <i className="icon-line-top"></i>
              <i className="icon-line-center"></i>
              <i className="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </a>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectIsOpenCategoryMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toogleCategoryMenu: () => dispatch(onToggleCategoryMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickView);
