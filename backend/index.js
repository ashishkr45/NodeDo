const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
// const { adminRouter } = require("./routes/admin");
const { todoRouter } = require("./routes/todo");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
// app.use("/admin", adminRouter);
app.use("/todo", todoRouter);

async function main() {
	await mongoose.connect("mongodb+srv://ashishkr45943:tm57o9yh88B9PRW9@cluster0.6uyzs.mongodb.net/todo-db");
	app.listen(3000, () => {
		console.log("Listening on port 3000");
	});
}

main();