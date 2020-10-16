const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth_controllers");
const { userById, addOrderToUserHistory } = require('../controllers/user_controllers');
const { create, listOrders, getStatusValues, updateOrderStatus, orderById } = require('../controllers/order_controllers');
const { decreaseQuantity } = require('../controllers/product_controllers');

router.post('/order/create/:userId',
    requireSignin,
    isAuth,
    addOrderToUserHistory,
    decreaseQuantity,
    create);

router.get('/order/list/:userId', requireSignin, isAuth, isAdmin, listOrders)

router.get('/order/status-values/:userId', requireSignin, isAuth, isAdmin, getStatusValues)

router.put('/order/:orderId/status/:userId', requireSignin, isAuth, isAdmin, updateOrderStatus)

router.param('userId', userById)
router.param('orderId', orderById)

module.exports = router