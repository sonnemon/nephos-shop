import React from 'react';
import classNames from 'classnames';
import TabAccount from '../../components/tab-account/tab-account.component';
import OrderCart from '../../components/order-cart/order-cart.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectOrderList } from '../../redux/order/order.selectors';

const OrdersPage = (props) => {
  return (
    <div className="shop-wrapper">
      <div className="section">
        <div className="container">
          <div className="columns account-header">
            <div className="column main-column is-tablet-landscape-padded">
              <div className="account-title">
                <h2>MY ORDERS</h2>
                <img
                  className="brand-filigrane"
                  src="assets/img/logo/nephos-greyscale.svg"
                  alt=""
                />
              </div>

              <TabAccount location={props.location.pathname} controls={true} />

              <div className="listing-controls">
                <div className="layout-controls">
                  <a href="products.html">
                    <span className="icon is-medium">
                      <i className="fas fa-x2 fa-th-large"></i>
                    </span>
                  </a>
                  <a href="products-list.html">
                    <span className="icon is-medium">
                      <i className="fas fa-x2 fa-list"></i>
                    </span>
                  </a>
                </div>
                <div className="sort-box">
                  <div className="sort-box-select">
                    <CustomSelect
                      defaultValue={{ value: 'default', label: 'Default Sort' }}
                      options={[
                        { value: 'all orders', label: 'All Orders' },
                        { value: 'pending', label: 'Pending' },
                        { value: 'in progress', label: 'In Progress' },
                        { value: 'complete', label: 'Complete' },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div
                className={classNames('main-placeholder', {
                  'is-hidden': props.orders.length ? true : false,
                })}
              >
                <div className="placeholder-content">
                  <img src="assets/img/illustrations/happy.svg" alt="" />
                  <h3>No Orders</h3>
                  <p>
                    You have no orders to show. Your order details will be
                    stored here, once you checkout.
                  </p>
                  <div className="button-wrap">
                    <a
                      href="/products.html"
                      className="button big-button primary-button rounded raised"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>

              <div className="columns is-account-grid is-multiline">
                {/* <div className="account-loader is-active">
                <div className="loader is-pulled is-loading"></div>
              </div> */}

                {props.orders.map((order, idx) => (
                  <OrderCart order={order} key={idx} orderKey={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrderList,
});
export default connect(mapStateToProps)(OrdersPage);
