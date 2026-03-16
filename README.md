# 🚀 Smart Interview Preparation Platform - Backend

## 📌 Overview

Smart Interview Preparation Platform Backend is a **Node.js and
Express-based REST API** that powers the Smart Interview Preparation
Platform.

The backend handles: - User authentication - Study plan generation -
Progress tracking - Secure API communication - Database operations

It is built using the **MERN stack architecture**, with MongoDB used for
persistent data storage.

------------------------------------------------------------------------

# 🛠 Tech Stack

### Backend Framework

-   Node.js
-   Express.js

### Database

-   MongoDB


### Authentication

-   JWT (JSON Web Tokens)

### Security

-   bcryptjs for password hashing

### Environment Configuration

-   dotenv

------------------------------------------------------------------------

# 🧱 System Architecture

Frontend (React) │ │ REST API ▼ Backend (Node.js + Express) │ ▼ MongoDB
Database

------------------------------------------------------------------------

# ✨ Features

## 1️⃣ Authentication System

-   User Signup
-   User Login
-   Password hashing using bcrypt
-   JWT-based authentication
-   Protected routes with middleware

## 2️⃣ Study Plan Generation

Generates a **daily study plan** based on: - Interview date - Experience
level (Student / Professional)

Topics included: - Data Structures & Algorithms - DBMS - System Design -
Behavioral Questions

## 3️⃣ Progress Tracking

Users can: - Mark topics as completed - Track remaining topics - Monitor
interview preparation progress

------------------------------------------------------------------------

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

git clone https://github.com/siddesh213/Smartinterview-backend.git

## 2️⃣ Navigate to project folder

cd Smartinterview-backend

## 3️⃣ Install dependencies

npm install

## 4️⃣ Setup environment variables

Create a `.env` file:

PORT=5000 MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## 5️⃣ Run the server

npm run dev

Server runs on: http://localhost:5000

------------------------------------------------------------------------




# 🔐 Security

-   Passwords stored using bcrypt hashing
-   JWT authentication middleware
-   Environment variables managed using dotenv

------------------------------------------------------------------------

# 📈 Future Improvements

-   AI-based interview question generator
-   Mock interview system
-   Coding practice integration
-   Performance analytics dashboard

------------------------------------------------------------------------

# 👨‍💻 Author

**Siddesh S K**

Email: siddusiddesh551@gmail.com\
Phone: 8310931606

GitHub: https://github.com/siddesh213
