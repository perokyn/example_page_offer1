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

    const [closed, SetClosed]=useState(false)  ///TO DO solve that chat window can be re-opened!
    const [visible, setVisible]=useState(true)
    const[collapse, setCollapse]=useState(false)
 
    if(visible){
        
        setTimeout(()=>{setVisible(!visible)},3000)
    }
   
//console.log("WIndow height from message chat", props.windowHeight)


    return (
<>
        {!closed && <div className=' mt-3 z-20 flex flex-col items-center  '>





<div className='bg-white p-2 rounded-xl text-center'>

 <div className='bg-gray-300 px-2 border rounded-t-xl'>   

<div className='flex  justify-between items-center text-xs font-semibold'>
<div className=' text-xs font-thin bg-white rounded-lg p-1'>Family House at 55 Broad street Matawan</div>
     <div className=' flex p-1 rounded-xl justify-between'>
      <span className=' text-xl px-1 font-bold hover:bg-gray-300' onClick={()=>{setCollapse(!collapse)}} >-</span>
     <span id={props.firstName} className='hover:bg-gray-300 text-lg px-1' onClick={(e)=>{props.closeChatWindow(e)}}>X</span></div>
     </div>
</div>


<div style={collapse? {display:'none'}:{display:'block'}}>
    <div className='bg-white  p-3 '>
   
    
    <div className='flex  text-xs font-semibold'>Current Offer:<span className='flex  justify-between text-xs text-blue-400 font-thin mb-4'>$650000</span></div>

    </div>

<div className='flex items-end border border-solid 2 bg-gray-200 p-3 h-32 mb-3 overflow-hidden '>
       
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

     <hr className='mt-3 mb-3'/>
    <div className='flex '>
        <input className='border border-solid-2 text-sm text-gray-900 rounded-lg h-8 bg-gray-200'></input>
        <button className=' flex p-2 ml-2 text-white bg-green-400 rounded-lg h-8 items-center' >send</button>


    </div>


</div>
</div>
</div>}
        
        
        </>
    )

}