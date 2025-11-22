import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()


        
        handleLogin(email,password)

        setEmail("");
        setPassword("");
    }



    return (
        <div className='h-screen w-screen bg-gray-900 flex items-center justify-center '>
            <form className=' border-2 border-orange-500 rounded-3xl p-20 flex flex-col items-center justify-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM58raagdwn4RiIbe8q7gGtZizs8sio1aBwg&s)] bg-contain' onSubmit={(e) => {
                submitHandler(e)
            }}>

                <input type="email" value={email} placeholder='Email' className='border-2 border-orange-500 px-3 py-3 rounded-full outline-none mb-10 text-2xl placeholder:text-gray-400 text-white backdrop-blur-xs' onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="password" value={password} placeholder='Password' className='border-2 border-orange-500 px-3 py-3 rounded-full outline-none mb-15 text-2xl placeholder:text-gray-400  text-white backdrop-blur-xs'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <button className='bg-orange-500 text-xl text-black font-bold px-30 py-4 rounded-full active:scale-95 cursor-pointer'>LOGIN</button>

            </form>
        </div>
    )
}

export default Login