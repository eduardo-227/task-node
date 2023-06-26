const TaskModel = require('../model/TaskModel');

const TaskValidation = async(req, res, next) => {

  const { macaddress, type, title, description, when } = req.body;
  if(!macaddress)
    return res.status(400).json({
      error: "macaddress is required!"
    });
  else
    next();

};

module.export = TaskValidation;