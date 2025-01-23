const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

async function auth(req, res, next) {
	try {
		const token = req.headers.token;
		if(!token) {
			return res.status(400).json({
				message: "Token Not found!"
			});
		}

		const decodedUser = jwt.verify(token, JWT_SECRET);

		if(decodedUser) {
			req.userId = decodedUser.id; 
			next();
		} else {
			return res.status(400).json( {message: "Invalid Token" } );
		}
	} catch (error) {
		return res.status(400).json({
			message: "Error while Authentication",
			error: error
		});
	}
}

module.exports = { jwt, auth, JWT_SECRET }