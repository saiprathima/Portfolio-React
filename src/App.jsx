import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Chatbot from './Chatbot';
import Contact from './Contact/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/chat" element={<Chatbot />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;