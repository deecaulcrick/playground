"use client";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import FlipLink from "@/app/components/FlipLink";
import { easeInOut } from "motion";
function Header() {
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
  const { scrollY } = useScroll();
  const [hasBorder, setHasBorder] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasBorder(latest > 10); // Add border when scrolled at least 10px
  });
  return (
    <motion.div
      className="fixed  w-full top-0 z-99 bg-white"
      style={{ zIndex: 99 }}
      animate={{
        borderBottom: hasBorder ? "1px solid #000" : "1px solid transparent",
        transition: { ease: easeInOut },
      }}
    >
      <div className=" flex justify-between items-center px-6 md:px-12 py-2 bg-white h-[60px] text-md w-full ">
        <div className="flex gap-2">
          <div className="relative  h-4 w-2 ">
            <motion.div
              className="bg-[#cdd629] size-2 rounded-[50%] absolute z-30"
              custom={0}
              variants={variant}
              animate="animate"
            ></motion.div>
            <motion.div
              className="bg-[#cdd629]/70 size-2 rounded-[50%] absolute z-20"
              custom={1}
              variants={variant}
              animate="animate"
            ></motion.div>
            <motion.div
              className="bg-[#cdd629]/50 size-2 rounded-[50%] absolute z-10"
              custom={2}
              variants={variant}
              animate="animate"
            ></motion.div>
          </div>
          <div>deecaulcrick.com</div>
        </div>
        <div>
          <FlipLink href="mailto:deecaulcrick@gmail.com">Email me :)</FlipLink>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
