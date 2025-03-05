import { createRazorpayInstance } from "../config/razorpayConfig.js";
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const razorpayInstance = createRazorpayInstance();

const getExchangeRate = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        return response.data.rates.INR; // Get USD to INR rate
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        return 83; // Fallback to 1 USD = 83 INR
    }
};

export const createOrder = async (req, res) => {
    const { courseId, amount } = req.body;

    console.log("Received createOrder request:", req.body); // Log request data

    const exchangeRate = await getExchangeRate();
    const amountInINR = Math.round(amount * exchangeRate); // Convert USD to INR

    const options = {
        amount: amountInINR * 100, // Razorpay requires amount in paise
        currency: "INR",
        receipt: `receipt_order_${courseId}`,
    };

    try {
        const order = await razorpayInstance.orders.create(options);
        console.log("Razorpay order created:", order); // Log successful order
        res.status(200).json(order);
    } catch (error) {
        console.error("Razorpay Order Creation Error:", error); // Log full error
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message, // Include error details
        });
    }
};


export const verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    // create hmac object
    const hmac = crypto.createHmac("sha256", secret);

    hmac.update(order_id + "|" + payment_id);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === signature) {
        return res.status(200).json({
            success: true,
            message: "Payment Verified",
        });

    } else {
        return res.status(400).json({
            success: false,
            message: "Payment not verified"
        })
    }
};