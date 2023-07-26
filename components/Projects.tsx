import React from 'react';
import Card from './Card';
import Animate from './Animate';

interface ProjectsProps {
  projectData: any;
}

const Projects = ({ projectData }: ProjectsProps) => {
  return (
    <div className='container mx-auto pt-10' id='projects'>
      <Animate>
        <h1 className='title'>Projects</h1>
      </Animate>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        <Card data={projectData} />
      </div>
    </div>
  );
};

export default Projects;
