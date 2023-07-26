'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        className=''
      >
        <Image
          alt='profile'
          width={250}
          height={250}
          src='/1x1.png'
          className='rounded-full h-auto w-auto'
        />
      </motion.div>
    </>
  );
};

export default HeroImage;
