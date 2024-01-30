import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='title'>Contact Me</div>
      <div className='subtitle'>david (dave) williams, 2024</div>
      <ul>
        <li>
          <a href='mailto:davejjwilliams@gmail.com' className='footer-link'>
            personal email
          </a>
        </li>
        <li>
          <a href='mailto:david.williams.22@ucl.ac.uk' className='footer-link'>
            UCL email
          </a>
        </li>
        <li>
          <a
            href='https://github.com/davejjwilliams/'
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/dave-williams-ba616419a/'
            target='_blank'
            rel='noreferrer'
            className='footer-link'
          >
            linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
