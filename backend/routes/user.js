// libraries imported
const express = require("express");
const { Router } = require("express");
const { z } = require("zod");
const bcrypt = require("bcrypt");

// imported modules
const { UserModel } = require("../database/db");
const { jwt, auth, JWT_SECRET } = require("../middleware/auth");

// instances created
const app = express();
app.use(express.json());
const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    try {
		const reqBody = z.object({
            email: z.string().min(10).max(100).email(),
            name: z.string().min(3).max(50),
            password: z.string().min(8).max(50),
        });

        const parsedData = reqBody.safeParse(req.body);

        if (!parsedData.success) {
            return res.status(400).json({
                message: "Incorrect format",
                error: parsedData.error,
            });
        }
		
        const { email, password, name } = req.body;

        const alreadyExist = await UserModel.findOne({ email });
        if (alreadyExist) {
            return res.status(400).json({ message: "Email already used" });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({ email, password: hashedPassword, name });

        res.status(200).json({ message: "Signing In Successful!" });
    } catch (error) {
        res.status(500).json({
            message: `Error while signing up: ${error.message}`,
        });
    }
});

userRouter.post("/Login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email })
        const againHass = bcrypt.compare(password, user.password);

        if(user && againHass) {
            const token = jwt.sign({
                id: user._id.toString()
            }, JWT_SECRET);

            res.json({ message: 'Logged in successfully', token });
        } else {
            return res.status(401).json({
                message: "Invaild Creadentials"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error while Login", 
            error: error
        });
    }
});

module.exports = { userRouter };