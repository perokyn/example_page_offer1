import React, { useEffect, useState } from 'react'
import map from '../Assets/map.jpg'
import { Text, Features, NeighbourHoodData } from '../Assets/constants'
import { BedBathModule } from '../components/BedBath_modules'
import ap1 from '../Assets/ap1.jpg'
import ap2 from '../Assets/ap2.jpg'
import ap3 from '../Assets/ap3.jpg'
import ap4 from '../Assets/ap4.jpg'
export const PropertyData = (props) => {





    return (

        <div className='flex  flex-col  mt-1 mb-2 ' >

            <div className=' sm:flex'>

                <div className='sm:w-3/4 py-3 pl-3 bg-white rounded-lg p-2 shadow-xl '>
                    <span className='font-semibold text-gray-500'>{props.data.property.description}</span>
                    <div className='text-sm text-gray-400'>
                        <p>
                            <span className=' '>{props.data.property.address.city}</span>
                            <span> | </span>
                            <span className=' '>{props.data.property.address.state}</span>
                        </p>
                        <p>
                            <span className=' '>{props.data.property.address.addressLine1}</span>

                            <span className=' block font-thin'> SqF {props.data.property.squareFeet}</span>
                            <BedBathModule parking={true} />

                        </p>
                        <Text />

                    </div>
                </div>


                <div className='sm:flex bg-white rounded-lg  mt-2  sm:mt-0 flex justify-centerp-2 shadow-xl sm:ml-3 sm:w-1/4 '>
                    <label className='font-semibold text-gray-500'>Features</label>

                    < Features />
                </div>
            </div>


        </div>

    )
}



export const PropertyLocation = (props) => {





    return (

        <div className='sm:flex'>

            <div className='bg-white rounded-lg p-2 shadow-xl  mt-2 mb-2 sm:mb-0 sm:mt-0 sm:w-1/2'>
                <label className='text-sm font-semibold text-gray-600'>Details</label>
                <NeighbourHoodData />

            </div>

            <div className='sm:flex bg-white rounded-lg p-2 shadow-xl sm:ml-3'>
                <AreaProperties />
                <div className='mt-3'>
                    <label className='text-sm font-semibold text-gray-600'>Map</label>
                    <img className='sm:ml-1' alt='property location' src={map}></img>
                </div>
            </div>

        </div>
    )
}


export const AreaProperties = () => {


    return (
        <div>
            <label className='text-sm font-semibold text-gray-600'>New Homes in the area</label>
            <div className='overflow-auto h-60 sm:w-48 mt-2'>
                <div className='relative p-2'>
                    <img className='sm:w-36' alt='house' src={ap1}></img>
                    <p className='absolute top-0 bg-green-400 p-1 rounded-lg text-xs text-white'>$ 30435</p>
                </div>
                <div className='relative p-2'>
                    <img className='sm:w-36' alt='house' src={ap2}></img>
                    <p className='absolute top-0 bg-green-400 p-1 rounded-lg text-xs text-white'>$ 15000</p>
                </div>
                <div className='relative p-2'>
                    <img className='sm:w-36' alt='house' src={ap3}></img>
                    <p className='absolute top-0 bg-green-400 p-1 rounded-lg text-xs text-white'>$ 43043</p>
                </div>
                <div className='relative p-2'>
                    <img className='sm:w-36' alt='house' src={ap4}></img>
                    <p className='absolute top-0 bg-green-400 p-1 rounded-lg text-xs text-white'>$ 10435</p>
                </div>


            </div>
        </div>





    )

}