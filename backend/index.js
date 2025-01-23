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
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

}

main();