const Order = require('../models/order.model');

const { notFoundBySubscriptionError } = require('../utils/error.util');


const getSubscriptionOrders = async (subscriptionId) => {
  const orders = await Order.find({ subscriptionId });
  if(orders.length  === 0) {
    throw notFoundBySubscriptionError;
  }
  return orders;
}


module.exports = {
  getSubscriptionOrders,
}