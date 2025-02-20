"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import projects from "@/data/projects";
import { easeInOut } from "motion";
function Projects() {
  const variant = {
    animate: (custom) => ({
      //   x: ["0px", "26px"],
      x: 26,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "backOut",
        delay: custom * 0.3,
      },
    }),
  };
  const [isHovered, setIsHovered] = useState(false);

  // Track cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Update cursor position
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section className="px-6 md:px-12 ">
      <div className=" py-8 w-full flex gap-4 overflow-scroll">
        {projects.map((project) => (
          <Link href={`${project.url}`}>
            <motion.div
              layout
              whileHover={{
                y: -25,
                zIndex: 0,
              }}
              transition={{ ease: easeInOut }}
              style={{ backgroundColor: project.color }}
              className={`w-[80vw] min-h-[450px] md:w-[400px] md:h-[500px] rounded-3xl p-8 md:p-10 flex flex-col flex-none items-center justify-center card cursor-pointer`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img src={`/images/${project.image}`} />
              <h3 className="w-full text-xl tracking-tighter">
                {project.name}
              </h3>
              <div className="w-full flex items-start gap-2 pt-4 flex-wrap">
                {project.tags.map((tag, index) => (
                  <Pill>{tag}</Pill>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="lg:hidden flex justify-end items-center gap-4 ">
        <div className="relative  h-10 w-8  flex items-center">
          <motion.div
            className="bg-black size-2 rounded-[50%] absolute z-30"
            custom={0}
            variants={variant}
            animate="animate"
          ></motion.div>
          <motion.div
            className="bg-black/50 size-2 rounded-[50%] absolute z-20"
            custom={1}
            variants={variant}
            animate="animate"
          ></motion.div>
          <motion.div
            className="bg-black/20 size-2 rounded-[50%] absolute z-10"
            custom={2}
            variants={variant}
            animate="animate"
          ></motion.div>
        </div>
        <div className="">Swipe left :)</div>
      </div>
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 bg-white/50 rounded-full pointer-events-none text-center flex items-center justify-center text-sm leading-none"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          View <br />
          Project
        </motion.div>
      )}
    </section>
  );
}

export default Projects;

const Pill = ({ children }) => {
  return (
    <div className="text-xs border border-black rounded-3xl px-4 py-1 w-fit">
      {children}
    </div>
  );
};
