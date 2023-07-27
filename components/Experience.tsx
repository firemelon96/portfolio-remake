import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Animate from './Animate';

interface ExperienceProps {
  data?: any;
}

const Responsibility = ({ works }: { works: any }) => {
  return (
    <ul className='list-disc px-6'>
      {works.map((work: any, i: number) => (
        <Animate>
          <li
            className='mt-2 text-slate-600 dark:text-slate-200 text-lg md:text-2xl'
            key={i}
          >
            {work}
          </li>
        </Animate>
      ))}
    </ul>
  );
};

const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className='h-fit md:pt-10 pt-32' id='experience'>
      <div className='container mx-auto items-center justify-center'>
        <Animate>
          <h1 className='title text-slate-600 dark:text-slate-200'>
            Work Experience
          </h1>
        </Animate>
        {data?.map((item: any) => (
          <div
            key={item.id}
            className='flex items-start mb-4 justify-center gap-2'
          >
            <div className='hidden md:flex-col'>
              <svg width='50' height='50'>
                <circle
                  cx='25'
                  cy='25'
                  r='15'
                  stroke='green'
                  strokeWidth='6'
                  fill='none'
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
            <div className='flex-col pl-8 gap-4 max-w-6xl'>
              <Animate>
                <h2 className='text-3xl md:text-5xl text-slate-600 dark:text-slate-200'>
                  {item?.title}
                </h2>
              </Animate>
              <Animate>
                <h3 className='text-xl md:text-3xl text-slate-700 dark:text-slate-200'>
                  {item?.company}
                </h3>
              </Animate>
              <div className='text-lg md:text-2xl md:flex md:justify-between text-slate-600 dark:text-slate-200'>
                <Animate>
                  <span className='flex items-center gap-2'>
                    <FaCalendar className='h-5 w-5' /> {item?.date}
                  </span>
                </Animate>
                <Animate>
                  <span className='flex items-center gap-2'>
                    <MdLocationOn className='h-5 w-5' /> {item?.address}
                  </span>
                </Animate>
              </div>
              <Responsibility works={item.works} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
