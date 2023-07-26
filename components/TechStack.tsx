'use client';
import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { BiLogoMongodb, BiLogoTypescript, BiLogoCss3 } from 'react-icons/bi';
import { SiTailwindcss, SiMui } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import Ticker from 'framer-motion-ticker';
import Animate from './Animate';

const TechStack = () => {
  return (
    <>
      <Animate>
        <h1 className='text-xl uppercase tracking-wide text-slate-600 dark:text-slate-200 text-center mb-4'>
          Tech Stack
        </h1>
      </Animate>
      <Animate>
        <Ticker duration={20}>
          <span className='group relative py-4 px-2 bg-slate-800 rounded-md mx-1'>
            <TbBrandNextjs className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              NextJS
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-orange-600 rounded-md mx-1'>
            <DiJavascript className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              Javascript
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-blue-900 rounded-md mx-1'>
            <BiLogoTypescript className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              Typescript
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-blue-600 rounded-md mx-1'>
            <BiLogoCss3 className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              CSS
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-blue-700 rounded-md mx-1'>
            <FaReact className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              ReactJS
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-green-400 rounded-md mx-1'>
            <FaNodeJs className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              NodeJS
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-green-600 rounded-md mx-1'>
            <BiLogoMongodb className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              MongoDB
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-blue-500 rounded-md mx-1'>
            <SiTailwindcss className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              Tailwind
            </p>
          </span>
          <span className='group relative py-4 px-2 bg-blue-800 rounded-md mx-1'>
            <SiMui className='h-24 w-24 text-white group-hover:blur-sm transition-all duration-300' />
            <p className='absolute bottom-0.5 opacity-0 left-1 group-hover:opacity-100 text-white font-bold uppercase'>
              MUI
            </p>
          </span>
        </Ticker>
      </Animate>

      {/* <div className='bg-slate-200 p-4 text-center flex gap-5 justify-center overflow-hidden'></div> */}
    </>
  );
};

export default TechStack;
