import React, { useState } from "react";
import useBillingForm from "../hooks/useBillingForm";
function BillingDetail({ cartItems }) {
    const [cod, setCod] = useState(false);
    const [bt, setBt] = useState(false);
    const [razorPay, setRazorPay] = useState(false);

    const { formData, errors, handleChange, handlePlaceOrder } = useBillingForm();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemName = cartItems.map(item => item.title)

    return (<div className="p-4 lg:p-20 md:p-15 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full  p-2 md:p-4 lg:p-6">
            <form className="space-y-4">
                <h1 className="text-lg font-bold">Billing Details</h1>
                <div>
                    <label className="block text-black-700">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full p-2 border rounded-lg focus:ring-2"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Country / Region</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Street Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Town / City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>

                <div>
                    <label className="block text-black-700">Zip Code</label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                    {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
                </div>
                <div>
                    <input type="text" name="additional" value={formData.additional} onChange={handleChange} placeholder="Additional information" className="w-full p-2 border border-gray-550 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>
            </form>
        </div>

        <div className="w-full  p-2 md:p-4 lg:p-6">
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h1 className="font-2xl text-lg font-semibold">Product</h1>
                    {cartItems.map((item, index) => (
                        <p key={index} className="text-gray-500">{item.title} x {item.quantity}</p>
                    ))}
                    <p className="font-bold">Subtotal</p>
                    <p className="font-bold">Total</p>
                </div>
                <div className="space-y-4">
                    <h1 className="font-2xl text-lg  font-semibold">Subtotal</h1>
                    {cartItems.map((item, index) => (
                        <p key={index}>$ {item.price * item.quantity}</p>
                    ))}
                    <p>$ {totalPrice}</p>
                    <h1 className="text-[#B88E2F] text-xl font-bold">$ {totalPrice}</h1>
                </div>
            </div>
            <br />
            <hr />
            <div className="w-full grid gap-4 mt-6 p-4 ">
                <div>

                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="cod" onClick={() => (setCod(true), setBt(false), setUpi(false))} className="form-radio text-blue-500" />
                            <span>Cash on Delivery</span>

                        </label>
                        {cod ? <p className="text-gray-500"> You can make your payment after your Order is delivered.</p> : <></>}
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="bank" onClick={() => (setCod(false), setBt(true), setUpi(false))} className="form-radio text-blue-500" />
                            <span>Bank Transfer</span>

                        </label>
                        {bt ? <p className="text-gray-500"> Make your payment directly in to our Bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.
                        </p> : <></>
                        }
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="razorPay" onClick={() => (setCod(false), setBt(false), setRazorPay(true))} className="form-radio text-blue-500" />
                            <span>Razor Pay</span>

                        </label>
                        {razorPay ? <p className="text-gray-500">Make your payment directly in to our Bank accountg using Razorpay UPI.
                            make sure you have RazorPay account to proceed.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.</p> : <></>}
                        <hr />
                        <p> Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and
                            for other purposes described in our <span className="font-semibold">Privacy policy.</span></p>
                    </div>
                    <div className=" flex justify-center mt-4 align-center ">
                        <button className="border border-black-800 rounded-lg px-10 py-2 shadow-lg hover:shadow-4xl focus:shadow-4xl active:shadow-md transition-all duration-300 ease-in-out"
                            onClick={() => handlePlaceOrder({totalPrice , razorPay})} >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default BillingDetail;