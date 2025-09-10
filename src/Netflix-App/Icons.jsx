import React, { useState } from "react";

const Icons = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="fixed bottom-1 md:bottom-10 right-1 md:right-3 z-50 flex flex-col items-end">
      {/* Social Icons */}
      {showIcons && (
        <div className="mb-4 flex flex-col gap-2 md:gap-4 items-center bg-gray-200 shadow-lg p-3.5 rounded-lg">
          <a
            href="https://www.instagram.com/iamhimanshuu_0?igsh=MTR6OTdyYmZkbmg3Nw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-8 cursor-pointer hover:scale-110 transition"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-sharma-533b42287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-8 cursor-pointer hover:scale-110 transition"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Himanshuu-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-8 cursor-pointer hover:scale-110 transition bg-black"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
            />
          </a>

        </div>
      )}
      {/* Floating Button */}
      <button
        onClick={() => setShowIcons(!showIcons)}
        className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition "
      >
        💬
      </button>
    </div>
  );
};

export default Icons;
