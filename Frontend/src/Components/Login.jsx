import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast" 

const Login = ({onLogin }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;//This line ensures that cookies, authorization headers, and other credentials are sent along with cross-origin requests.

const handleSubmit = async(e) =>{
    e.preventDefault();
    onLogin();
    await axios.post('http://localhost:3000/api/login',{email,password} )
    .then(response => {
       if(response.data.Login){
        toast.success("Login Successful!", { position: "top-right" });
        navigate('/dashboard');
    
        }else{
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
                        onChange={(e) =>{setEmail(e.target.value)}}
                        />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"  className='font-medium text-base'>
                           Password
                        </label>
                        <input type='password' 
                        placeholder='Enter password' 
                        name='password' 
                        autoComplete='off' 
                        className='form-control rounded-md'
                        onChange={(e) =>{setPassword(e.target.value)}}
                         />

                    </div>
                    <button type='submit' className='btn bg-light border w-100 rounded-md'>Login</button>
                </form>
                {/* <p>Don't Have an Account?</p>
                <Link to={'/register'} className='btn btn-default border w-100 bg-light rounded-md text-decoration-none'>Register</Link> */}
            </div>

        </div>
  )}

export default Login