import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from './components/Login'
import Logo from './Assets/logo.png'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SpecialEvents  from "../src/utils/SpecialEvents";

const NavBar = () => {

  
const[searchMenu, setSearchMenu]=useState(false)
 const handleOnClick = e => {

  setSearchMenu(!searchMenu)
  SpecialEvents.emit('OPEN_SEARCH_BAR', searchMenu);
}
  const [login, setLogin] = useState(false)

  const openLogin = (e) => {

    setLogin(!login)

  }
  return (
    <>

      <div className=' fixed w-full z-40  top-0   justify-between  bg-white  text-sm font-semibold text-gray-600' >
        
        
        <div className='flex justify-between  p-3'>
          <div className='flex items-end'>
        <img alt='logo' src={Logo} className='h-14 w-14'></img>
        <div>GetADeal.com</div>
        </div>
        <div className='  hidden sm:block text-black ml-3 pl-2 hover:underline hover:text-gray-600' onClick={(e) => { openLogin(e) }}> login</div>
        < AiOutlineMenu className=' block sm:hidden text-4xl mt-3' />
        </div>

        
        
        
     
        {login ? <Login /> : null}

      <nav className=' hidden sm:flex justify-start bg-gray-800 '>

        <li className='inline-block '>
          <Link className=' ml-6 text-white' to="/realestate">Home</Link>
        </li>


      </nav>

      <div className=' flex sm:hidden justify-between pr-6  z-11 bg-white toggle_search_bar border-t-8 border-gray-800'>
                <div  onClick={(e)=>{handleOnClick(e)}}   className='flex items-center ml-3 mt-2 mb-2 p-2  hover:bg-gray-200 rounded-lg'
                  >
                    <label>Find a property</label>
                    <AiOutlineSearch className='text-4xl ml-2' />
                </div>

                
            </div>







     
      </div>
     








    </>
  )
}

export default NavBar