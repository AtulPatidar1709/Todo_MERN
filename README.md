
# To-Do App

A full-stack To-Do application with a React frontend and a Node.js/Express backend. This project allows users to create, read, update, and delete tasks. It supports user authentication and stores tasks in a database.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Frontend Setup](#frontend-setup)
4. [Backend Setup](#backend-setup)
5. [Operations](#operations)
6. [Running the App Locally](#running-the-app-locally)
7. [Deployment](#deployment)
8. [Contributing](#contributing)

---

## Features

- **Task Management**: Users can add, update, delete, and view tasks.
- **User Authentication**: Allows users to sign up, log in, and manage their tasks securely.
- **Task Filtering**: Filter tasks by completed or pending status.
- **Persistent Storage**: Tasks are stored in a database (MongoDB).
- **Responsive UI**: Built using React and styled with CSS.

---

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Bootstrap**: A CSS framework for styling and responsive design.

### Backend:
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js to handle routing and server setup.
- **MongoDB**: NoSQL database for storing tasks and user data.
- **JWT**: JSON Web Token for user authentication.

---

## Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app/frontend
   ```

2. **Install dependencies**:

   Use npm or yarn to install the required packages.

   ```bash
   npm install
   ```

3. **Run the development server**:

   Start the React app with Vite.

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app/backend
   ```

2. **Install dependencies**:

   Use npm to install the required packages.

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_database_url
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the backend server**:

   Start the Node.js server.

   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`.

---

## Operations

### Frontend Operations:
- **Create a Task**: Click the "Add Task" button to add a new task.
- **Update a Task**: Click on a task to edit its details.
- **Delete a Task**: Click the delete icon next to a task to remove it.
- **Filter Tasks**: Filter tasks by their status (completed or pending).

### Backend Operations:
- **Create Task**: `POST /api/tasks` - Adds a new task to the database.
- **Get All Tasks**: `GET /api/tasks` - Fetches all tasks from the database.
- **Update Task**: `PUT /api/tasks/:id` - Updates a specific task by ID.
- **Delete Task**: `DELETE /api/tasks/:id` - Deletes a specific task by ID.
- **User Authentication**: 
  - **Register**: `POST /api/auth/register` - Registers a new user.
  - **Login**: `POST /api/auth/login` - Logs in an existing user and returns a JWT token.

---

## Running the App Locally

To run both frontend and backend locally, follow these steps:

1. **Frontend**:
   - Navigate to the `frontend` directory and run:
     ```bash
     npm run dev
     ```

2. **Backend**:
   - Navigate to the `backend` directory and run:
     ```bash
     npm run dev
     ```

---

## Deployment

To deploy the app, you can follow the steps below for both frontend and backend.

### Frontend Deployment:
- **Netlify**:
  - Push your code to GitHub.
  - Connect your GitHub repository to Netlify.
  - Set the build command to `npm run build` and the publish directory to `frontend/dist`.

### Backend Deployment:
- **Render**:
  - Push your code to GitHub.
  - Connect your GitHub repository to Render.
  - Set the build and start commands:
    - Build Command: `npm install`
    - Start Command: `npm run start`

  - Set the environment variables on the Render dashboard (e.g., `MONGO_URI`, `JWT_SECRET`).

---

## Contributing

We welcome contributions! If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
