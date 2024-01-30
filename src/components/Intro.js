const Intro = () => {
  return (
    <div>
      <div className='title typing'>
        hi, <span className='highlight'>david</span> here.
      </div>
      <div className='subtitle'>Research Assistant @ UCL</div>
      <div>
        I'm a 23 year-old aspiring software engineer based in London. I am
        passionate about software engineering, with a keen interest in not only{' '}
        <span className='highlight'>back-</span> and{' '}
        <span className='highlight'>font-end development</span>, but the full
        lifecycle from <span className='highlight'>requirements gathering</span>{' '}
        to <span className='highlight'>quality assurance</span>,{' '}
        <span className='highlight'>CI/CD</span> and everything in between.
      </div>
      <a href='mailto:davejjwilliams@gmail.com' className='intro-button'>
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
