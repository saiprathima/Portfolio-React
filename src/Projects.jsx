import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "An interactive AI chatbot built with React and Node.js that provides personalized responses and engages in meaningful conversations. Features include real-time responses, context awareness, and a modern, responsive UI.",
    skills: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS", "Framer Motion"],
    link: "/chat"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 bg-fixed">
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-8">
          <div className="max-w-3xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-light mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            >
              Projects
            </motion.h1>
            
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-light group-hover:text-gray-900 transition-colors duration-300">{project.title}</h2>
                    {project.link && (
                      <Link 
                        to={project.link}
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group/link"
                      >
                        Try it out 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
