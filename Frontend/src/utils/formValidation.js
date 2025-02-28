import React from "react";

export const validateForm = (formData) => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    
    if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        errors.email = "Enter a valid email";
    }

    if (!formData.country.trim()) errors.country = "Country is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";
    
    if (!formData.zipCode.trim()) {
        errors.zipCode = "Zip Code is required";
    } else if (!/^\d{5,6}$/.test(formData.zipCode)) {
        errors.zipCode = "Zip Code must be 5 or 6 digits";
    }

    return errors; // Returns an object with errors (empty if no errors)
};
