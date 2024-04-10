import React from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap/gsap-core";

const Features = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: 0 });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full  px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-7xl tracking-tight text-black">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardCointainer relative  w-1/2 h-[75vh] "
          >
            <h1
              className="absolute flex overflow-hidden left-full top-1/2  font-founder
            -translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] text-8xl leading-none tracking-wide"
            >
              {"FYDE".split("").map((item, index) => (
                <motion.sapn
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.054,
                  }}
                >
                  {item}
                </motion.sapn>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardCointainer relative  w-1/2 h-[75vh] "
          >
            <h1
              className="absolute flex overflow-hidden -left-2 top-1/2 font-founder
            -translate-x-1/2 -translate-y-1/2 text-[#cdea68] z-[9] text-8xl leading-none tracking-wide"
            >
              {"VISE".split("").map((item, index) => (
                <motion.sapn
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.054,
                  }}
                >
                  {item}
                </motion.sapn>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
