import AboutMe from '../components/AboutMe'
import Skills from '@/components/Skills';
import WorkExamples from '@/components/WorkExamples';
import SocialMedia from '@/components/SocialMedia';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const Home = () => {
  return (
    <main className='flex h-screen'>
      <Navbar />
      <div className='w-2/3 h-full flex flex-col overflow-hidden'>
        <SocialMedia />
        <div className='flex-1 overflow-auto pr-7'>
          {/* Sections */}
          <div id="about">
            <AboutMe />
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          <div id="work">
            <WorkExamples />
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          <div id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home;