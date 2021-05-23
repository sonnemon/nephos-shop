import classNames from 'classnames';

const Meta = ({ currentView, product }) => {
  return (
    <div
      className={classNames('translateLeft', {
        'is-hidden': currentView != 'meta-view',
      })}
    >
      <div className="detailed-description">
        <div className="meta-block">
          <h3>Product name</h3>
          <p>{product.name}</p>
        </div>
        <div className="meta-block">
          <h3>Product SKU</h3>
          <p>{product.sku}</p>
        </div>

        <div className="meta-block">
          <h3>Vendor</h3>
          <p>{product.vendor}</p>
        </div>

        <div className="meta-block is-hidden">
          <h3>Colors</h3>
          <div className="colored-dots">
            <div className="dot-wrapper">
              <div className="dot is-blue"></div>
            </div>
            <div className="dot-wrapper">
              <div className="dot is-red"></div>
            </div>
            <div className="dot-wrapper">
              <div className="dot is-dark"></div>
            </div>
            <div className="dot-wrapper">
              <div className="dot is-cream"></div>
            </div>
          </div>
        </div>

        <div className="meta-block">
          <h3 className="spaced">Description</h3>
          <p className="spaced">{product.longDesc}</p>
        </div>

        <div className="meta-block">
          <h3>Availability</h3>
          <p>Available</p>
        </div>

        <div className="meta-block">
          <h3>Dimensions</h3>
          <p>{product.dimensions}</p>
        </div>

        <div className="meta-block">
          <h3>Weight</h3>
          <p>{product.weight}</p>
        </div>

        <div className="meta-block">
          <h3>Shipping Delay</h3>
          <p>{product.shippingTime}</p>
        </div>
      </div>
    </div>
  );
};
export default Meta;
