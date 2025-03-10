import React, { useState } from 'react'
import axios from 'axios'
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';
=======
import {  useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes
import { toast } from "react-hot-toast"

const API_URL = import.meta.env.VITE_API_URL;
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post(`${API_URL}/login`, { email, password })
            .then(response => {
                if (response.data.Login) {
                    toast.success("Login Successful!", { position: "top-right" });
                    navigate('/dashboard');

                } else {
                    toast.error(response.data.Message || "Login failed", { position: "top-right" });
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center  vh-100' >
            <div className='bg-white p-3 rounded w-50'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

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
                    <button type='submit' className='btn bg-light border w-100 rounded-md'>Login</button>
                </form>
                </div>

        </div>
    )
}

export default Login