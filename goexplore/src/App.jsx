import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import Profile from './Profile';
import Contact from './pages/Contact';
import ChatBot from './Chatbot';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatBot />
    </div>
  );
}
export default App;