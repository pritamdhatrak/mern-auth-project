A full-stack web application built with the MERN stack featuring JWT authentication, role-based access control, and separate dashboards for admin and student users.

🚀 Live Demo
🔗 Live Application: https://mern-auth-assignment.netlify.app

🔧 Backend API: https://mern-auth-project-1-l0yp.onrender.com

📁 Source Code: https://github.com/pritamdhatrak/mern-auth-project

📋 Test Credentials
Admin Account
Email: admin@test.com
Password: admin123
Student Account
Email: student@test.com
Password: student123
✨ Features Implemented
Authentication & Security
✅ JWT-based authentication system
✅ Password hashing with bcrypt
✅ Protected routes and API endpoints
✅ Role-based access control (RBAC)
✅ Token-based session management
User Roles & Permissions
Admin Features
View all registered students
Add new student records
Edit existing student information
Delete student records
Full CRUD operations on student data
Student Features
View personal profile
Update profile information (name, email, course)
Secure access to own data only
Technical Features
✅ RESTful API architecture
✅ MongoDB database with Mongoose ODM
✅ React Router for client-side routing
✅ Axios for API communication
✅ CORS enabled for cross-origin requests
✅ Environment variables for sensitive data
✅ Responsive UI design
🛠️ Tech Stack
Frontend
React.js - UI library
React Router DOM - Client-side routing
Axios - HTTP client
CSS3 - Styling
Deployed on: Netlify
Backend
Node.js - Runtime environment
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - ODM library
JWT - Authentication
Bcrypt.js - Password hashing
Deployed on: Render
Database
MongoDB Atlas - Cloud database service
📁 Project Structure
🚀 Local Setup Instructions
Prerequisites
Node.js (v14 or higher)
MongoDB (local or Atlas account)
Git
Backend Setup
Clone the repository
Bash

git clone https://github.com/pritamdhatrak/mern-auth-project.git
cd mern-auth-project/backend


Install dependencies
npm install 

Create .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development

Run the server
npm run dev



Frontend Setup
Navigate to frontend directory
cd ../frontend


Install dependencies
npm install

Create .env file
REACT_APP_API_URL=http://localhost:5000/api



Start the application
npm start

http://localhost:3000

Name: Pritam Dhatrak
GitHub: https://github.com/pritamdhatrak
Project: MERN Stack Intern Assignment
