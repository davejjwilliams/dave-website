import React from 'react';
import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Project from './Project';

// const responsiveProps = {
//   0: {
//     items: 1
//   },
//   1024: {
//     items: 2,
//     itemsFit: 'contain'
//   },
//   1600: {
//     items: 3,
//     itemsFit: 'contain'
//   }
// };

const projects = [
  { title: 'B-Assist', desc: 'Description' },
  { title: 'Digital FGD Platform', desc: 'Description' },
  {
    title: 'Manutrackture',
    desc: 'Description'
  },
  { title: 'Project 4', desc: 'Description' },
  { title: 'Project 5', desc: 'Description' }
];

const createItems = (items, [handleClick]) => {
  let deltaX = 0;
  let difference = 0;
  const swipeDelta = 20;

  return items.map((item, i) => (
    <div
      data-value={i + 1}
      className='item'
      onMouseDown={e => (deltaX = e.pageX)}
      onMouseUp={e => (difference = Math.abs(e.pageX - deltaX))}
      onClick={() => difference < swipeDelta && handleClick(i)}
    >
      <Project title={item.title} desc={item.desc} />
    </div>
  ));
};

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems(projects, [setActiveIndex]));

  const slidePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(projects.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const slideNext = () => {
    if (activeIndex === projects.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const syncActiveIndexForSwipeGestures = e => setActiveIndex(e.item);

  const onSlideChanged = e => {
    syncActiveIndexForSwipeGestures(e);
    console.debug(
      `onSlideChanged => Item's position after changes: ${e.item}. Event:`,
      e
    );
  };

  const onUpdated = e => {
    console.debug(
      `onUpdated => Item's position after update: ${e.item}. Event:`,
      e
    );
  };

  return [
    <AliceCarousel
      mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      activeIndex={activeIndex}
      // responsive={responsiveProps}
      onSlideChanged={onSlideChanged}
      onUpdated={onUpdated}
    />,
    <div className='b-refs-buttons project-nav-buttons'>
      <button onClick={slidePrev} className='intro-button'>
        {'<'}
      </button>
      <button onClick={slideNext} className='intro-button'>
        {'>'}
      </button>
    </div>
  ];
};

export default ProjectCarousel;
