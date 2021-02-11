import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from './components/Login'
import Logo from './Assets/logo.png'


const NavBar = () => {


  
  const [login, setLogin] = useState(false)

  const openLogin = (e) => {

    setLogin(!login)

  }
  return (
    <>

      <div className=' fixed w-full z-40  top-0   justify-between  bg-white  text-sm font-semibold text-gray-600' >
        
        
        <div className='flex items-end p-3'>
        <img alt='logo' src={Logo} className='h-14 w-14'></img>
        <div>GetADeal.com</div>
        <div className=' text-black ml-3 pl-2 hover:underline hover:text-gray-600' onClick={(e) => { openLogin(e) }}> login</div>
        </div>

        
        
        
     
        {login ? <Login /> : null}

      <nav className=' flex justify-start bg-gray-800 '>

        <li className='inline-block '>
          <Link className=' ml-6 text-white' to="/realestate">Home</Link>
        </li>


      </nav>

     
      </div>
     








    </>
  )
}

export default NavBar