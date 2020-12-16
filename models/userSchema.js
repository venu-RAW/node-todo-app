const uniqid = require("uniqid");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			default: "user" + uniqid(),
		},
		username: {
			type: String,
			required: [true, "Username is required"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
		},
		password: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.generateHash = async function () {
	try {
		return await bcrypt.hash(this.password, 10);
	} catch (err) {
		console.log(err);
	}
};

userSchema.pre("save", async function (next) {
	this.password = await this.generateHash();
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
