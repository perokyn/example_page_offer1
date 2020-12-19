import React from 'react'
import user from '../Assets/user.jpg'
import sign from '../Assets/sign.jpg'

const UserInfoCard =(props)=>{


return (

    <div className='bg-white rounded-lg  shadow-xl p-3 '>
    <img alt='agent' src={user} className='w-38 h-38 rounded-full shadow-xl'></img>
    <p className='text-xs font-semibold mt-2 '>Your Agent</p>
    <p className='text-gray-500 text-sm'>{props.content.property.primaryOwner.user.firstName}<span> </span>
         {props.content.property.primaryOwner.user.lastName}</p>
         <img alt='signature' src={sign} className='w-24'></img>
         <p className='text-gray-500 text-sm'><span className='text-gray-500 text-sm font-semibold'>Phone:</span>  333 333 33</p>
         <p className='text-gray-500 text-sm'> <span className='text-gray-500 text-sm font-semibold'>Email:</span> {props.content.property.primaryOwner.user.lastName}@offer1.com</p>

</div>

)

}

export default UserInfoCard