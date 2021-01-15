import React ,{useState}from 'react'
import ContactCard from './ContactCard'
import { AiOutlineClose } from "react-icons/ai";


export const MessageWindow = (props) => {



    return (



        <div className=' absolute inset-x-1/2 mt-20 z-20 flex flex-col items-center  max-w-sm p-3 '>

            <div className='  bg-white p-10 rounded-xl text-center'>
                <div className='flex justify-end'><span className='hover:bg-gray-300' onClick={props.handleClick}><AiOutlineClose /></span></div>

    Message
    <ContactCard />

            </div>
        </div>
    )

}



export const ChatWindow = (props) => {

    const[visible, setVisible]=useState(true)
    
 
    if(visible){
        
        setTimeout(()=>{setVisible(!visible)},3000)
    }
  

    return (
        <div className=' absolute inset-x-1/2 mt-20 z-20 flex flex-col items-center  max-w-sm p-3 '>





            <div className='  bg-white p-8 rounded-xl text-center'>
                <div className='flex justify-start text-xs font-semibold'>GetADeal.com</div>
            <div className='flex justify-end mb-3'><span className='hover:bg-gray-300' onClick={props.handleClick}><AiOutlineClose /></span></div>

           <div className='flex items-end border border-solid 2 bg-gray-100 p-3 h-32 mb-3 overflow-hidden'>
                   
           {visible?
                    <div className='flex items-baseline text-sm text-gray-600'>
                        <span className='font-semibold text-xs text-gray-600'>{props.firstName}&#8287; </span>
                        <span className='font-semibold text-xs text-gray-600'> {props.lastName} :&#8287;</span>
                        <div className="animate-pulse animate-bounce m-1  bg-gray-400 w-2 h-2 rounded-full" />
                        <div className="animate-pulse animate-bounce2  bg-gray-400 w-2 h-2 rounded-full" />
                        <div className="animate-pulse animate-bounce m-1 bg-gray-400 w-2 h-2 rounded-full" />
                    </div>
                     :<div className=' flex text-sm text-gray-900 '><p className='bg-blue-300 p-1 rounded-lg justify-start leading-tight'> <span className='font-semibold text-xs text-gray-600'>{props.firstName}&#8287; </span>
                     <span className='font-semibold text-xs text-gray-600'> {props.lastName} &#8287;</span></p> How can I help you?</div>}             
                </div>

                 <hr className='m-3'/>
                <div className='flex '>
                    <input className='border border-solid-2 text-sm text-gray-900 rounded-lg h-8'></input>
                    <button className=' flex p-2 ml-2 text-white bg-green-400 rounded-lg h-8 items-center' >send</button>


                </div>


            </div>
        </div>
    )

}