import React from 'react';
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Project from './Project';

const items = [
  <Project
    key={1}
    title={'B-Assist'}
    desc={'Description'}
    image_url={'https://i.imgur.com/1p7a2Vv.jpeg'}
  />,
  <Project
    key={2}
    title={'Digital FGD Platform'}
    desc={'Description'}
    image_url={'https://i.imgur.com/UzEAPym.jpeg'}
  />,
  <Project
    key={3}
    title={'Manutrackture'}
    desc={'Description'}
    image_url={'https://i.imgur.com/GonDqwE.jpeg'}
  />
];

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(items.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const slideNext = () => {
    if (activeIndex === items.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return [
    <div className='project-carousel'>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        activeIndex={activeIndex}
      />
      <div className='b-refs-buttons project-nav-buttons'>
        <button onClick={slidePrev} className='intro-button'>
          {'<'}
        </button>
        <button onClick={slideNext} className='intro-button'>
          {'>'}
        </button>
      </div>
    </div>
  ];
};

export default ProjectCarousel;
