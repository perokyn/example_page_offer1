import React from 'react'
import '../styles/main.css'
import { Link, useHistory } from "react-router-dom"
import { ShareModule } from './ShareModule'
import { BedBathModule } from './BedBath_modules'
import LongButton from './LongButton'

const PropertyCard = React.forwardRef((props, ref) => {

    const history = useHistory()
    const handleClick = () => {

        history.push(`/property/${props.propertyData.property.id}`)

    }

    return (


        <div ref={ref} className='sm:flex bg-white rounded-lg p-2 shadow-xl ml-2  w-full'>


            <div className=' relative flex flex-col sm:w-2/3'>

                <img style={{ cursor: 'pointer' }} alt='property' className='rounded-sm w-58' src={props.propertyData.property.primaryImageUrl}
                    onClick={handleClick}></img>

                <div className='absolute top-0 left-0 hover:bg-white  rounded-l-none rounded-t-none rounded-b-xl '><ShareModule link={`${window.location.href}/property/${props.propertyData.property.id}`} /></div>
            </div>

            <div className='ml-3 flex flex-col sm:w-1/3'>
                <Link className='text-gray-600 text-lg font-semibold hover:underline ' to={`/property/${props.propertyData.property.id}`}>{props.propertyData.property.propertyType}</Link>
                <article className='text-sm text-gray-400'>
                    <p>
                        <span className=' '>{props.propertyData.property.address.city}</span>
                        <span> | </span>
                        <span className=' '>{props.propertyData.property.address.state}</span>
                    </p>
                    <p>
                        <span className=' '>{props.propertyData.property.address.addressLine1}</span>
                        <span className=' block font-thin'>{props.propertyData.property.description}</span>
                        <span className=' block font-thin'> SqF {props.propertyData.property.squareFeet}</span>
                    </p>
                </article>

                <BedBathModule numberBedrooms={props.propertyData.property.numberBedrooms}
                    numberBaths={props.propertyData.property.numberBaths}
                />

                <p className='text-sm text-blue-400 pt-1 pb-1'>
                    $ <span className=' font-semibold text-blue-400'>{props.propertyData.price}</span>
                </p>
                <LongButton>SUBMIT AN OFFER</LongButton>

            </div>

        </div>



    )

})

export default PropertyCard