"use client";
import Accordion from "@/app/components/Accordion";
import { LayoutGroup, motion } from "motion/react";
import { Noto_Sans_Tamil_Supplement } from "next/font/google";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We specialize in branding, including logo design, brand identity creation, web design, and packaging design. We also offer brand strategy consultations to help you stand out in your industry.",
  },
  {
    id: 2,
    question: "What is your process for branding projects?",
    answer:
      "Our process involves discovery, strategy, design, and delivery. We begin with an in-depth consultation to understand your brand, followed by mood board creation, initial design concepts, and revisions. The final step is delivering all assets in various formats.",
  },
  {
    id: 3,
    question: "How long does a typical branding project take?",
    answer:
      "Most branding projects take 4–6 weeks from start to finish, depending on the complexity of the work and the responsiveness of feedback.",
  },
  {
    id: 4,
    question: "Do you offer custom packages?",
    answer:
      "Yes, we understand that every business is unique. We can create custom packages tailored to your specific needs and goals.",
  },
  {
    id: 5,
    question: "Can I request a specific style for my branding?",
    answer:
      "Absolutely! We love working with clients to achieve their vision. During the discovery phase, we’ll gather inspiration and references to ensure the final design matches your desired style.",
  },
  {
    id: 6,
    question: "Do you offer website design as part of your services?",
    answer:
      "Yes, we offer website design as part of our branding packages. Whether you need a custom WordPress site or a simple portfolio page, we can help.",
  },
  {
    id: 7,
    question: "What industries do you work with?",
    answer:
      "We work with a variety of industries, including lifestyle brands, startups, wellness businesses, creatives, and small business owners. We're open to collaborating with businesses from other industries as well.",
  },
  {
    id: 8,
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope of the project. Branding packages start at $2,500, but we recommend scheduling a consultation so we can provide a custom quote tailored to your needs.",
  },
];
const column1 = questions.slice(0, 4);
const column2 = questions.slice(4, 8);

function Questions() {
  const handleToggle = (id) => {
    setOpenAcc((prev) => (prev === id ? null : id));
  };
  const [openAcc, setOpenAcc] = useState(null);
  return (
    <section className="min-h-screen p-6 md:p-12 bg-gray-100">
      <div className="">
        <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:items-center">
          <h1 className=" text-4xl md:text-6xl tracking-tighter">
            Got any questions? <br />
            <span className="text-black/60">We've got answers.</span>
          </h1>
          {/* <button className="group tracking-tight overflow-hidden font-medium text-sm px-6 py-3 rounded-3xl border border-gray/30 shadow-sm bg-transparent hover:text-white">
            Hiiiiiii
          </button> */}
          <button className=" tracking-tight overflow-hidden font-medium text-sm px-6 py-3 rounded-3xl border border-gray shadow-xs">
            <motion.span
              className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text"
              animate={{
                backgroundPositionX: "100%",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Book an intro call
            </motion.span>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6 md:mt-12">
          <LayoutGroup>
            <div>
              {column1.map(({ question, answer, id }, index) => (
                <Accordion
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  isOpen={openAcc === id}
                  onClick={handleToggle}
                />
              ))}
            </div>
            <div>
              {column2.map(({ question, answer, id }, index) => (
                <Accordion
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  isOpen={openAcc === id}
                  onClick={handleToggle}
                />
              ))}
            </div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}

export default Questions;
