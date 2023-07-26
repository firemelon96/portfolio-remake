'use client';
import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

interface MotionProps {
  children: React.ReactNode;
}

const Motion = ({ children }: MotionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  return (
    <div ref={ref}>
      <figure className='sticky top-0 w-10 h-10 m-0 p-0'>
        <svg
          id='progress'
          width='75'
          height='75'
          viewBox='0 0 100 100'
          className='-translate-x-10 -rotate-90'
        >
          <circle cx='50' cy='50' r='30' pathLength='1' className='fill-none' />
          <motion.circle
            cx='50'
            cy='50'
            r='30'
            pathLength='1'
            className='indicator'
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        {children}
      </figure>
    </div>
  );
};

export default Motion;
