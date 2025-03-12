import React from 'react'
import Login from '../Components/Login'
import Registration from '../Components/Registration'
import Policies from '../Components/Policies'

const Home = () => {

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center vh-100 bg-white'>

        <div className='w-full flex flex-row '>
          <div className='w-1/2'>
            <Login />
          </div>
          <div className='w-1/2'>
            <Registration />
          </div>
        </div>
        
      </div>
      <Policies />
    </>
  )
}

export default Home