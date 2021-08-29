const express = require('express');

const subscriptionService = require('../services/subscription.service');

const expressUtil = require('../utils/express.util');

const router = express.Router();


router.get('/getCustomerInfo', async (req, res) => {
  try {
    const { phoneNumber } = req.query;
    const subs = await subscriptionService.getSubscriptionsByPhoneNumber(phoneNumber);
    expressUtil.sendJson(res, subs);
  } catch (error) {
    expressUtil.sendError(res, error);
  }
});

module.exports = router;