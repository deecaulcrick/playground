"use client";
import { motion } from "motion/react";

function Hero() {
  const variant = {
    animate: (custom) => ({
      y: ["0px", "16px"],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: custom * 0.3,
      },
    }),
  };
  return (
    <div className="relative top-[60px] z-10">
      <div className="p-6">
        <div className="flex gap-2  items-start">
          <div className="relative  h-6 w-2 ">
            <motion.div
              className="bg-green-800 size-2 rounded-[50%] absolute z-30"
              custom={0}
              variants={variant}
              animate="animate"
            ></motion.div>
            <motion.div
              className="bg-green-500/70 size-2 rounded-[50%] absolute z-20"
              custom={1}
              variants={variant}
              animate="animate"
            ></motion.div>
            <motion.div
              className="bg-green-300/50 size-2 rounded-[50%] absolute z-10"
              custom={2}
              variants={variant}
              animate="animate"
            ></motion.div>
          </div>
          <p className="mb-3">Check out the menu :&#41; </p>
        </div>
        <h2 className="text-4xl  md:text-6xl leading-12 uppercase font-medium">
          Developer educator, technical evangelist, international confernce
          speaker, technical content strategist, Designer. Developer educator,
          technical evangelist, international confernce speaker, technical
          content strategist, Designer.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
