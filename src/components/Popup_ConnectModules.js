import React, { useState, useEffect } from 'react'
import ContactCard from './ContactCard'
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import agent from '../Assets/user.jpg'
import Chat_DataStore from "../stores/chatStore";

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

    const [closed, SetClosed] = useState(false)  ///TO DO solve that chat window can be re-opened!
    const[locallyClosed, setLocallyClosed]=useState(false)
    const [visible, setVisible] = useState(true)
    const [collapse, setCollapse] = useState(false)



    useEffect(()=>{

        Chat_DataStore.addChangeListener(onChange);
    
        
    
    })
    
    
    const onChange=()=>{
        const windows=Chat_DataStore.getOpenWindows()
       
    if(windows.includes(props.firstName)

    ){ 

      SetClosed(!closed)     }
     }
    




    if (visible) {

        setTimeout(() => { setVisible(!visible) }, 3000)
    }

    //console.log("WIndow height from message chat", props.windowHeight)


    const handleCloseWindow =(e)=>{
        props.closeChatWindow(e)
         SetClosed(!closed)
         setLocallyClosed(true)
        
     }

     

    return (
        <>
            {!closed && <div className=' mt-3 z-20 flex flex-col items-center  '>





                <div className='bg-white p-2 rounded-xl text-center'>

                    <div className='bg-gray-800 px-2 border rounded-t-xl'>

                        <div className=' flex items-center  justify-between text-xs font-semibold'>

                            <div className=' flex justify-self-start font-semibold text-xs text-gray-400'>
                                <span >{props.firstName}&#8287; </span>
                                <span > {props.lastName} &#8287;</span>
                            </div>

                            <div className=' flex p-1  justify-between text-blue-400  items-center text-lg'>
                                <span className=' text-xl px-1 font-bold hover:bg-gray-600 rounded-full w-6 h-6 ' onClick={() => { setCollapse(!collapse) }} >-</span>
                                <span id={props.firstName} className='hover:bg-gray-600  px-1 rounded-full w-6 h-6' onClick={(e) => { handleCloseWindow(e) }}>X</span></div>
                        </div>
                          <hr/>
                        <div className=' text-xs font-thin border-solid-1 rounded-lg p-1 text-gray-200'>Family House at 55 Broad street Matawan</div>

                    </div>


                    <div style={collapse ? { display: 'none' } : { display: 'block' }}>
                        
                        <div className='flex items-end border border-solid 2  p-3 h-32 mb-3 overflow-hidden '>

                            {visible ?
                                <div className='flex  items-end justify-between'>

                                    <img alt='agent' src={agent} className='w-8 h-8 rounded-full mr-2'></img>

                                    <div className='flex items-baseline text-sm text-gray-600 p-2'>

                                        <div className="animate-pulse animate-bounce m-1  bg-gray-400 w-2 h-2 rounded-full" />
                                        <div className="animate-pulse animate-bounce2  bg-gray-400 w-2 h-2 rounded-full" />
                                        <div className="animate-pulse animate-bounce m-1 bg-gray-400 w-2 h-2 rounded-full" />

                                    </div>
                                </div>
                                :
                                <div className=' flex text-sm text-gray-900 items-end justify-between '>
                                    <img alt='agent' src={agent} className='w-8 h-8 rounded-full mr-2'></img>

                                    <p className='bg-blue-300 rounded-xl text-sm text-gray-800 leading-5 p-2'>How can I help you? </p>

                                </div>
                            }
                        </div>

                        <hr className='mt-3 mb-3' />
                        <div className='flex justify-between'>
                            <input type='text' placeholder='Aa' 
                            className=' inline-flex items-center px-4 py-2  text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 
                            focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
                             rounded-xl h-8 bg-gray-200'></input>
                            <button className=' flex justify-center items-center ml-1 pl-1 text-blue-400 text-2xl h-8 w-8 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-400 rounded-full  hover:bg-gray-200' ><AiOutlineSend/></button>


                        </div>


                    </div>
                </div>
            </div>}


        </>
    )

}