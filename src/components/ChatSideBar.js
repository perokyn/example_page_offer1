import React, {useState,useEffect} from 'react'
import '../styles/main.css'
import {MessageWindow, ChatWindow } from './Popup_ConnectModules'
import Logo from '../Assets/logo.png'
import Chat_DataStore from "../stores/chatStore";

const ChatSideBar = React.forwardRef((props, ref) => {

    const[chatWindows, setChatWIndows]=useState(props.chatWindows)

    useEffect(()=>{
        Chat_DataStore.addChangeListener(onChange);

        
        return () => Chat_DataStore.removeChangeListener(onChange);


    })

    function onChange(){

setChatWIndows(Chat_DataStore.getOpenWindows())
//console.log("CHAT CHANGE from ChatSideBar: ", chatWindows)
    }
    
    console.log("CHATWINARRAY: ", chatWindows)

    const[visible, setVisible]=useState(false)

//console.log("Name data for chat:", props.property)




return(
<div id='chatSideBar' className=' flex fixed items-end z-40 bottom-0 right-0 bg-gray-100 p-3 mt-3  rounded-t-xl'>

<div>
 


<div className='sm:flex items-end'>
<img alt='logo' src={Logo} className='h-10 w-10'></img>

<p className='text-sm font-thin text-gray-400'>GetADeal.com</p>
</div>

<div className='flex'>
{
chatWindows &&
chatWindows.map((chat, key)=>(

    <div key={key} >
        
        <ChatWindow  closeChatWindow={props.closeChatWindow} firstName={chat} lastName= {"User"}/>
        </div>
))


}

</div>
{/*<ChatWindow  firstName={"test"} lastName= {"User"}/> */}

</div>

</div> 

)
})

export default ChatSideBar