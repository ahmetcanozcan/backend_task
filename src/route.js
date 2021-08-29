const express = require('express');

const subscriptionsRoute = require('./routes/subscriptions.route');
const ordersRoute = require('./routes/orders.route');

const router = express.Router();

router.use('/api', subscriptionsRoute);
router.use('/api', ordersRoute);


module.exports = router;