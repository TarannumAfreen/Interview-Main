import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value,
        })
        // console.log(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(loginData)
        try {
          const { data } = await axios.post("http://localhost:5001/auth/signin", loginData);
          console.log(data);
        } catch (error) {
          console.error("There was an error!", error);
        }
     
    }

  return (
    <>
   <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
    <form onSubmit={handleSubmit}>
      
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">Email</label>
        <input onChange={handleChange} type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700 font-bold mb-2">Password</label>
        <input onChange={handleChange} type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></input>
      </div>
     
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          No account?
          <Link to={'/signup'}>
          <span className=" font-bold text-blue-500 hover:text-blue-700">SignUp</span>
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Login 
//
//Fire Base Cloud Messaging Admin package 