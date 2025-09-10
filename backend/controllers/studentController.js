const Student = require('../models/Student');
const User = require('../models/User');

function getStudents(req, res) {
  Student.find({}).populate('user', 'name email')
    .then(students => res.json(students))
    .catch(error => res.status(500).json({ message: error.message }));
}

function getStudentProfile(req, res) {
  Student.findOne({ user: req.user._id })
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student profile not found' });
      }
      res.json(student);
    })
    .catch(error => res.status(500).json({ message: error.message }));
}

function createStudent(req, res) {
  const { name, email, course } = req.body;

  User.findOne({ email })
    .then(userExists => {
      if (userExists) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      return User.create({
        name,
        email,
        password: 'defaultPassword123',
        role: 'student'
      });
    })
    .then(user => {
      return Student.create({
        user: user._id,
        name,
        email,
        course
      });
    })
    .then(student => res.status(201).json(student))
    .catch(error => res.status(500).json({ message: error.message }));
}

function updateStudent(req, res) {
  const { name, email, course } = req.body;

  Student.findById(req.params.id)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      student.name = name || student.name;
      student.email = email || student.email;
      student.course = course || student.course;

      return student.save();
    })
    .then(updatedStudent => res.json(updatedStudent))
    .catch(error => res.status(500).json({ message: error.message }));
}

function updateProfile(req, res) {
  const { name, email, course } = req.body;

  Student.findOne({ user: req.user._id })
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student profile not found' });
      }

      student.name = name || student.name;
      student.email = email || student.email;
      student.course = course || student.course;

      return student.save();
    })
    .then(updatedStudent => res.json(updatedStudent))
    .catch(error => res.status(500).json({ message: error.message }));
}

function deleteStudent(req, res) {
  Student.findById(req.params.id)
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      return Promise.all([
        User.findByIdAndDelete(student.user),
        Student.findByIdAndDelete(req.params.id)
      ]);
    })
    .then(() => res.json({ message: 'Student removed' }))
    .catch(error => res.status(500).json({ message: error.message }));
}

module.exports = {
  getStudents,
  getStudentProfile,
  createStudent,
  updateStudent,
  updateProfile,
  deleteStudent
};
