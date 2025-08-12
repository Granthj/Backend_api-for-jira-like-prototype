const express = require('express')
const router = express.Router();
const {signup} = require('../controller/signupController');
const {login} = require('../controller/loginController');
const {logout} = require('../controller/logoutController');
const {admin}  = require('../controller/adminController');
const {adminCreateEmployee} = require('../controller/adminCreateEmployee');
const {userEmailReturn} = require('../controller/userEmailReturnController');
const { employeeTask } = require('../controller/employeeTaskController');
const {EditTask} = require('../controller/employeeEditTaskController');
const {adminLogin} = require('../controller/adminLoginController');
const {existingEmployeeEmails} = require('../controller/existingEmployeeEmailsController');
const {checkLoginStatus} = require('../controller/checkImLoginController');

router.get('/hello', (req, res) => {
  res.send("Hello from Swagger!");
});

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout', logout);
router.post('/admin/login', adminLogin);
router.get('/tasks/:employeeEmail', employeeTask);
router.put('/edit/:taskId', EditTask);
router.post('/admin-giveTask', admin);
router.post('/admin/create-employee', adminCreateEmployee);
router.get('/available-user', userEmailReturn);
router.get('/existing-emails', existingEmployeeEmails);
router.get('/check-login', checkLoginStatus);

module.exports = router;