const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");
const taskRoute = require("./routes/taskRoute.js");

// CONFIGURATIONS
dotenv.config({
	path: "./config.env",
});

// DB CONNECTION
mongoose.connect(
	process.env.DB_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err) => {
		if (err) {
			console.log("Could not connect to database.");
		}
		console.log("Connected to database successfully!!!");
	}
);

const app = express();
app.use(express.json());

// USER ROUTE
app.use("/todos/users", userRoute);

// ADD TASK
app.use("/todos", taskRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on Port : ${process.env.PORT}`);
});
