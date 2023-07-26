'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  text: string;
  className?: string | null;
}

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 text-green-800 border border-green-800 rounded-full hover:bg-green-800 hover:text-white ${className}`}
    >
      {text}
    </motion.button>
  );
};
