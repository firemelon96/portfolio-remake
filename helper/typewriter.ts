'use client';
import { useTypewriter } from 'react-simple-typewriter';

export const TypeText = () => {
  const [text] = useTypewriter({
    words: [
      'Full-Stack web developer',
      'MERN stack developer',
      'React enthusiast',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return text;
};
