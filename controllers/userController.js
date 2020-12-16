const User = require("../models/userSchema.js");
const sendResponse = require("../helpers/sendResponse.js");
const sendError = require("../helpers/sendError.js");

const signUpUser = async (req, res) => {
	console.log(req.body);
	const { username, email, password } = req.body;

	let newUser = new User({ username, email, password });

	try {
		newUser = await newUser.save();
		sendResponse(200, "User added successfully", newUser, req, res);
	} catch (err) {
		sendError(400, "Adding of task failed", err, req, res);
	}
};

module.exports.signUpUser = signUpUser;
