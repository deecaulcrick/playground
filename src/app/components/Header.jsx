"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { scaleY: 0 }, // Offscreen
    visible: {
      scaleY: 1,
      originY: "top", // Fully on-screen
      transition: {
        ease: "easeInOut",
        when: "beforeChildren", // Ensures inner items animate after the menu
      },
    },
    exit: {
      scaleY: 0, // Offscreen again
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        // when: "afterChildren", // Ensures inner items exit first
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scaleY: 0 }, // Start below with 0 opacity
    visible: (custom) => ({
      opacity: 1,
      scaleY: 1,
      originY: "top",
      transition: { duration: 0.3, delay: custom * 0.3 },
    }), // Fade in and slide up
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: { duration: 0.1 },
    }, // Fade out and slide down
  };

  return (
    <div className="bg-gray-100">
      <div className=" w-full h-full">
        <div className=" flex justify-between items-center px-6 md:px-12 py-2 bg-gray-100 border-b border-b-black h-[60px] text-sm w-full ">
          <div>DEE CAULCRICK</div>
          <div onClick={handleClick}>
            <button>{isOpen ? "CLOSE" : "MENU"}</button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu"
              className="w-screen h-screen bg-black/50 md:px-4 md:py-6 flex justify-end absolute top-[60px] z-9999"
            >
              <motion.div
                className="bg-gray-100 rounded-sm w-screen h-fit px-6 py-8 md:w-[50vw] md:p-8 lg:w-[30vw] relative "
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="flex flex-col gap-2 text-4xl"
                  custom={0}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p>Home</p>
                  <p>About</p>
                  <p>Speaking</p>
                  <p>Projects</p>
                  <p>Contact</p>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-3 mt-12"
                  custom={1}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p>Youtube</p>
                  <p>LinkedIn</p>
                  <p>Twitter</p>
                </motion.div>
                <motion.div
                  className="mt-7"
                  custom={2}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className="text-2xl">Get in touch</h3>
                  <a href="#" className="underline">
                    hello@deecaulcrick.com
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
