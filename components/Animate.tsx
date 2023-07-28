'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateProps {
  children: ReactNode;
}

const Animate = ({ children }: AnimateProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, ease: 'easeIn' }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'green',
          zIndex: 1,
          borderRadius: 5,
        }}
      ></motion.div>
    </div>
  );
};

export default Animate;
