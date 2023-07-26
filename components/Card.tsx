import Image from 'next/image';
import React from 'react';
import Animate from './Animate';

interface CardProps {
  data?: any;
}

const TechnologiesList = ({ lists }: { lists: any }) => {
  return (
    <ul className='flex flex-wrap gap-2 mt-3'>
      {lists.map((list:any, i:number) => (
        <li key={i} className='p-1 bg-slate-500 text-slate-300 rounded-full'>
          {list}
        </li>
      ))}
    </ul>
  );
};

const Card = ({ data }: CardProps) => {
  // make a description ellipsis
  const shortDesc = (text: string, n: number) => {
    if (text.length > n) {
      const elipsis = text.substring(0, n).concat('...');
      return elipsis;
    }
    return text;
  };

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {data?.map((item:any) => (
        <Animate>
          <div
            key={item.id}
            className='bg-white dark:bg-slate-800 dark:text-slate-200 rounded-lg shadow-sm w-80 overflow-hidden hover:brightness-50 hover:cursor-pointer transition-all duration-150 ease-in-out h-[450px]'
          >
            <Image alt='feature' width={400} height={200} src={item.image} />
            <div className='p-6'>
              <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
              <p className='text-gray-600'>{shortDesc(item.description, 50)}</p>
              {/* <button className='mt-4 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
          Read More
        </button> */}
              <TechnologiesList lists={item.technologies} />
            </div>
          </div>
        </Animate>
      ))}
    </div>
  );
};

export default Card;
