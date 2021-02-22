import React ,{useState} from 'react'
import '../styles/main.css'
import msg from '../Assets/msg.jpg'
import leavemsg from '../Assets/leavemsg.jpg'
import {MessageWindow } from './Popup_ConnectModules'
import { AiFillSecurityScan } from 'react-icons/ai'

const UserCard = React.forwardRef((props, ref) => {

    const[openChat, setOpenChat]=useState(false)
    const[openMessage, setOpenMessage]=useState(false)
  

    return (
        <div ref={ref}  >
          {openMessage?  <MessageWindow handleClick={()=>(setOpenMessage(!openMessage))}/>:null}
        
            <div className=' flex  flex-col bg-white rounded-lg p-2 shadow-xl w-28'>
                <label className='text-xs text-gray-600 font-semibold'>Connect with Agent</label>
                <div className=' bg-green-400 rounded-full p-1 w-2 h-2 float-right'></div>
                <img alt='profile' className=' rounded-full w-24' src={props.profile}></img>
                <p className='text-gray-600 text-xs font-thin hover:underline pt-1 pb-2'>
                    {props.userData.firstName} {props.userData.lastName}
                </p>

                <div className='flex flex-row justify-around '>
                    <img id={props.userData.firstName}className='w-6 h-6 rounded-sm border-2 hover:border-gray-600' alt='msg' src={msg}
                    //onClick={()=>{setOpenChat(!openChat)}} 
                    onClick={(e)=>props.handleChatSidebar(e)} 
                    ></img>
                    <img className='w-6 h-6 rounded-sm border-2 hover:border-gray-600' alt='msg' src={leavemsg}
                   onClick={()=>{setOpenMessage(!openMessage)}}></img>
                </div>
            </div>

        </div>

    )

})

export default UserCard