import React, {useState} from 'react'
import '../styles/main.css'

const ChatSideBar = React.forwardRef((props, ref) => {


    const[visible, setVisible]=useState(false)


return(
<div className=' fixed z-40 bottom-0 right-0 bg-gray-500 p-3 mt-3 '>

<div>

<div>
<label className='text-3xl font-bold text-green-300'>Chat Sidebar</label>
{props.children}
</div>

</div>

</div> 

)
})

export default ChatSideBar