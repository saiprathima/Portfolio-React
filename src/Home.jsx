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
      
      <main id="main-content" className="flex-grow relative sm:pt-64 md:pt-32 lg:pt-32" role="main">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative md:absolute md:top-[10rem] md:right-[18%] w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mt-16 sm:mt-12 md:mt-0 rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
          role="img"
          aria-label="Prathima Parsa's profile picture"
        >
          <img 
            src={profileImage} 
            alt="Prathima Parsa - Frontend Developer" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* About Section */}
        <section className="pt-0 sm:pt-40 md:pt-56 pb-12 px-4 sm:px-6 lg:px-8 bg-white/50" aria-labelledby="about-heading">
          <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg mt-2 sm:mt-12">
                <p className="text-gray-600 leading-relaxed text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                  Hey there,
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                  <strong>I am Prathima, welcome to my digital space — glad you're here!</strong>
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                  I'm a passionate frontend developer with a keen eye for design and a love for creating 
                  seamless user experiences. I specialize in building modern, responsive web applications 
                  using React, and I'm always excited to learn and implement new technologies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                  I thrive on collaboration, creativity, and purposeful execution — and I believe that thoughtful UI can make technology feel effortless.
                </p>
                <p className="text-gray-600 leading-relaxed text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                  Outside of tech, I find balance and creativity in gardening, yoga, and mindfulness practices — passions that help me stay centered and bring intention to both life and code.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home; 