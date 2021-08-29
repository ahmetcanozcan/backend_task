const express = require('express');

const orderService = require('../services/order.service');
const expressUtil = require('../utils/express.util');


const router = express.Router();


router.get('/getSubscriptionOrders', async (req, res) => {
  try {
    const { subscriptionId } = req.query;
    const result = await orderService.getSubscriptionOrders(subscriptionId);
    expressUtil.sendJson(res, result);
  } catch (error) {
    expressUtil.sendError(res, error);
  }
});

module.exports = router;