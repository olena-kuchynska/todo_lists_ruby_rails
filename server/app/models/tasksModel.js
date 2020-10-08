const mongoose = require('mongoose');

const TasksShema = new mongoose.Schema({
    nameTask: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    priority: {
        type: String,
        required: false,
    },
    projectId: {
        type: String,
        required: true,
    }
});

const Tasks = new mongoose.model('Tasks', TasksShema);