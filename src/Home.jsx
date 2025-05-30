import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import profileImage from './assets/pic.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow relative">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative md:absolute md:top-[10rem] md:right-[18%] w-32 h-32 md:w-40 md:h-40 mx-auto mt-8 md:mt-0 rounded-full overflow-hidden shadow-xl border-4 border-white"
        >
          <img 
            src={profileImage} 
            alt="Prathima Goutham" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Hero Section */}
        <div className="pt-8 md:pt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-pacifico text-gray-800 mb-4">
                Prathima Parsa
              </h1>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <div className="pb-12 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6 text-left text-lg sm:text-xl md:text-2xl">
                Hey there, welcome to my digital space!
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-left text-lg sm:text-xl md:text-2xl">
                <b>I'm Prathima — glad you're here!</b>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-left text-lg sm:text-xl md:text-2xl">
                I'm a passionate frontend developer with a keen eye for design and a love for creating 
                seamless user experiences. I specialize in building modern, responsive web applications 
                using React, and I'm always excited to learn and implement new technologies.
              </p>
              <p className="text-gray-600 leading-relaxed text-left text-lg sm:text-xl md:text-2xl">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing my knowledge through technical writing.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home; 