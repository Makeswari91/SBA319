//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import log from './Middleware/loggingMiddleware.mjs';
import globalErr from './Middleware/globalErr.mjs';
import studentRoute from './Routes/studentRoute.mjs';
import NetflixMoviesRoute from './Routes/NetflixMoviesRoute.mjs';
import olympicRoute from './Routes/olympicRoute.mjs';

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//connection
connectDB();

//Middleware
 app.use(express.json());
 app.use(log);


//Routes
app.use('/api/student', studentRoute);
app.use('/api/NetflixMovies', NetflixMoviesRoute);
app.use('/api/olympic', olympicRoute);


//Global Middleware
 app.use(globalErr);

//Listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

