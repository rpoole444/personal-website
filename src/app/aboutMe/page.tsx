import Head from 'next/head';
import SocialMedia from '@/components/SocialMedia';
import Navbar from '@/components/Navbar';
import '../../styles/globals.css';

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Me - Reid Poole</title>
      </Head>
      <SocialMedia />
        <div className='flex row'>
          <Navbar />
          <div id="about" className='p-6 bg-gray-400 space-y-3'>
            <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
            <p>
              Hello! I'm Reid Poole, a dynamic Software Engineer based in Colorado Springs, with a unique harmony of music and coding in my repertoire. Transitioning from a celebrated 20-year career as a musician and educator in New Orleans to the intricate world of software development, I bring a symphony of creativity, problem-solving, and teamwork to the tech stage.
            </p>
            <p>
              At the heart of my software expertise are JavaScript, React.js, TypeScript, and Express.js, complemented by robust knowledge in AWS, PostgreSQL, and DynamoDB. This technical prowess stems from over 2000 hours of dedicated coding, enabling me to architect full-stack applications that are as rhythmic and engaging as a jazz improvisation.        </p>
            <p>
              My journey in music, particularly my 13-year stint in New Orleans, has been instrumental in shaping my approach to software development. The discipline, collaboration, and improvisational skills honed from performing and teaching music have been pivotal in crafting intuitive and efficient software solutions. As a former Music Industry professor at Dillard University, I've nurtured the next generation of creatives, which parallels my role in mentoring aspiring developers.        </p>
            <p>
              My recent endeavors at GigBoss and SNAP Audition are where my two worlds harmonize beautifully. At GigBoss, I've played a key role in UI enhancements and feature implementations, while at SNAP Audition, my music background directly influenced user experience improvements. These experiences showcase my ability to lead, innovate, and empathize, whether in a bustling New Orleans jazz club or a collaborative software development environment.
            </p>
            <p>
              When I'm not coding or exploring new harmonies on my trumpet, you'll find me hitting the mountain trails, savoring the Colorado outdoors, or spending cherished moments with my family. My life is a blend of melodies and modules, rhythms and repositories, constantly composing a unique score in both music and technology.
            </p>
            <p>
              Welcome to my world, where every line of code tells a story, and every project plays a tune. Let's create harmony together!
            </p>
          </div>
        </div>
    </>
  )
};

export default AboutMe;