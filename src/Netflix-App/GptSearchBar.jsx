import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
     const langKey= useSelector(store=> store.config.lang)
  return (
   
    
    <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 bg-black/80 grid grid-cols-12 ">
            <input type="text" className="p-4 m-4 bg-white col-span-9 rounded-r-lg" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-l-lg col-span-3 cursor-pointer hover:bg-red-900 text-bold text-lg">{lang[langKey].search} 🔍</button>
        </form>
    </div>
  );
};

export default GptSearchBar;
