const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const { userRouter } = require("./routes/user");
// const { adminRouter } = require("./routes/admin");
const { todoRouter } = require("./routes/todo");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
// app.use("/admin", adminRouter);
app.use("/todo", todoRouter);

async function main() {
	await mongoose.connect(process.env.MONGO_URL);
	app.listen(3000, () => {
		console.log("Listening on port 3000");
	});
}

main();