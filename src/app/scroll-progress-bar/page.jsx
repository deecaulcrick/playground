"use client";
import { motion, useScroll } from "motion/react";

const Page = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section>
      <>
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#ec1763",
          }}
        />

        <Content />
      </>
    </section>
  );
};

export default Page;

const Content = () => {
  return (
    <div className="p-6 md:p-12 mt-16">
      <h1 className="text-6xl md:text-9xl tracking-tighter mb-6">
        How to Change Your Life w/Notion
      </h1>
      <p className="mb-6 tracking-tighter">
        Notion isn’t just a note-taking app—it’s a life-changing tool that can
        help you streamline your productivity, organize your tasks, and design
        the life you want. Whether you're a student, entrepreneur, or someone
        looking to get their life together, Notion can be your digital command
        center.
      </p>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        1. Set Up a Life Dashboard
      </h2>
      <p className="mb-4 tracking-tighter">
        One of the best ways to use Notion is to create a{" "}
        <strong>Life Dashboard</strong>. This is a central hub where you can
        track your goals, habits, tasks, and more.
      </p>
      <ul className="list-disc ml-4 mb-4">
        <li>
          Use a <strong>weekly planner</strong> to manage your tasks.
        </li>
        <li>
          Set up a <strong>goal tracker</strong> to track progress on personal
          or professional objectives.
        </li>
        <li>
          Create a <strong>habit tracker</strong> to reinforce daily routines.
        </li>
      </ul>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        2. Plan Your Days Effectively
      </h2>
      <p className="mb-4 tracking-tighter">
        Notion makes it easy to plan your days with a digital planner. Use a
        daily template to log your schedule, to-do list, and reflections. You
        can even automate your daily planner using Notion templates.
      </p>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        3. Manage Your Finances
      </h2>
      <p className="mb-4 tracking-tighter">
        Stay on top of your money by creating a <strong>finance tracker</strong>{" "}
        in Notion. Track your income, expenses, and savings goals using Notion’s
        database feature.
      </p>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        4. Organize Your Knowledge
      </h2>
      <p className="mb-4 tracking-tighter">
        Whether it’s books you’ve read, courses you’re taking, or ideas you want
        to store, Notion is a great tool for knowledge management. Set up a
        digital <strong>second brain</strong> where you store useful information
        for future reference.
      </p>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        5. Stay Consistent with a Content Planner
      </h2>
      <p className="mb-4 tracking-tighter">
        If you're a creator, use Notion to plan and manage your content
        calendar. Track ideas, schedule posts, and streamline your workflow.
      </p>

      <h2 className="text-4xl md:text-7xl tracking-tighter mb-6">
        Final Thoughts
      </h2>
      <p className="mb-4 tracking-tighter">
        Notion is a game-changer when it comes to personal productivity and
        organization. With the right setup, you can take control of your life,
        stay on top of your goals, and work smarter. Ready to get started? Try
        setting up a Notion dashboard today!
      </p>
    </div>
  );
};
