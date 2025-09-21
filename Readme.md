# Express API Server

This is a Node.js Express server that provides RESTful APIs for managing student data, Netflix movies, and Olympic records. It uses MongoDB for data storage and includes custom middleware for logging and error handling.

## Features

-  Student API: CRUD operations for student records
-  Netflix Movies API: CRUD operations for movie data
-  Olympic API: CRUD operations for olympic medal data
-  Custom middleware for logging and global error handling
-  Environment variable support via `dotenv`
-  MongoDB connection setup

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## API Endpoints
Student API
- GET /api/student
- POST /api/student
- PUT /api/student/:id
- DELETE /api/student/:id

Netflix Movies API
- GET /api/NetflixMovies
- POST /api/NetflixMovies
- PUT /api/NetflixMovies/:id
- DELETE /api/NetflixMovies/:id

Olympic API
- GET /api/olympic
- POST /api/olympic
- PUT /api/olympic/:id
- DELETE /api/olympic/:id
