'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  text: string;
  className?: string | null;
}

export const Button = ({ text, className }: ButtonProps) => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 text-green-800 border-2 border-green-800 tracking-wide rounded-full font-semibold hover:bg-green-800 hover:text-white ${className}`}
      onClick={() => scrollToSection('contact')}
    >
      {text}
    </motion.button>
  );
};
