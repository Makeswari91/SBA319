//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import log from './Middleware/loggingMiddleware.mjs';
import globalErr from './Middleware/globalErr.mjs';
import usersRoute from './Routes/usersRoute.mjs';
import postsRoute from './Routes/postsRoute.mjs';
import commentsRoute from './Routes/commentsRoute.mjs';

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//connection
connectDB();

//Routes
app.use('/api/Users', usersRoute);
app.use('/api/Posts', postsRoute);
app.use('/api/Comments', commentsRoute);

//Middleware
 app.use(express.json());
 app.use(log);

//Global Middleware
 app.use(globalErr);

//Listener
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

