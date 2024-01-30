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
  function sectionScroll(inputRef) {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <a
          href='#home'
          className='float-links'
          onClick={() => sectionScroll(homeRef)}
        >
          /home
        </a>
        <br />
        <a
          href='#about'
          className='float-links'
          onClick={() => sectionScroll(aboutRef)}
        >
          /about
        </a>
        <br />
        <a
          href='#education'
          className='float-links'
          onClick={() => sectionScroll(educationRef)}
        >
          /education
        </a>
        <br />
        <a
          href='#projects'
          className='float-links'
          onClick={() => sectionScroll(projectsRef)}
        >
          /projects
        </a>
        <br />
        <a
          href='#publications'
          className='float-links'
          onClick={() => sectionScroll(publicationsRef)}
        >
          /publications
        </a>
      </div>
    </div>
  );
};

export default App;
