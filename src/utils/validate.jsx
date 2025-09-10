 export const checkValidData=(email,password)=>{
    const isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid= /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)
    if(!isEmailValid) return "Please enter a valid email"
    if(!isPassValid) return "Please enter a  valid password"

    return(null)
}

// export const checkValidData = (email, password, name = "") => {
//   const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//   const isPassValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

//   // validate name only if it's provided (sign up mode)
//   if (name && !/^[a-zA-Z\s\-\']+$/.test(name)) {
//     return "Please enter a valid name";
//   }
//   if (!isEmailValid) return "Please enter a valid email";
//   if (!isPassValid) return "Please enter a valid password";

//   return null;
// };
