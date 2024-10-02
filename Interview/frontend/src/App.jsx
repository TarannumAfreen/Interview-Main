
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import DSA from './components/DSA';
import Code from './components/Code';
import CodeEditor from './components/CodeEditor';
import All from './components/All';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/code" element={<Code/>}/>
           
    
        
        <Route path="/all" element={<All />} />
        <Route path='/editor' element={<CodeEditor/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;