import React, { useEffect, useState } from 'react'
import postStore from "../stores/postStore";
import { getAproperty } from "../actions/postActions";
import UserCard from '../components/UserCard'
import user from '../Assets/user.jpg'
import { AreaProperties, PropertyData, PropertyLocation } from '../components/PropertyDetailsModule'
import { Text } from '../Assets/constants'
import LongButton from '../components/LongButton'
import ContactCard from '../components/ContactCard'
import sign from '../Assets/sign.jpg'
import UserInfoCard from '../components/UserInfoCard'

const PropertyPage = ({ match }) => {
    const id = match.params.id
    const [content, setContent] = useState('')



    useEffect(() => {

        postStore.addChangeListener(onChange)

        getAproperty(id)


        return () => postStore.removeChangeListener(onChange); 

    }, [])


    

    function onChange() {
        setContent(postStore.getAproperty(id)); 
    }


    return (


        <div>



            {content ?

                <div>


                    <img alt='property' className=' rounded-sm w-full' src={content.property.primaryImageUrl}></img>

                    <div>
                        <PropertyData data={content} />
                        <label className='text-lg font-semibold text-gray-500'> Location</label>
                        <PropertyLocation />

                    </div>
                    <label className='text-lg font-semibold text-gray-500'> Get in touch</label>

                    <div className='flex flex-row  '>
                        <UserInfoCard content={content} />

                        <div className='bg-white rounded-lg p-4 shadow-xl ml-3 w-full'>
                            <label className=' font-semibold text-gray-600'>Greetings!</label>
                            <p>My name is <span>{content.property.primaryOwner.user.firstName}</span>
                                <span> </span> <span>{content.property.primaryOwner.user.lastName},</span></p>
                            <br></br>
                            <Text />
                            <div className='bg-white rounded-lg p-3 shadow-xl mt-3 w-full'>
                                <label className='text-sm font-semibold text-gray-600 p-2'>CONTACT FORM</label>
                                <ContactCard />
                            </div>
                        </div>
                    </div>
                </div>


                : <div>No data avaliable at this time</div>}
        </div>
    )


}

export default PropertyPage