//Here is the header of main login screen
import React, { use } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const user= useSelector(store=> store.user)   //for profile url
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate("/")
  // Sign-out successful.
}).catch((error) => {
  navigate("/error")
  // An error happened.
});


  }
  return (
    <div className='absolute py-4 px-8 w-full bg-gradient-to-b from-black z-30 flex justify-between' >
        <img
        className='w-48' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"    />

        {/* <div className='flex'>
          <img className='w-18' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="usericon" />
        
            <select  name="user" id="userid">
              <option className=' bg-amber-50' value="userid">SignOut</option>
            </select>

          
        </div> */}
    {user &&    <div className="flex items-center gap-2  px-3 py-2 rounded-lg ">
  {/* User Icon */}
  {/* <img
    className="w-15 h-15 rounded-full border-white"
    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
    alt="usericon"
  /> */}
  {/* new github user icon */}
  <img
    className="w-15 h-15 rounded-full border-white"
    src={user.photoURL}
    alt="usericon"
  />
  {/* Dropdown */}
  <select onClick={handleSignout}
    name="user"
    id="userid"
    className=" text-white text-lg px-2 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer font-bold"
  >
    <option   value="signout">Sign Out</option>
  </select>
</div>}

    </div>
  )
}

export default Header