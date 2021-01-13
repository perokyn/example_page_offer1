
import React from 'react'


const LongButton =React.forwardRef((props, ref)=>{



return(
<button ref={ref}
className='bg-blue-400 hover:bg-blue-500 px-3 py-1 lead-5 text-xs md:text-sm text-white font-thin w-full'>
    {props.children}
</button>
)

})

export default LongButton
