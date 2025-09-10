const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes working' });
});

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;
