const mongoose = require("mongoose");
const uniqid = require("uniqid");

const taskSchema = new mongoose.Schema({
	taskId: {
		type: String,
		default: uniqid(),
	},
	taskName: {
		type: String,
		required: [true, "Please input the task"], // required in in-build validator
		validate: {
			validator: function () {
				return this.taskName.trim().length;
			},
			message: "Task name should not be empty",
		},
	},
	status: {
		type: String,
		default: "notStarted",
		enum: ["notStarted", "inProgress", "completed"],
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	startedAt: {
		type: Date,
	},
	completedAt: {
		type: Date,
	},
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
