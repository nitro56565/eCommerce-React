import { useState, useEffect } from "react";
import { validateForm } from "../utils/formValidation";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCountContext } from '../hooks/UseCountContext';

const useBillingForm = () => {
    const { cartItems, removeFromCart } = useCountContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        address: "",
        city: "",
        zipCode: "",
        additional: ""
    });

    const [errors, setErrors] = useState({});


    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    // ✅ Handle order placement
    const handlePlaceOrder = async ({ totalPrice, razorPay, itemId }) => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && razorPay === true) {



            try {
                const options = {
                    courseId: 1,
                    amount: totalPrice
                }

                const res = await axios.post('http://localhost:3000/api/createOrder', options, { withCredentials: true });
                if (Object.keys(validationErrors).length === 0) {
                    try {
                        // ✅ Step 1: Create Razorpay Order
                        const options = { courseId: 1, amount: totalPrice };
                        const res = await axios.post('http://localhost:3000/api/createOrder', options, { withCredentials: true });

                        const data = res.data;
                        console.log("Razorpay Order Data:", data);

                        const paymentObject = new window.Razorpay({
                            key: "rzp_test_secVNjMLM8ldmq",
                            order_id: data.id,
                            ...data,

                            handler: async (response) => {
                                console.log("Razorpay Payment Response:", response);

                                const options2 = {
                                    payment_id: response.razorpay_payment_id,
                                    order_id: response.razorpay_order_id,
                                    signature: response.razorpay_signature
                                };

                                try {
                                    // ✅ Step 2: Verify Payment
                                    const verifyRes = await axios.post('http://localhost:3000/api/verifyPayment', options2, { withCredentials: true });
                                    console.log("Payment Verification Response:", verifyRes.data);

                                    if (verifyRes) {
                                        // ✅ Step 3: Send Ordered Products to Database
                                        const orderData = {
                                            // ✅ Use actual user ID
                                            orders: cartItems,
                                            paymentStatus: "paid"
                                        };

                                        const orderAdded = await axios.post('http://localhost:3000/api/order', orderData, { withCredentials: true })

                                        console.log("Order placed successfully!", orderAdded);
                                        navigate('/orderSuccess');
                                        removeFromCart(itemId);

                                    } else {
                                        alert("Payment verification failed. Please try again.");
                                    }



                                } catch (error) {
                                    console.error("Error verifying payment:", error);
                                }
                            }
                        });

                        paymentObject.open();
                    } catch (error) {
                        console.error("Order creation failed:", error.response ? error.response.data : error.message);
                        alert("Order creation failed. Check the console for details.");
                    }
                } else {
                    console.warn("Validation failed or user not logged in.");
                }
            }catch{(err)=>{
                console.log(err)
            }}

            return {
                formData,
                errors,
                handleChange,
                handlePlaceOrder
            };
        };
    }}


        export default useBillingForm;
    
