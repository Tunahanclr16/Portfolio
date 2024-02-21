import { motion } from "framer-motion";
import data from "../../data";

export default function Projects() {
  return (
    <div>
      <motion.h1 className="text-center mt-12 text-[#7DFFAF] text-3xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Projects</motion.h1>
      <p className="text-white text-center text-xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Take a look at my highlighted projects</p>
      <div className="max-w-[1350px] mx-auto mt-8">
        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((project, index) => (
            <motion.div key={index} className="w-80 bg-[#2C243B] rounded-md overflow-hidden shadow-lg" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="bg-gradient-to-r from-[#9955E8] via-transparent to-[#7BFFAF] p-4">
                <img className="w-full rounded h-48 object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="p-4">
                <h2 className="text-white text-center text-lg font-semibold mb-2">{project.title}</h2>
                <div className="flex justify-center">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-[#7DFFAF] text-black px-4 py-2 rounded-lg mr-2 hover:bg-opacity-90">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-[#9955E8] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
