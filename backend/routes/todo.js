const express = require("express");
const { Router } = require("express");
const date = require('date-and-time');

const { todoModel } = require("../database/db");
const { jwt, auth, JWT_SECRET } = require("../middleware/auth");
const pattern = date.compile('ddd, MMM DD YYYY');

const app = express();
const todoRouter = Router();
todoRouter.use(auth); // authentication
const now = new Date();


todoRouter.get("/dashboard",  async (req, res) => {
	try {
		const todos = await todoModel.findOne({ userId: req.userId });
		res.json({
			todo: todos.title
		});
	} catch(error) {
		return res.status(401).json({
			message: "Error in Getting data from db",
			error: error.message
		});
	}
});

todoRouter.post("/",  async (req, res) => {
	const inputPayload = req.body;
	console.log(req.userId);

	if(!inputPayload.title) {
		return res.status(402).json({
			message: "Todo title missing"
		});
	}

	try {
		const newTodo = await todoModel.create({
			title: inputPayload.title,
			done: false,
			date: date.format(now, pattern)
		});

		res.status(201).json({
			message: "Todo created",
            todo: newTodo
		});
	} catch (error) {
		return res.status(401).json({
			message: "You Fault in todoCreation port",
			error: error
		});
	}
});

todoRouter.patch("/:id/complete", async (req, res) => {
    const todoId = req.params.id;

    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(todoId, { done: true }, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo marked as complete",
            todo: updatedTodo
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error updating todo",
            error: error.message
        });
    }
});

todoRouter.delete("/:id", async (req, res) => {
    const todoId = req.params.id;

    try {
        const deletedTodo = await todoModel.findByIdAndDelete(todoId);

        if (!deletedTodo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json({
            message: "Todo deleted successfully",
            todo: deletedTodo
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting todo",
            error: error.message
        });
    }
});


module.exports = { todoRouter }