import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    orders: [],
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Orders", orderSchema);