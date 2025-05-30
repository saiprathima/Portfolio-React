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
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Node.js, featuring smooth animations and responsive design.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/saiprathima/Portfolio-React"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 bg-fixed">
      <Header />
      <main id="main-content" className="flex-grow py-12 px-4 sm:px-6 lg:px-8" role="main">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-lg text-gray-600">Here are some of the projects I've worked on</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Project list">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                role="listitem"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h3 className="sr-only">Technologies used</h3>
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                      {project.skills?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          role="listitem"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <Link 
                      to={project.link}
                      className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      View Project
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
