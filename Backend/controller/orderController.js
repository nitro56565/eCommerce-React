import orderModel from "../model/orderModel.js";
import mongoose from "mongoose";

export const order = async (req, res) => {
    try {
        
        const userId = req.user.id;  
        const { orders , paymentStatus } = req.body;
        // ✅ Create and save the order
        const newOrder = new orderModel({
            user_id: userId,  
            orders: orders,
            paymentStatus: paymentStatus,
            status:"pending"
        });

        await newOrder.save();
        console.log("Order Created:", newOrder);
        return res.status(201).json({ success: true, message: "Order placed successfully", order: newOrder });

    } catch (error) {
        console.error("Order creation error:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

 // Ensure this import is correct

export const getUserOrders = async (req, res) => {
    try {
        console.log("User ID from JWT:", req.user?.id); 

        if (!req.user?.id) {
            return res.status(400).json({ message: "User ID not found in request" });
        }

        const userId = new mongoose.Types.ObjectId(req.user.id); 

        const userOrders = await orderModel.find({ user_id: userId }).populate("user_id", "email");
        console.log("Orders found:", userOrders); 

        res.status(200).json({ userOrders });
    } catch (error) {
        console.error("Error fetching orders:", error); // ✅ Log error in backend
        res.status(500).json({ message: "Error fetching orders", error });
    }
};
