import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-hot-toast"

const API_URL = import.meta.env.VITE_API_URL;
const Registration = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${API_URL}/register`, { name, email, password })
            .then(res => {
                if (res) {
                    
                    toast.success("Registration Successful!", { position: "top-right" });
                    setName('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' >
            <div className='bg-white p-3 rounded w-50'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='font-medium text-base'>
                            Name
                        </label>
                        <input type='text'
                            placeholder='Enter your name'
                            name='name' autoComplete='off'
                            className='form-control rounded-md'
                            onChange={(e) => { setName(e.target.value) }}
                        />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='font-medium text-base'>
                            Email
                        </label>
                        <input type='text'
                            placeholder='Enter your email'
                            name='email'
                            autoComplete='off'
                            className='form-control rounded-md'
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className='font-medium text-base'>
                            Password
                        </label>
                        <input type='password'
                            placeholder='Enter password'
                            name='password'
                            autoComplete='off'
                            className='form-control rounded-md'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />

                    </div>
                    <button type='submit' className='btn bg-light border w-100 rounded-md'>Register</button>
                </form>
            </div>

        </div>
    )
}

export default Registration