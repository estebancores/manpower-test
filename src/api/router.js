const express = require('express');
const router = express.Router();

const authRoutes = require('./auth/routes');
const productsRoutes = require('./products/routes');
const usersRoutes = require('./users/routes');
const categoriesRoutes = require('./categories/routes');

router.use('/auth', authRoutes);

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;
