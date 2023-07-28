'use client';
import React, { useState } from 'react';
import Switcher from './Switcher';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  return (
    <nav className='fixed w-full top-0 z-20 bg-slate-100 dark:bg-slate-900 dark:text-slate-200'>
      <div className='flex container mx-auto h-16 items-center px-4 justify-between'>
        <div
          onClick={() => scrollToSection('hero')}
          className='hover:cursor-pointer text-2xl font-bold text-slate-950 dark:text-slate-200'
        >
          MY PORTFOLIO
        </div>
        <div className=''>
          <Switcher />
        </div>
        <div className='hidden md:flex text-slate-600 dark:text-slate-200'>
          <motion.a
            onClick={() => scrollToSection('experience')}
            className='p-2 cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Experience
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('projects')}
            className='p-2 cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('contact')}
            className='p-2 cursor-pointer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            download
            href='/almujahid-jamion.pdf'
            className='p-2 text-green-800 border-2 font-medium border-green-800 rounded-full hover:bg-green-800 hover:text-white'
          >
            Resume
          </motion.a>
        </div>
        <div className='md:hidden'>
          <button className='focus:outline-none' onClick={toggleMenu}>
            <svg
              className='w-6 h-6 stroke-black dark:stroke-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden justify-center text-center text-lg items-center pb-3 z-20 text-slate-950 dark:text-slate-200'>
          <motion.a
            onClick={() => scrollToSection('experience')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='block p-4 hover:bg-black hover:text-white'
          >
            Experience
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='block p-4 hover:bg-black hover:text-white'
          >
            Projects
          </motion.a>
          <motion.a
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='block p-4 hover:bg-black hover:text-white'
          >
            Contact
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            download
            href='/almujahid-jamion.pdf'
            className='block mx-4 p-2 text-green-800 border-2 font-medium border-green-800 rounded-full hover:bg-green-800 hover:text-white'
          >
            Resume
          </motion.a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
