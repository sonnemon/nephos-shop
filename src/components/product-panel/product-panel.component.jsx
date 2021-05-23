import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Galery from './galery.component';
import Meta from './meta.component';
import Rating from './rating.component';

const ProductPanel = (props) => {
  const [currentView, setCurrentView] = useState('product-view');
  useEffect(() => {
    setCurrentView('product-view');
  }, [props.product]);
  return (
    <div className="product-panel">
      <div className="panel-header">
        <div className="likes">
          <span>263</span>
          <span className="icon">
            <i className="fas fa-heart is-liked"></i>
          </span>
        </div>
      </div>

      <Galery currentView={currentView} pic={props.product.pic} />
      <Meta currentView={currentView} product={props.product} />
      <Rating currentView={currentView} />

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
  );
};
export default ProductPanel;
