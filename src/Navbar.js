import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from './components/Login'



const NavBar = () => {


  
  const [login, setLogin] = useState(false)

  const openLogin = (e) => {

    setLogin(!login)

  }
  return (
    <>

      <div className=' grid grid-cols-3 gap-2  bg-gray-300 p-2 text-sm font-semibold text-gray-600' >
        <div>GetADeal.com</div>
        <div className=' justify-self-end'>()</div>
        <div className=' text-black ml-3 pl-2 hover:underline hover:text-gray-600' onClick={(e) => { openLogin(e) }}> login</div>
      </div>
      {login ? <Login /> : null}
      <nav className='flex justify-start bg-gray-500 '>

        <li className='inline-block '>
          <Link className=' ml-6 text-white' to="/realestate">Home</Link>
        </li>


      </nav>









    </>
  )
}

export default NavBar