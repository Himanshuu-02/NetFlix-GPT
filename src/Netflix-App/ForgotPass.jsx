import React from 'react'

const ForgotPass = ({setForgotpass}) => {
  return (
    <div className='absolute right-0 left-0 top-0. bottom-0 px-3.5'>
        <form  
        onSubmit={(e)=>{
        e.preventDefault()
      }}
       className="max-w-[30rem]  p-10 bg-black my-50 mx-auto text-white rounded-lg ">
        <h1 className="py-4 text-4xl font-bold">
           Reset Password
        </h1>
          <input 
            type="email"
            placeholder="Enter your email"
            className="p-4 my-4 w-full bg-gray-700/40 rounded-sm"
          />
           <button  className="p-4 my-6 bg-red-700 w-full rounded-sm font-bold">
           Send Reset link
        </button>
        <h4
              onClick={() => setForgotpass(false)}
              className="font-bold cursor-pointer hover:underline text-center   "
            >
              Back to Sign In
            </h4>

      </form>


    </div>
  )
}

export default ForgotPass