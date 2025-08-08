const express = require('express')
const router = express.Router();
const {signup} = require('../controller/signupController');
const {login} = require('../controller/loginController');
const {admin}  = require('../controller/adminController');
const {adminCreateEmployee} = require('../controller/adminCreateEmployee');
const { employeeTask } = require('../controller/employeeTaskController');
const {EditTask} = require('../controller/employeeEditTaskController');
const {adminLogin} = require('../controller/adminLoginController');

router.post('/admin/login', adminLogin);
router.get('/tasks/:employeeEmail', employeeTask);
router.put('/edit/:taskId', EditTask);
router.post('/admin', admin);
router.post('/admin/create-employee', adminCreateEmployee);
router.post('/signup',signup);
router.post('/login',login);

module.exports = router;