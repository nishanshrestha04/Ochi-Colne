import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen  pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye opening", "presentations"].map((items, index) => {
          return (
            <div className="masker">
              <div className="w-f flex items-end">
                {index === 1 && (
                  <motion.div
                  initial={{ width: 0 }} // Corrected 'initial' spelling
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="relative w-[9vw] h-[5.6vw] mr-3 rounded-lg -top-[2.1vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]  bg-center bg-cover"
                >
                </motion.div>


                )}
                <h1 className="uppercase  leading-[6.5vw] text-[9vw] tracking font-founder text-black font-light">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-200 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none text-black">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5 ">
          <div className="px-5 py-2 border-[1px] text-black border-zinc-700 font-light text-md uppercase rounded-full hover:bg-slate-900 hover:text-zinc-100 hover:text-semibold transition ease-in duration-500">
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] text-black border-zinc-700 flex justify-center items-center rounded-full hover:bg-slate-900 hover:text-zinc-100 hover:text-semibold transition ease-in duration-500">
            <sapn className="rotate-[45deg]">
              <FaArrowUpLong />
            </sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
