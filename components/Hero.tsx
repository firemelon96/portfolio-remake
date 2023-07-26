import Image from 'next/image';
import React from 'react';
import TechStack from './TechStack';
import HeroImage from './HeroImage';
import { TypeText } from '@/helper/typewriter';
import { Cursor } from 'react-simple-typewriter';
import Animate from './Animate';
import { Button } from './Button';

const Hero = () => {
  return (
    <div className='h-screen' id='hero'>
      <div className='container mx-auto pt-10'>
        <div className='flex flex-col md:px-20 xl:px-32 2xl:px-52 p-8 md:py-8 md:my-28 md:mx-4 items-center md:justify-between gap-20 md:flex-row-reverse'>
          <HeroImage />
          <div className='text-center md:text-left '>
            <Animate>
              <p className='text-2xl'>Hey, I'm</p>
            </Animate>
            <Animate>
              <h1 className=' text-6xl lg:text-8xl '>
                <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-teal-500 to-green-600'>
                  Almujahid J.
                </span>
              </h1>
            </Animate>
            <Animate>
              <p className='text-3xl lg:text-5xl '>
                I'm a <TypeText />
                <Cursor cursorColor='green' />
              </p>
            </Animate>
            <Animate>
              <Button className='mt-4 p-2' text='Contact Me' />
            </Animate>
          </div>
        </div>
      </div>

      <TechStack />
    </div>
  );
};

export default Hero;
