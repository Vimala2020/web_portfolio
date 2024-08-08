// Home.jsx
import React from 'react';
import Header from '../../components/Header';
import Intro from '../Home/Intro';
import About from './About';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar';

function Home() {
  return (
    <div>
      <Header />
      <div className='bg-primary px-8 py-10 lg:px-40'>
        <Intro />
          <About />
          <Education />
          <Contact />
          <Footer />
          <LeftSideBar />
    
      </div>
    </div>
  );
}

export default Home;
