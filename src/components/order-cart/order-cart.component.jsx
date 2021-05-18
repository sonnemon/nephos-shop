import React, { useState } from 'react';
import PopUpOrder from './pop-up-order.component';
import CircleBarChart from '../circle-bar-chart/circle-bar-chart.component';
import { Popover, ArrowContainer } from 'react-tiny-popover';

const OrderCart = ({ order, orderKey }) => {
  const [orderHover, setorderHover] = useState(null);
  return (
    <Popover
      isOpen={orderHover == `order_${orderKey}`}
      content={(props) => (
        <ArrowContainer {...props} arrowColor={'#344258'} arrowSize={10}>
          <PopUpOrder {...order} />
        </ArrowContainer>
      )}
    >
      <div
        className="column is-4"
        onMouseEnter={() => setorderHover(`order_${orderKey}`)}
        onMouseLeave={() => setorderHover(false)}
      >
        <div className="flat-card order-card has-popover-top">
          <div className="order-info">
            <span>
              <a href="invoice.html">ORDER-{order.id}</a>
            </span>
            <span className={`tag ${STATUS_ORDER[order.status].class}`}>
              {order.status}
            </span>
          </div>
          <div className="circle-chart-wrapper">
            <CircleBarChart
              percentage={order.completed}
              color={STATUS_ORDER[order.status].color}
            />
            <div className="chart-icon">
              <i className={`fas fa-${STATUS_ORDER[order.status].icon}`} />
            </div>
            <div className="ring-title has-text-centered">
              <span>{order.completed}% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};
const STATUS_ORDER = {
  Shipping: {
    icon: 'truck',
    color: '#0023ff',
    class: 'is-primary',
  },
  Preparing: {
    icon: 'box',
    color: '#00b289',
    class: 'is-success',
  },
  Processing: {
    icon: 'credit-card',
    color: '#eda514',
    class: 'is-warning',
  },
  Blocked: {
    icon: 'exclamation-triangle',
    color: '#FF7273',
    class: 'is-danger',
  },
  Complete: {
    icon: 'check',
    color: '#0023ff',
    class: 'is-primary',
  },
};
export default OrderCart;
