import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const navigate = useNavigate();

const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.post('http://localhost:3000/api/register',{name, email,password} )
    .then(res => {
        // navigate('/login')
    })
    .catch(err => console.log(err))
}

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' >
            <div className='bg-white p-3 rounded w-50'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"  className='font-medium text-base'>
                            Name
                        </label>
                        <input type='text' 
                        placeholder='Enter your name' 
                        name='name' autoComplete='off' 
                        className='form-control rounded-md'
                        onChange={(e) =>{setName(e.target.value)}}
                         />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"  className='font-medium text-base'>
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
                    <button type='submit' className='btn bg-light border w-100 rounded-md'>Register</button>
                </form>
                {/* <p>Already Have an Account?</p>
                <Link to={'/login'} className='btn btn-default border w-100 bg-light rounded-md text-decoration-none'>Login</Link> */}
            </div>

        </div>
    )
}

export default Registration