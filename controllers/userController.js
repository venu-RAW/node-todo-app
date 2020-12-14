const User = require("../models/userModel.js");

const signUpUser = (req, res, next) => {
	console.log(req.body);
	const { username, email, password } = req.body;

	const newUser = new User(username, email, password);
	res.send(newUser);
};

module.exports.signUpUser = signUpUser;
