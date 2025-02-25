import React from "react";
function UserDetail({ ProductsData }) {
    return (<div className="p-4 lg:p-20 md:p-15 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full  p-2 md:p-4 lg:p-6">
            <form className="space-y-4">
                <h1 className="text-lg font-bold">Billing Details</h1>
                <div>
                    <label className="block text-black-700">Name</label>
                    <input type="text" name="Name" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                </div>

                <div>
                    <label className="block text-black-700">Phone</label>
                    <input type="text" name="phone" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                </div>

                <div>
                    <label className="block text-black-700">Email</label>
                    <input type="text" name="email" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                </div>

                <div>
                    <label className="block text-black-700">Country / Region</label>
                    <input type="text" name="country" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>

                <div>
                    <label className="block text-black-700">Street Address</label>
                    <input type="text" name="adress" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>

                <div>
                    <label className="block text-black-700">Town / City</label>
                    <input type="text" name="city" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>

                <div>
                    <label className="block text-black-700">Zip Code</label>
                    <input type="text" name="zipCode" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>
                <div>
                    <input type="text" name="additional" placeholder="Additional information" className="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>
            </form>
        </div>

        <div className="w-full  p-2 md:p-4 lg:p-6">
            <div className="w-full grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <h1 className="font-2xl text-lg font-semibold">Product</h1>
                    <p className="text-gray-500"> Sofa {'x'} 1</p>
                    <p className="font-bold">Subtotal</p>
                    <p className="font-bold">Total</p>
                </div>
                <div className="space-y-4">
                    <h1 className="font-2xl text-lg  font-semibold">Subtotal</h1>
                    <p>{'Rs.'} 25000</p>
                    <p>{'Rs.'} 25000</p>
                    <h1 className="text-[#B88E2F] text-xl font-bold">{'Rs.'} 25000</h1>
                </div>
            </div>
            <br />
            <hr />
            <div className="w-full grid gap-4 mt-6 p-4 ">
                <div>

                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="cod" className="form-radio text-blue-500" />
                            <span>Cash on Delivery</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="bank" className="form-radio text-blue-500" />
                            <span>Bank Transfer</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="upi" className="form-radio text-blue-500" />
                            <span>UPI</span>
                        </label>
                        <p> Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and
                            for other purposes described in our <span className="font-semibold">Privacy policy.</span></p>
                    </div>
                    <div className=" flex justify-center mt-4 align-center ">
                        <button className="border border-black rounded-lg px-10 py-2">Place Order </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default UserDetail;