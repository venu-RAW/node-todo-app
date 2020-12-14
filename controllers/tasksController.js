const Task = require("../models/taskSchema.js");
const sendResponse = require("../helpers/sendResponse.js");
const sendError = require("../helpers/sendError.js");

const getTasks = async (req, res) => {
	const allTasks = await Task.find();
	sendResponse(200, "Success", allTasks, req, res);
};

const addTasks = async (req, res) => {
	const { taskName } = req.body;

	let newtask = new Task({ taskName });

	try {
		newTask = await newtask.save();
		sendResponse(200, "Task added successfully", newTask, req, res);
	} catch (err) {
		sendError(
			400,
			"Adding of task failed",
			err.errors.taskName.message,
			req,
			res
		);
	}
};

const getTaskById = async (req, res) => {
	const { taskId } = req.params;

	try {
		let task = await Task.find({ taskId });
		sendResponse(200, "Success", task, req, res);
	} catch (err) {
		sendError(
			401,
			"Cannot get task by given id",
			err.errors.taskName.message,
			req,
			res
		);
	}
};

const updateTaskById = async (req, res) => {
	const { taskId } = req.params;

	const re = /<("[^"]*?"|'[^']*?'|[^'">])*>/;

	if (re.test(req.body.taskName)) {
		sendError(400, "unsuccessful", "Taskname cannot be HTML", req, res);
	} else {
		try {
			let task = await Task.updateOne(
				{ taskId: taskId },
				{ $set: { taskName: req.body.taskName } }
			);
			sendResponse(200, "Success", task, req, res);
		} catch (err) {
			sendError(400, "Cannot update task by given id", err, req, res);
		}
	}
};

const deleteTaskById = async (req, res) => {
	const { taskId } = req.params;

	try {
		let deletedTask = await Task.deleteOne({ taskId });
		sendResponse(200, "Task deleted", deletedTask, req, res);
	} catch (err) {
		sendError(400, "Cannot delete task by given id", err, req, res);
	}
};

module.exports = {
	getTasks,
	addTasks,
	updateTaskById,
	getTaskById,
	deleteTaskById,
};
