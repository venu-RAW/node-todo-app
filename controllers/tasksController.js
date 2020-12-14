const mongoose = require("mongoose");
const Task = require("../models/taskSchema.js");

const getTasks = async (req, res, next) => {
	const allTasks = await Task.find();
	res.send(allTasks);
};

const addTasks = async (req, res, next) => {
	const { taskName } = req.body;

	let newtask = new Task({ taskName });

	try {
		newTask = await newtask.save();
	} catch (err) {
		console.log(err);
	}

	res.send("data added successfully");
};

module.exports = {
	getTasks,
	addTasks,
};
