import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Policies from './Policies'

const Home = ({handleLogin}) => {
    
  return (
    <>
    <div className='d-flex flex-row justify-content-center align-items-center vh-100 bg-white'>

    <div className='w-full flex flex-row '>
        <div className='w-1/2'>
        <Login onLogin={handleLogin} />
        </div>
        <div className='w-1/2'>
        <Registration/>
        </div>
       
    </div>
    
    </div>
    <Policies/>
    </>
  )
}

export default Home