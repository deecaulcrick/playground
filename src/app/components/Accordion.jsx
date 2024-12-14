"use client";
import { motion } from "motion/react";
import { useState } from "react";

function Accordion({ question, answer, isOpen, onClick, id }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg mb-4 overflow-hidden"
      layout
      transition={{ ease: "backOut" }}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg">{question}</h3>
        <motion.button
          className="bg-gray-200/50 rounded-[50%] size-10 cursor-pointer text-lg font-medium"
          onClick={() => onClick(id)}
        >
          +
        </motion.button>
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
}

export default Accordion;
