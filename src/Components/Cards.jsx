import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative
         rounded-xl w-full h-full flex items-center justify-center  bg-[#014c43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-[#93bd5c]
           text-[#b0d463] rounded-full border-2 text-sm">&copy;2019-2022 </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative flex items-center justify-center
         rounded-xl w-1/2 h-full bg-[#212020]">
        <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 text-sm border-white
           text-white rounded-full border-2 uppercase">rating5.0 on clutch</button>
        </div>
        <div className="card relative flex items-center justify-center
         rounded-xl w-1/2 h-full bg-[#212020]">
        <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 border-white
           text-white text-sm rounded-full border-2 uppercase">Business bootcamp alumni</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
