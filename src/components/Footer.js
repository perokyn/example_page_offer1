import React from 'react'
import { ImMobile,ImEnvelop,ImLocation2 } from "react-icons/im";

 const Footer=()=>{


    return (

        <div className='flex justify-between p-3'>
            
            
            <div>
           <label>GetADeal.com</label>
              <p className='flex '><ImMobile/><span className='text-sm text-gray-600 mx-2'> 1-888-888-8888</span></p>
              <p className='flex '><ImEnvelop/><span className='text-sm text-gray-600 mx-2'>  deal@getone.com</span></p>
              <p className='flex '><ImLocation2/><span className='text-sm text-gray-600 mx-2'>  6th street Moon, CX6533</span></p>
              
            </div>
            
            
            
            <div>
           <label>&nbsp;&nbsp; For Buyers</label>
           <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Apartments</span></p>
              <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Houses</span></p>
              <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Land</span></p>
              
            </div>
            <div>
           <label >&nbsp; &nbsp;For Sellers</label>
           <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Apartments</span></p>
              <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Houses</span></p>
              <p className='text-gray-600  group'><span className='text-blue-500 invisible group-hover:visible'>></span> <span className='hover:underline hover:text-black'>Land</span></p>
              
            </div>
        </div>
    )
}

export default Footer