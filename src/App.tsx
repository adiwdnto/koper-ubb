import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';
import Home from '@/src/pages/Home';
import Gallery from '@/src/pages/Gallery';
import About from '@/src/pages/About';
import ChatBot from '@/src/components/ui/ChatBot';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
