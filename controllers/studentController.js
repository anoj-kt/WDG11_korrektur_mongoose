const Student = require('../models/Student');

const createStudent = (req, res) => {
  const { name, first_name, email } = req.body;

  Student.create({
    name: name,
    first_name: first_name,
    email: email,
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

const getAllStudents = (req, res) => {
  Student.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

const updateStudent = (req, res) => {
  Student.updateMany({ name: 'Bob' }, { name: 'John' })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudent,
};
