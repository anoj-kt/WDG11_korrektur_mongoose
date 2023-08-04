const express = require('express');
const router = express.Router();

const {
  createStudent,
  getAllStudents,
  updateStudent,
} = require('../controllers/studentController');

router.post('/create', createStudent);

router.get('/all', getAllStudents);

router.put('/update', updateStudent);

module.exports = router;
