// import React from 'react'

// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className='absolute top-0 bottom-0 left-0 right-0'>
//        <div className='w-full aspect-video pt-[20%] px-24   text-white bg-gradient-to-r b  from-black'>
//         <h1 className='font-bold text-5xl '>{title}</h1>
//       <p className="hidden sm:block text-lg py-6 max-w-[90%] sm:max-w-[60%] md:max-w-[50%]">
//   {overview}
// </p>


//         <div className='gap-1'>
//             <button className='p-4 max-w-35 border bg-white  hover:bg-white/35  text-xl cursor-grab rounded-t-lg text-black'>▶️ Play</button>
//             <button className='p-4 border bg-gray-700/20 text-xl cursor-grab mx-8  rounded-t-lg hover:bg-gray-500'>ℹ️ More Info</button>
//         </div>
//     </div>

//     </div>
   
//   )
// }

// export default VideoTitle


import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" relative gap-1 ">
      <div className="w-full absolute aspect-video pt-[21%] max-sm:pt-[116%] px-6 sm:px-12 md:px-24 text-white  bg-gradient-to-r from-black -mt-[63px] ">
        {/* Title */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl mb-4">
          {title}
        </h1>
        
        {/* Overview (hidden on very small screens) */}
          <p className="hidden sm:block text-md py-6 max-w-[70%] sm:max-w-[50%] md:max-w-[30%]">
   {overview}
 </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl font-semibold bg-white text-black rounded-lg hover:bg-white/80 transition cursor-grab">
            ▶️ Play
          </button>
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-lg md:text-xl font-semibold bg-gray-700/20 text-white rounded-lg hover:bg-gray-500 transition cursor-grab">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
