import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import ForgotPass from "./ForgotPass";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { avatarURL, BgImg } from "../utils/constants";

const Login = () => {
  // const navigate= useNavigate()
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [forgotpass, setForgotpass] = useState(false);
  const dispatch = useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  // signin/signup page handler

  const signupHandler = () => {
    setSignIn(!isSignIn);
  };

  //form validation
  const buttonHandler = () => {
    // console.log(email.current.value)
    // console.log(email.current.value)
    // console.log(name.current.value)
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const validation = checkValidData(emailValue, passwordValue);
    setErrorMessage(validation);
    if (validation) return;

    //signup and Sign in logic for authentication
    if (!isSignIn) {
      //here i write signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatarURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // navigate("/browse")
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // navigate("/browse")
          //   console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorMessage + errorCode)
          // ..
        });
      //////////////////////////////////////
    } else {
      //here i write signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorMessage + errorCode)
        });
    }
  };

  //forgot password handler
  const passHandler = () => {
    setForgotpass(true);
  };
  return (
    <div>
      <Header />
      <div className="min-w-full h-full object-cover absolute ">
        <img
          src={BgImg}
          alt="Bg-img"
          width="100%"
          height="90vh"
          className="min-h-[100vh] mx-w-[100%]"
        />
      </div>
      {!forgotpass ? (
        //Normal sign In form
        <div className="absolute  right-0 left-0 top-0 bottom-0 px-3.5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="max-w-[30rem]  p-10 bg-black/80 my-59 mx-auto text-white rounded-lg "
          >
            <h1 className="py-5 text-4xl font-bold">
              {isSignIn ? "Sign In" : "Sign up"}
            </h1>
            {/* when use is not registered */}
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 my-4 w-full bg-gray-700/40 rounded-sm"
              />
            )}
            {/* When user is registerd */}
            <input
              ref={email}
              type="text"
              placeholder={
                isSignIn ? "Email or mobile number..." : "Email address.."
              }
              className="p-4 my-4 w-full bg-gray-700/40 rounded-sm"
            />
            <input
              ref={password}
              type="password"
              placeholder={isSignIn ? "Password" : "Generate Password.."}
              className="p-4 my-4 w-full bg-gray-700/40 rounded-sm"
            />
            <p className="text-red-700 font-bold ">{errorMessage}</p>

            <button
              onClick={buttonHandler}
              className="p-4 my-6 bg-red-700 w-full rounded-sm font-bold cursor-pointer hover:bg-red-500"
            >
              {isSignIn ? "Sign In" : "Get Started"}
            </button>
            {isSignIn && (
              <span className="underline" onClick={passHandler}>
                <h4 className=" cursor-pointer text-center mb-3">
                  Forgot password
                </h4>
              </span>
            )}

            {/* Remember checkbox */}
            {isSignIn && (
              <div className="flex items-center justify-between text-sm my-2">
                <label className="flex items-center space-x-2 mb-2 mt-2">
                  <input type="checkbox" className="w-5 h-5 accent-red-600" />
                  <span className="font-bold">Remember me</span>
                </label>
              </div>
            )}
            <h4 onClick={signupHandler}>
              <span className="text-gray-400">
                {isSignIn ? " New to Netflix?" : "Already registered."}
              </span>
              <span className="font-bold cursor-pointer ">
                {isSignIn ? "Sign up now" : "Sign In"}
              </span>
            </h4>
          </form>
        </div>
      ) : (
        <ForgotPass setForgotpass={setForgotpass} />
      )}
    </div>
  );
};

export default Login;
