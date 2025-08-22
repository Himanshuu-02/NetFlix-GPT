//Here is the header of main login screen
import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { addNowPlayingMovies, addTrailerVideo } from '../utils/moviesSlice';


const Header = () => {
  const user= useSelector(store=> store.user)   //for profile url
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const handleSignout=()=>{
    signOut(auth).then(() => {

       dispatch(addNowPlayingMovies(null));      //new
    dispatch(addTrailerVideo(null));   //new
    
  // Sign-out successful.
}).catch((error) => {
  navigate("/error")
  // An error happened.
});

  


  }

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
      navigate("/")
      }
    });
    //Unsuscribe when component mount
    return()=>{
      unsubscribe()
    }
  }, []);
  return (
    <div className='absolute py-4 px-8 w-full bg-gradient-to-b from-black z-30 flex justify-between sm:mx-[-12px]  ' >
        <img
        className='w-48' src={LOGO} alt="logo"    />

        
    {user &&    <div className="flex items-center gap-2  px-3 py-2 rounded-lg ">
  {/* User Icon */}
  {/* <img
    className="w-15 h-15 rounded-full border-white"
    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
    alt="usericon"
  /> */}
  {/* new github user icon */}
  <img
    className="w-13 h-13 rounded-full border-white"
    src={user.photoURL}
    alt="usericon"
  />
  {/* Dropdown */}
  <select onClick={handleSignout}
    name="user"
    id="userid"
    className=" text-white text-lg px-2 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer font-bold"

  >
    <option  value="signout">{(user.displayName)}</option>
    {/* <option value="signout">Sign Out</option> */}
  </select>
</div>}

    </div>
  )
}

export default Header