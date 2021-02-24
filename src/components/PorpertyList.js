import React, { useRef } from 'react'
import UserCard from './UserCard'
import PeopertyCard from './PropertyCard'
import user from '../Assets/user.jpg'

const PropertyList = (props) => {





   return (

      <>

         {props.properties.map((property, key) => (

            <div key={key} className=' sm:flex flex-row bg-gray-800 rounded-xl p-3 my-2'>
               <UserCard   handleChatSidebar={props.handleChatSidebar} profile={user} userData={property.property.primaryOwner.user} />
               <PeopertyCard propertyData={property} />


            </div>

         ))}

      </>


   )

}

export default PropertyList