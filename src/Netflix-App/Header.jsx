//Here is the header of main login screen
import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addNowPlayingMovies, addTrailerVideo } from "../utils/moviesSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user); //for profile url
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(addNowPlayingMovies(null)); //new
        dispatch(addTrailerVideo(null)); //new

        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsuscribe when component mount
    return () => {
      unsubscribe();
    };
  }, []);
  //gpt search handler

  const gptSearchHandler = () => {
    dispatch(toggleGptSearchView());
  };

  //language selector handler
  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute py-2 px-8  bg-gradient-to-b from-black z-30  flex flex-col md:flex-row justify-between sm:mx-[-12px] w-screen ">
      <img className="w-48 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && ( 
        <div className="flex items-center gap-2  px-3 py-2  rounded-lg ">
          {/* User Icon */}
          {/* <img
    className="w-15 h-15 rounded-full border-white"
    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
    alt="usericon"
  /> */}
          {/* new github user icon */}

          {showGptSearch && (
            <select
              name="lang"
              className="p-2 bg-gray-900 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="m-2 p-2 md:m-4 md:p-2  rounded-lg bg-red-700 text-white font-bold cursor-grab hover:bg-red-500 ml-2"
            onClick={gptSearchHandler}
          >
            {showGptSearch ? "Home ⌂" : " GPT Search 🔍"}
          </button>

          <img
            className="w-10 h-10 rounded-full border-white"
            src={user.photoURL}
            alt="usericon"
          />
          {/* Dropdown */}
          <select
            onClick={(e)=>{
              if(e.target.value==="signout"){
                handleSignout();
              }
            }}
            name="user"
            id="userid"
            className=" text-white text-lg px-1 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer font-bold bg-black"
          >
            {/* <option value="signout">{user.displayName}</option> */}
            
            <option value="">{user.displayName}</option>
            <option value="settings">Settings</option>
            <option value="help">Help</option>
            <option value="signout">Sign Out</option>
            {/* <option value="signout">Sign Out</option> */}
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
