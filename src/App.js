import './App.css';
import About from './components/About';
import Education from './components/Education';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Publications from './components/Publications';

import { useRef } from 'react';

const App = () => {
  // Section Refs
  const homeRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const publicationsRef = useRef();

  // Section Scroll Methods
  function homeScroll() {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function aboutScroll() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function educationScroll() {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function projectsScroll() {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function publicationsScroll() {
    publicationsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='main'>
      <div ref={homeRef} className='header' />
      <Intro />
      <div ref={aboutRef} />
      <About />
      <div ref={educationRef} />
      <Education />
      <div ref={projectsRef} />
      <Projects />
      <div ref={publicationsRef} />
      <Publications />

      {/* Sticky Floating Links */}
      <div class='float'>
        <a href='#home' className='float-links' onClick={homeScroll}>
          /home
        </a>
        <br />
        <a href='#about' className='float-links' onClick={aboutScroll}>
          /about
        </a>
        <br />
        <a href='#education' className='float-links' onClick={educationScroll}>
          /education
        </a>
        <br />
        <a href='#projects' className='float-links' onClick={projectsScroll}>
          /proj
        </a>
        <br />
        <a
          href='#publications'
          className='float-links'
          onClick={publicationsScroll}
        >
          /pub
        </a>
      </div>
    </div>
  );
};

export default App;
