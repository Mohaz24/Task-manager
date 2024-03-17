const express = require('express')
// Set up the express routes
const router = express.Router()
// Tasks controllers
const { 
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require('../controllers/tasks')


router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


// export the routes
module.exports = router