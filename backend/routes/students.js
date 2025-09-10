const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const studentController = require('../controllers/studentController');

router.get('/', protect, admin, studentController.getStudents);
router.post('/', protect, admin, studentController.createStudent);
router.get('/profile', protect, studentController.getStudentProfile);
router.put('/profile', protect, studentController.updateProfile);
router.put('/:id', protect, admin, studentController.updateStudent);
router.delete('/:id', protect, admin, studentController.deleteStudent);

module.exports = router;
