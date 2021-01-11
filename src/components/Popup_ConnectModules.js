import React from 'react'
import ContactCard from './ContactCard'



export const MessageWindow = (props)=>{



return(

    

<div className=' absolute inset-x-1/2 mt-20 z-20 flex flex-col items-center  max-w-sm p-3 '>

<div className='  bg-white p-10 rounded-xl text-center'>


    Message
    <ContactCard/>

    </div>
    </div>
)

}



export const ChatWindow = (props)=>{



    return(
<div className=' absolute inset-x-1/2 mt-20 z-20 flex flex-col items-center  max-w-sm p-3 '>

<div className='  bg-white p-10 rounded-xl text-center'>


    Chat

    </div>
    </div>
    )
    
    }