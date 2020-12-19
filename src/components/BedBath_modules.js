import React from 'react'
import BedroomIcon from '../Assets/Bedroom-icon.png'
import BathroomIcon from '../Assets/Bathrooms-icon.png'
import ParkingIcon from '../Assets/Parking-icon.png'


export const BedBathModule=(props)=>{
return(
<div className='flex  justify-left mt-1 mb-1'>
        
        <img alt='property' className=' rounded-sm w-6 m-1 ' src={BedroomIcon}></img>
        <span className=' font-thin text-sm text-gray-500'>{props.numberBedrooms}Beds</span>
        <img alt='property' className=' rounded-sm w-6 m-1' src={BathroomIcon}></img>
        <span className=' font-thin text-sm text-gray-500'>{props.numberBaths}Baths</span>
        {props.parking? <img alt='property' className=' rounded-sm w-6 ' src={ParkingIcon}></img>:null}
     
            </div>)

}

