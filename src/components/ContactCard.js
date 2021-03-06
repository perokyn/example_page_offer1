import React from 'react'
import LongButton from '../components/LongButton'




const ContactCard=()=>{







return(


<div className='flex flex-col mt-3 p-3'>

<div className='sm:flex mb-3 justify-between'>

<div className='flex flex-col'>
<label htmlFor='firstName'  className='text-sm text-thin text-gray-600'>First Name</label>
<input id= 'firstName' placeholder=' John' className='border border-2 border-gray-200 mr-1' type='text'></input>

</div>

<div className='flex flex-col'>
<label  htmlFor='lastName' className='text-sm text-thin text-gray-600 ml-3'>Last Name</label>
<input  id='lastName' placeholder=' Smith' type='text' className='border border-2 border-gray-200  mr-1'></input>
</div>

</div>

<label  htmlFor='email' className='text-sm text-thin text-gray-600'>Email</label>
<input id='email' placeholder=' youremail@mail.com' type='text' className='border border-2 border-gray-200 mb-3'></input>

<label  htmlFor= 'message' className='text-sm text-thin text-gray-600'>Message</label>
<textarea   id='message' placeholder=' Please type in your message'className='border border-2 border-gray-200 mb-3'></textarea>

<LongButton>SEND MESSAGE</LongButton>







</div>





)

}

export default ContactCard