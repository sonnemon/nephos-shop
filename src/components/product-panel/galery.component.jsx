import classNames from 'classnames';

const Galery = ({ currentView, pic }) => {
  return (
    <div
      className={classNames('product-image translateLeft', {
        'is-hidden': currentView != 'product-view',
      })}
    >
      <div className="is-carousel">
        <div>
          <img src={pic} />
        </div>
      </div>
    </div>
  );
};
export default Galery;
