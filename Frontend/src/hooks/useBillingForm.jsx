import { useState } from "react";
import { validateForm } from "../utils/formValidation"; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCountContext } from '../hooks/UseCountContext';

const useBillingForm = () => {
    const { cartItems, removeFromCart } = useCountContext();
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
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on typing
    };

    // Handle order placement 

    const handlePlaceOrder = async ({ totalPrice, razorPay , itemId }) => {
        const validationErrors = validateForm(formData); // Run validation
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && razorPay === true) {
            
                //create order 

                try {
                    const options = {
                        courseId: 1,
                        amount: totalPrice
                    }

                    const res = await axios.post('http://localhost:3000/api/createOrder', options, { withCredentials: true });

                    const data = res.data; // Now `data` is accessible
                    console.log(data);



                    const paymentObject = new (window).Razorpay({
                        key: "rzp_test_secVNjMLM8ldmq",
                        order_id: data.id,
                        ...data,

                        handler: function (response) {
                            console.log(response);
                            const options2 = {

                                payment_id: response.razorpay_payment_id,
                                order_id: response.razorpay_order_id,
                                signature: response.razorpay_signature
                            }

                            axios.post('http://localhost:3000/api/verifyPayment', options2).then((res) => {
                                console.log(res.data);

                                if (res.data.success) {
                                    // alert("Order placed successfully! 🎉");
                                    navigate('/orderSuccess');
                                    removeFromCart(itemId);
                                    
                                }
                                else {
                                    alert("Payment Failed");
                                }
                            }).catch((err) => {
                                console.log(err);
                            })

                        }
                    })


                    console.log(formData);

                    setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        country: "",
                        address: "",
                        city: "",
                        zipCode: "",
                        additional: ""
                    })
                    paymentObject.open();
                } catch (error) {
                    console.error("Order creation failed:", error.response ? error.response.data : error.message);
                    alert("Order creation failed. Check the console for details.");
                }



            
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handlePlaceOrder
    };
};

export default useBillingForm;
