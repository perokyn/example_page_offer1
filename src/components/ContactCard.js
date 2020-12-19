import React from 'react'
import LongButton from '../components/LongButton'




const ContactCard=()=>{







return(


<div className='flex flex-col mt-3 p-3'>

<div className='flex flex-row mb-3 justify-between'>
<div className='flex flex-col'>
<label className='text-sm text-thin text-gray-600'>First Name</label>
<input placeholder=' John' className='border border-2 border-gray-200 ' type='text'></input>
</div>
<div className='flex flex-col'>
<label className='text-sm text-thin text-gray-600 ml-3'>Last Name</label>
<input placeholder=' Smith' type='text' className='border border-2 border-gray-200 '></input>
</div>
</div>

<label className='text-sm text-thin text-gray-600'>Email</label>
<input placeholder=' youremail@mail.com' type='text' className='border border-2 border-gray-200 mb-3'></input>

<label className='text-sm text-thin text-gray-600'>Message</label>
<textarea  placeholder=' Please type in your message'className='border border-2 border-gray-200 mb-3'></textarea>

<LongButton>SEND MESSAGE</LongButton>







</div>





)

}

export default ContactCard