import React from "react";

function Story({ img, username }) {
  return (
    <div className="">
      <img className="w-14 h-14 rounded-full p-[2px] border-red-500 border-2 object-contain cursor-pointer hover:scale-90 transition ease-in-out" src={img} alt="" />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
