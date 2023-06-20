const express = require('express');
const Router = express.Router();

const TaskController  = require('../controller/TaskController');


Router.post('/task', TaskController.create);



module.exports = Router;