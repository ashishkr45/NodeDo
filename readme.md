# Todo App (Backend)

This repository contains the backend code for a Todo application, built as part of my learning journey in backend development. As a side project, I'm creating this app to solidify my understanding of building and managing server-side applications using Node.js and Express.

## Project Description
The Todo App is designed to allow users to create, update, delete, and manage their daily tasks. Currently, this repository includes only the backend implementation. As I learn frontend development (specifically React), I plan to extend this project by integrating a user-friendly interface.

### Features:
- User authentication and authorization.
- CRUD operations for todos:
  - Create a new todo.
  - Mark a todo as complete.
  - Delete a todo.
- Robust error handling and validation.

### Tech Stack:
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)

## Future Plans
As I'm currently focused on learning backend development, this repository contains only the server-side code. Once I dive into React and frontend development, I plan to:
1. Build a responsive frontend interface using React.
2. Integrate the frontend with the backend via REST APIs.
3. Host the fullstack application publicly.

## Installation and Setup
To run this backend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app-backend.git
   cd todo-app-backend
   ```
2. Install dependencies:
	```bash
	npm install
	```
3. Create a .env file in the root directory and add the following variables:
	```env
	PORT=3000
	MONGO_URI=your_mongo_db_connection_string
	JWT_SECRET=your_jwt_secret
	```

4. Start the server:
	```bash
	npm start
	The server should now be running at http://localhost:3000.
	```

## API Endpoints
Todos:
- GET /dashboard: Fetch the user's todos.
- POST /: Create a new todo.
- PATCH /:id/complete: Mark a todo as complete.
- DELETE /:id: Delete a todo.

## Contributing
Contributions are welcome! If you have suggestions, feel free to open an issue or submit a pull request.

## Acknowledgments
This project is inspired by my ongoing journey to learn fullstack development and improve my skills in creating real-world applications.

Stay tuned for updates as I complete the frontend and deploy the fullstack application! 😊