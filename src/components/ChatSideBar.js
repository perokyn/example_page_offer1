import React, {useState} from 'react'
import '../styles/main.css'
import {MessageWindow, ChatWindow } from './Popup_ConnectModules'

const ChatSideBar = React.forwardRef((props, ref) => {


    const[visible, setVisible]=useState(false)

console.log("Name data for chat:", props.property.primaryOwner)


return(
<div className=' flex fixed z-40 bottom-0 right-0 bg-gray-800 p-3 mt-3  rounded-t-xl'>

<div>



<div>
<label className='text-md font-bold text-green-300'>Make an Offer</label>
<p className='text-sm font-semibold text-blue-400'>Current property:</p>
</div>
<ChatWindow  firstName={"test"} lastName= {"User"}/> 
</div>

</div> 

)
})

export default ChatSideBar