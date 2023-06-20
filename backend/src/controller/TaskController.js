const TaskModel = require ('../model/TaskMode');

class TaskController {

    async create (req, res){
        const Task = new TaskModel(req.body);
        await Task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error =>{
            return res.status(500).json(error);
        })
    
    }
     
}

module.exports = new TaskController();