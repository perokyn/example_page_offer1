import React, { useState } from 'react'



const Login = () => {

    const [registration, setRegistration] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const Register = () => {
     
        setRegistration(!registration)

    }


    const onSubmit = e => {

        e.preventDefault()
        if (password === '' || email === '') {
            alert('Please fill out all fileds ')
            return
        }



        const userData = {
            username,
            email,
            password
        }





    }





    return (




        <div className=' absolute inset-x-1/2 mt-20 z-20 flex flex-col items-center  max-w-sm p-3 '>





            <div className='  bg-white p-10 rounded-xl text-center'>

                <label className='text-gray-800 font-semibold text-lg'> {registration ? <span>Register</span> : <span>Login</span>}</label>
                {registration ? <p className='m-3'>
                    <label className='text-gray-700 font-semibold text-sm'> User Name</label>
                    <input placeholder=' Member' className='border border-2 border-gray-200 ' type='text' value={username} onChange={e => setUsername(e.target.value)}></input>

                </p>
                    : null}

                <p className='m-3'>
                    <label className='text-gray-700 font-semibold text-sm'> {registration ? 'Email' : 'User Name / Email'}</label>
                    <input placeholder=' youremail@mail.com' type='text' className='border border-2 border-gray-200 ' type='text' value={email} onChange={e => setEmail(e.target.value)}></input>

                </p>
                <p className='ml-3 mb-3'>
                    <label className='text-gray-700 font-semibold text-sm'> Password</label>
                    <input placeholder=' ******' type='text' className='border border-2 border-gray-200 ' type='text' value={password} onChange={e => setPassword(e.target.value)}></input>

                </p>

                <p>

                    <button className='relative w-full inline-flex flex-wrap  items-center  justify-center
       px-5 py-2 border border-gray-300 
        text-sm leading-5 font-semibold rounded-md text-gray-700 bg-green-400 
        hover:text-gray-500 focus:outline-none focus:shadow-outline-green 
        focus:border-blue-400 active:bg-gray-50 active:text-gray-800' type='submit'
                        onClick={(e) => { onSubmit(e) }}>OK</button>

                </p>

                <p className='mt-3 mb-8' onClick={() => Register()}>{registration ? <span className=' text-xs text-gray-800'>Allready a Member? <span className='text-xs text-blue-400 font-semibold hover:underline'>LOGIN</span></span> : <span className=' text-xs text-gray-800'>Or<span className='text-xs text-blue-400 font-semibold hover:underline'> Register</span></span>}</p>
            </div>

        </div>

    )

}

export default Login
