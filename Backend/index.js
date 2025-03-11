import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import route from './routes/userRoute.js';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import paypal from '@paypal/checkout-server-sdk'

const app = express();
app.use(express.json());



app.use(
    cors({
      origin: "https://e-commerce-react-git-main-rutujas-projects-c1e47b7d.vercel.app", 
      credentials: true, 
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"], 
    })
  );
  
    


app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.MONGOURL;

const environment = new paypal.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_SECRET
);

const client = new paypal.core.PayPalHttpClient(environment);
mongoose.connect(URL).then(() => {

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

