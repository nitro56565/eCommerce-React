import { useState } from "react";
import { validateForm } from "../utils/formValidation"; // Import validation function

const useBillingForm = () => {
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
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on typing
    };

    // Handle order placement
    const handlePlaceOrder = () => {
        const validationErrors = validateForm(formData); // Run validation
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log(formData);
            alert("Order placed successfully! 🎉");
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
