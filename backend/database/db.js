const mongoose = require("mongoose");
const { string } = require("zod");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new Schema({
	email: {type: String, unique: true},
	password: String,
	name: String
});

// const course = new Schema({
// 	title: String,
// 	description: String,
// 	price: Number,
// 	imageUrl: String,
// 	adminId: { type: Schema.Types.ObjectId, ref: 'admin'}
// });

const todo = new Schema({
	title: String,
	done: { type: Boolean, default: false},
	date: { type: Date, default: Date.now }
});

// const admin = new Schema({
// 	email: {type: String, unique: true},
// 	password: String,
// 	firstname: String
// });

// const purchase = new Schema({
// 	courseId: { type: Schema.Types.ObjectId, ref: "coures"},
// 	userId: { type: Schema.Types.ObjectId, ref: "user"}
// });

const UserModel = mongoose.model("users", user);
// const courseModel = mongoose.model("cources", course);
// const adminModel = mongoose.model("admins", admin);
// const purchaseModel = mongoose.model("purchases", purchase);
const todoModel = mongoose.model("todo", todo);

module.exports = {
	UserModel: UserModel,
	// courseModel: courseModel,
	// adminModel: adminModel,
	// purchaseModel: purchaseModel,
	todoModel: todoModel
}