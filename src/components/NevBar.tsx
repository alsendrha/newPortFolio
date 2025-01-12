import React from "react";

const NevBar = () => {
  return (
    <div className="w-full h-[60px] bg-black text-white flex items-center justify-center fixed">
      <div className="w-full flex justify-between items-center max-w-[1170px] px-2">
        <div>
          <p className="font-extrabold">MIN YOUNG</p>
        </div>
        <ul className="flex gap-8">
          <li>ABOUT</li>
          <li>PROJECT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default NevBar;
