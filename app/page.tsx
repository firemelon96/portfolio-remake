import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { ExperienceDummy } from '@/resources/experience';
import { ProjectsDummy } from '@/resources/projects';

export default function Home() {
  return (
    <>
      <Hero />

      <Experience data={ExperienceDummy} />

      <Projects projectData={ProjectsDummy} />

      <Contact />

      <Footer />
    </>
  );
}
