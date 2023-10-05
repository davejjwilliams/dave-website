import './App.css';
import About from './components/About';
import { useRef } from 'react';

const App = () => {
  const homeRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();

  function homeScroll() {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function educationScroll() {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function projectsScroll() {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='main'>
      <div ref={homeRef} className='header' />
      <h1 className='typing'>
        hi, <span className='highlight'>david</span> here.
      </h1>
      <h2>Software Engineering MSc Recent Graduate</h2>
      <About />
      <div class='float'>
        <a href='#home' className='float-links' onClick={homeScroll}>
          /home
        </a>
        <br />
        <a href='#education' className='float-links' onClick={educationScroll}>
          /education
        </a>
        <br />
        <a href='#projects' className='float-links' onClick={projectsScroll}>
          /projects
        </a>
      </div>
    </div>
  );
};

export default App;
