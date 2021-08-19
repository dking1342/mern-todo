import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import cors from 'cors';

// routers
import TodoRouter from './routes/TodoRouter.js';

// variables
const PORT = process.env.PORT || 8080;

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// db connection
const conn = process.env.MONGO_URI || 'mongodb://localhost';
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true    
}
mongoose.connect(conn,options)

// routes
app.use('/api',TodoRouter);


app.get('/',(req,res)=> res.status(200).json({message: 'server is ready'}))

// error handler
app.use((err,req,res,next)=> res.status(500).json({message: err.message}))

// app listener
app.listen(PORT,()=> console.log(`Server listening to PORT ${PORT}`))

