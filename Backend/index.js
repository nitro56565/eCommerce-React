import express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors'
import route from './routes/userRoute.js';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json())
app.use(cookieParser())


const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow cookies & authentication headers
}));


dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`server is running on PORT ${PORT}`)
    })

}).catch(error => console.log(error));

app.use('/api', route)

 