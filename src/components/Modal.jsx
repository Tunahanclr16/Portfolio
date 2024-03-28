import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

export default function Modal({ modal, setModal }) {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const closeModal = () => {
        setModal(false);
    }

    return (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="bg-white rounded-lg p-8 w-96"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
            >
                <div className='flex justify-end cursor-pointer'>
                    <IoMdClose onClick={closeModal} size={24} />
                </div>
                <h2 className="text-lg font-bold mb-4">{language === 'en' ? 'Language Selection' : 'Dil Seçimi'}</h2>
                <p className="mb-4">{language === 'en' ? 'Please select a language:' : 'Lütfen bir dil seçiniz:'}</p>
                <div className="flex justify-between">
                    <button onClick={() => handleLanguageChange('tr')} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2 hover:bg-blue-600 transition duration-300">Turkish</button>
                    <button onClick={() => handleLanguageChange('en')} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">English</button>
                </div>
                <div className="mt-4">
                    {language && <p>{language === 'en' ? 'Selected language: English' : 'Seçilen dil: Türkçe'}</p>}
                </div>
                <p className="mt-4">{language === 'en' ? 'Hello, due to a temporary problem in my github account, I transferred some of the projects to this github account, you can review the account by clicking the button.' : 'merhaba github hesabımda bulunan geçici problemden dolayı projelerin bir kısmını bu github hesabına aktardım hesabı butona tıklayarak inceleyebilirsiniz.'}</p>
                <Link
                    to={"https://github.com/Tunahanclr16"}
                    className="bg-[#413A4F]  text-white text-[16px] gap-2 flex items-center justify-center mt-[20px] rounded-md h-[56px] w-[160px]"
                >
                    <FaGithub color="white" size={24} />
                    Github
                </Link>
            </motion.div>
        </motion.div>
    );
}
