import React from 'react';

const PopUpOrder = (props) => {
  return (
    <div className="webui-popover pop top">
      <div className="webui-popover-inner">
        <div className="webui-popover-content">
          <div className="">
            <div className="popover-flex-block">
              <img
                className="staff-avatar"
                src={`https://nephos.cssninja.io/${props.contact.photoUrl}`}
                data-demo-src="assets/img/avatars/janet.jpg"
                alt=""
              />
              <div className="content-block">
                <label>Order handled by</label>
                <span>{props.contact.name}</span>
              </div>
            </div>
            <div className="popover-flex-block">
              <div className="icon-block">
                <span className="icon">
                  <i className="fas fa-clock" />
                </span>
              </div>
              <div className="content-block">
                <label>Ordered on</label>
                <span>{props.date}</span>
              </div>
            </div>
            <div className="popover-flex-block">
              <div className="icon-block">
                <span className="icon">
                  <i className="fas fa-credit-card" />
                </span>
              </div>
              <div className="content-block">
                <label>Order Total</label>
                <span>{props.total}</span>
              </div>
            </div>
            <div className="popover-flex-block">
              <div className="icon-block">
                <span className="icon">
                  <i className="fas fa-truck" />
                </span>
              </div>
              <div className="content-block">
                <label>Shipping Method</label>
                <span>{props.shippingMethod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUpOrder;
