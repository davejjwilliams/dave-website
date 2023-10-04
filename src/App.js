import './App.css';
import About from './components/About';
import FloatingLinks from './components/FloatingLinks';

const App = () => {
  return (
    <div className='main'>
      <div className='header' />
      <h1 className='typing-demo'>
        hi, <span className='highlight'>david</span> here.
      </h1>
      <h2>Recent Software Engineering MSc Graduate</h2>
      <About />
      <FloatingLinks />
    </div>
  );
};

export default App;
