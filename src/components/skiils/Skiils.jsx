import { motion } from "framer-motion";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import firebase from "../../assets/firebase.png";
import html from "../../assets/html.png";
import next from "../../assets/nextjs.svg";
import redux from "../../assets/redux.png";

const Skills = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <div id="skills" className="w-full bg-[#171023] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-4xl font-bold inline border-b-4 border-pink-600 "
          >
            Skills
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="py-4"
          >
            {" "}
            These are the technologies I've worked with
          </motion.p>
        </div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.4 }}

        >
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </motion.div>
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">tailwind</p>
          </motion.div>
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={react} alt="HTML icon" />
            <p className="my-4">React</p>
          </motion.div>
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={firebase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </motion.div>
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={github} alt="HTML icon" />
            <p className="my-4">Github</p>
          </motion.div>
          <motion.div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={redux} alt="HTML icon" />
            <p className="my-4">Redux</p>
          </motion.div>
          <motion.div
            className="shadow-md flex justify-center items-center flex-col shadow-[#040c16] hover:scale-110 duration-500"
            variants={item}
            initial={{ opacity: 0 }}
          >
            <img className="w-20 mx-auto" src={next} alt="HTML icon" />
            <p className="my-4">Next.js</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
