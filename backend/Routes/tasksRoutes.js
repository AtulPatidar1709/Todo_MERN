const { addTask , getAllTask, deleteTask, updateTask } = require('../Controllers/tasks');

const router = require('express').Router();

router.get('/', getAllTask);

router.post('/', addTask);

router.delete('/:id', deleteTask);

router.put('/:id', updateTask);

module.exports = router;