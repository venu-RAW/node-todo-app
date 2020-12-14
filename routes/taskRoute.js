const router = require("express").Router();

const {
	getTasks,
	addTasks,
	updateTaskById,
	getTaskById,
	deleteTaskById,
} = require("../controllers/tasksController.js");

router.route("/tasks").get(getTasks).post(addTasks);

router
	.route("/tasks/:taskId")
	.get(getTaskById)
	.put(updateTaskById)
	.delete(deleteTaskById);

module.exports = router;
