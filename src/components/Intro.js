const Intro = () => {
  return (
    <div>
      <div className='title typing'>
        hi, <span className='highlight'>david</span> here.
      </div>
      <div className='subtitle'>
        Software Systems Engineering MSc Recent Graduate
      </div>
      <div>
        I'm a 23 year-old aspiring software engineer based in London. I'm
        proficient in{' '}
        <span className='highlight'>object-oriented paradigms</span> and
        passionate about all stages of the software development lifecycle, from{' '}
        <span className='highlight'>requirements engineering</span> to{' '}
        <span className='highlight'>quality assurance</span>.
      </div>
      <a href='mailto:davejjwilliams@email.com' className='intro-button'>
        Contact
      </a>
      &nbsp;
      <a href='/assets/Resume.pdf' className='intro-button' download>
        Resume
      </a>
    </div>
  );
};

export default Intro;
