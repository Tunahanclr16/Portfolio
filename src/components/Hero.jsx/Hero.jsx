import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import HeroIcon from "../../assets/bro.png";
import { Link } from "react-router-dom";
import Graphic from "../../assets/Graphic.svg";
import { motion } from "framer-motion";
import Modal from "../Modal";

export default function Hero() {
  const [modal, setModal] = useState(false);
  const modalFunc = () => {
    setModal(!modal);
  };
  return (
    <>
      <motion.div
        className="max-w-[1440px] mx-auto flex justify-center mt-[150px] flex-col p-2 md:flex-row  items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1 }}
      >
        <div className="flex  flex-col mx-auto max-w-[500px] md:max-w-[592px]">
          <motion.h2
            className="bg-gradient-to-r from-[#9955E8] from-10% to-[#7BFFAF] to-90% inline-block text-transparent text-lg sm:text-3xl bg-clip-text italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm Tunahan
          </motion.h2>{" "}
          <motion.h3
            className="font-bold text-[24px] text-white mt-[24px] md:mt-[32px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Front-End developer and innovation enthusiast
          </motion.h3>
          <motion.p
            className="text-[14px] mt-[16px] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
         Hello, I'm Tunahan, a 17-year-old from Bursa, Turkey, who has a keen interest in front-end development. Over the past year and a half, I've delved into the world of coding, exploring the nuances of web development and continuously striving to enhance my expertise in the field. My journey into programming started with a simple curiosity, which has since blossomed into a profound passion. I derive immense satisfaction from transforming designs into interactive digital experiences through code, and I am committed to refining my skills to craft meaningful and visually captivating online interfaces.
          </motion.p>
          <motion.div
            className="flex gap-2 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {" "}
            <Link
              onClick={modalFunc}
              className="bg-[#413A4F]  text-white text-[16px] gap-2 flex items-center justify-center mt-[20px] rounded-md h-[56px] w-[160px]"
            >
              <FaGithub color="white" size={24} />
              Github
            </Link>
            <Link to={'/projects'} className="bg-[#8A42DB]  text-white text-[16px] flex items-center justify-center mt-[20px] rounded-md h-[56px] w-[160px]">
              My projects
            </Link>
          </motion.div>
        </div>
        <motion.image
          className="order-first md:order-last"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img className="object-cover" src={HeroIcon} alt="" />
        </motion.image>
      </motion.div>
      <motion.image
        className="flex justify-start max-w-[1000px] p-2 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img
          className="object-cover transform -rotate-180 ml-20 mt-6"
          src={Graphic}
          alt=""
        />
        {modal && (
          <div>
            <Modal setModal={setModal} modal={modal} />
          </div>
        )}
      </motion.image>
    </>
  );
}
