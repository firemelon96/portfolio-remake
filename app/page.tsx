import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export const Expi = [
  {
    id: 1,
    title: 'Freelance Web Developer',
    company: 'Work from home',
    address: 'Remote',
    date: 'December 2022 - present',
    works: [
      'Engaged in self-initiated web development projects to continuously enhance skills and build a diverse portfolio.',
      'Developed and maintained personal projects, showcasing proficiency in technologies such as HTML/CSS, JavaScript, and relevant frameworks.',
      'Conducted thorough testing and debugging on personal projects, ensuring clean and efficient code.',
      'Utilized platforms like GitHub to host personal projects and demonstrate version control and collaboration skills.',
      'Proactively explored new web development trends and best practices through online courses, tutorials, and tech blogs.',
      'Created a professional website or portfolio showcasing completed personal projects and proficiency in web development technologies.',
    ],
  },
  {
    id: 2,
    title: 'Software engineer',
    company: 'Palawan State University Research Office',
    address: 'Palawan, PH',
    date: 'June 19 - October 2022',
    works: [
      'Managed and maintained computer networks and systems, ensuring a 99.9% uptime and minimizing system downtime for optimal productivity.',
      'Developed a robust Windows application database, accommodating 500+ of research papers exclusively for teacher use in the university.',
      'Gathered and translated project requirements from university stakeholders, ensuring a 100% alignment of the database with their needs and expectations.',
      'Implemented security measures, including regular backups and updates, resulting in a 95% reduction in security incidents and protecting websites from potential threats.',
      'Conducted user feedback sessions and implemented improvements, resulting in a 20% increase in user satisfaction with the database.',
      'Developed and launched a user-friendly journal website, resulting in a significant increase in paper submissions from researchers, academicians, and contributors.',
      'Implemented efficient paper management functionalities, resulting in a 50% reduction in administrative overhead and improved visibility of academic research for the university.',
      'Managed website analytics and provided insights to stakeholders, contributing to a 25% increase in website traffic and user engagement.',
      'Perform regular backups of website files and databases to prevent data loss and ensure disaster recovery',
    ],
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'E-estate Realty Corp',
    address: 'Palawan, PH',
    date: 'June 19 - October 2022',
    works: [
      'Developed responsive and user-friendly WordPress websites, resulting in a 30% increase in mobile traffic and improved user engagement.',
      'Customized and implemented WordPress themes, resulting in a 70% improvement in website aesthetics and user experience.',
      'Implemented SEO best practices, leading to 87% boost in the websites search engine ranking and visibility.',
      'Integrated and configured WordPress plugins, enhancing website functionality and achieving a 25% reduction in loading time for critical features.',
      'Led website security enhancements, achieving a 90% reduction in potential security vulnerabilities and ensuring data protection.',
      'Conducted website performance audits and optimizations, resulting in a 60% decrease in page load time and improved overall site speed.',
      'Managed and maintained multiple websites, achieving a 99.9% uptime and ensuring minimal system downtime for uninterrupted user access.',
    ],
  },
];

const ProjectsDummy = [
  {
    id: 5,
    title: 'Filmpire',
    description:
      'An app that is used to browse movies using The Movie API(TMDB)',
    technologies: [
      'ReactJs',
      'MaterialUI',
      'Redux Toolkit',
      'React Router 6',
      'AlanAI',
    ],
    image: '/filmpire.png',
  },
  {
    id: 4,
    title: 'PromptAI',
    description: 'An app created using NextJs app router',
    technologies: ['NextJs', 'ReactJs', 'NextAuth', 'Tailwindcss'],
    image: '/promptai.png',
  },
  {
    id: 3,
    title: 'Realtor clone',
    description:
      'An app that was created as realtor clone using firebase as database and authentication',
    technologies: ['ReactJs', 'Firebase', 'Tailwindcss'],
    image: '/Realtor.png',
  },
  {
    id: 2,
    title: 'Inventory app',
    description: 'An inventory app that developed using MERN stack.',
    technologies: ['MongoDB', 'ExpressJS', 'ReactJs', 'NodeJs'],
    image: '/inventory.png',
  },
  {
    id: 1,
    title: 'Mapty',
    description: 'An app made while learning javascript course.',
    technologies: ['Javascript', 'leaflet api'],
    image: '/mapty.png',
  },
];

export default function Home() {
  return (
    <div className='z-0'>
      <Hero />

      <Experience data={Expi} />

      <Projects projectData={ProjectsDummy} />

      <Contact />

      <Footer />
    </div>
  );
}
