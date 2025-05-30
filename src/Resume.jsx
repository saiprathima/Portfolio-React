import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 bg-fixed">
      <Header />
      
      <main id="main-content" className="flex-grow pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8"
          >
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                Experience
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                My professional journey and expertise
              </motion.p>
            </div>
            
            {/* Download Resume Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 text-center"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Download Resume PDF"
              >
                Download PDF
              </a>
            </motion.div>

            {/* Resume Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12 relative"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-4" />

              {/* Software Developer */}
              <motion.div variants={itemVariants} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Software Developer</h3>
                <p className="text-gray-600">BMO Financial Group · Apr 2023 – Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Migrated legacy web pages to a modern React + TypeScript stack, improving maintainability, accessibility, and page load performance.</li>
                  <li>Built reusable UI modules and design primitives, ensuring consistency across platforms and reducing duplication.</li>
                  <li>Upgraded third-party content editing tools (TinyMCE) to enhance the content team's experience — resulting in 30% faster editor performance.</li>
                  <li>Implemented A/B testing and personalization with Adobe Target to support marketing experimentation.</li>
                  <li>Focused on WCAG 2.0 compliance, contributing to a more inclusive user experience.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Tech: React, TypeScript, Tailwind, Bootstrap, Contentful, Jest, Adobe Target, Git, Jira
                </p>
              </motion.div>

              {/* Scrum Master */}
              <motion.div variants={itemVariants} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Scrum Master (Previous Role at BMO)</h3>
                <p className="text-gray-600">BMO Financial Group · Dec 2020 – Mar 2023</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Led Agile ceremonies, maintained sprint discipline, and fostered high-performing team culture.</li>
                  <li>Replaced Excel-based workflows with a custom Jira ticketing system, increasing workflow visibility and improving intake efficiency by 40%.</li>
                  <li>Created real-time performance dashboards using Jira Analytics + JQL, saving the Scrum Master team 30% of monthly capacity.</li>
                  <li>Enabled data-informed decision making for leadership by surfacing key performance metrics and compliance reports.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Focus: Agile coaching, workflow design, Jira dashboards, cross-functional leadership
                </p>
              </motion.div>

              {/* Angular Developer */}
              <motion.div variants={itemVariants} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Angular Developer</h3>
                <p className="text-gray-600">CGI Inc. · May 2015 – Dec 2016</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Built dynamic, single-page applications using AngularJS and integrated them with back-end Java services to deliver live investment data.</li>
                  <li>Designed and maintained a reusable UI component library, reducing custom development by 70% and improving design consistency across apps.</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Tech: AngularJS 1.2, Bootstrap, Java RESTful APIs, SASS, JSON, Git
                </p>
              </motion.div>

              {/* Other Experience */}
              <motion.div variants={itemVariants} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Other Experience</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  <li>Email Developer, Lucidia — Mobile-compatible HTML/CSS emails for marketing campaigns</li>
                  <li>Front End Developer, Mphasis — Webpages using HTML5, CSS3 and Javascript/JQuery</li>
                  <li>Certified SAFe 5 Scrum Master, Scaled Agile</li>
                  <li>Microsoft Certified: HTML5, CSS3, JavaScript</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;