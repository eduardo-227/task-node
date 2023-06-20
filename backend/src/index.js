const express = require('express');

const server = express();

server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/Task', TaskRoutes)

server.listen (3000, () =>{
    console.log('api online ')
});