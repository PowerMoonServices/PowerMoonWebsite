// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;