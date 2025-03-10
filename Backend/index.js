import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import route from './routes/userRoute.js';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import paypal from '@paypal/checkout-server-sdk'
import axios from 'axios';



const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const app = express();
app.use(express.json());

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`Blocked by CORS: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // ✅ Allows cookies to be sent
}));

app.use(cookieParser());

axios.defaults.withCredentials = true;  // ✅ Ensures every request sends cookies
axios.defaults.baseURL = "http://localhost:3000";





dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.MONGOURL;

const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_SECRET
  );

  const client = new paypal.core.PayPalHttpClient(environment);




mongoose.connect(URL).then(()=>{
    
    console.log("DB connected successfully");

    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`)
    })

}).catch(error => console.log(error));

app.get("/complete-payment", (req, res) => {
    res.send("Payment successful! You can now redirect the user to a confirmation page.");
});

app.get("/cancel-payment", (req, res) => {
    res.send("Payment canceled. You can now redirect the user back to the checkout page.");
});


app.use('/api', route)

