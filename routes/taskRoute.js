const router = require("express").Router();

const { getTasks, addTasks } = require("../controllers/tasksController.js");

router.route("/tasks").get(getTasks);
router.route("/tasks").post(addTasks);

module.exports = router;
