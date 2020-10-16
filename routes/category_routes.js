const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require("../controllers/category_controllers");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth_controllers");
const { userById } = require("../controllers/user_controllers");

router.get('/categories', list);
router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;