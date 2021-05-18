import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
  return (
    <article
      className={`tile is-child has-background-image ${props.class}`}
      style={{
        backgroundImage: `url("${props.background}")`,
      }}
    >
      <div className={`tile-content ${props.sizeContent}`}>
        <h2 className={`shop-category ${props.sizeContent}`}>{props.name}</h2>
        <div className="divider"></div>
        <p>{props.title}</p>
        <p className="is-italic">{props.description}</p>
        <div className={`products ${props.positionProduct}`}>
          {props.countProducts} <span>Products</span>
        </div>
        <Link to={`${props.url}`} className="action">
          <span>Discover</span>
          <span className="icon">
            <i className="fas fa-chevron-right"></i>
          </span>
        </Link>
      </div>
      <div className="tile-overlay"></div>
    </article>
  );
};
export default CategoryItem;
