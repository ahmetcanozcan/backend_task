const Subscription = require('../models/subscription.model');
const { notFoundByPhoneError } = require('../utils/error.util');

const getSubscriptionsByPhoneNumber = async (phoneNumber) => {
  const subscriptions = await Subscription.find({ phoneNumber });
  if (subscriptions.length === 0) {
    throw notFoundByPhoneError;
  }
  return subscriptions;
};

module.exports = {
  getSubscriptionsByPhoneNumber,
};
