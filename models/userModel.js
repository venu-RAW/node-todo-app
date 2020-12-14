const uniqid = require("uniqid");

class User {
	constructor(username, email, password) {
		this.userId = username + uniqid();
		this.username = username;
		this.email = email;
		this.password = password;
		this.createdAt = Date.now();
	}
}

module.exports = User;
