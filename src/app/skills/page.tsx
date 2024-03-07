import Head from 'next/head';
import SocialMedia from '@/components/SocialMedia';
import Navbar from '@/components/Navbar';
import "../../styles/globals.css"
const Skills = () => {
  return (
     <>
      <Head>
        <title>About Me - Reid Poole</title>
      </Head>
      <SocialMedia />
        <div className='flex row'>
          <Navbar />
          <section id='skills' className="bg-gray-100 p-6 w-2/3 h-full">
            <h2 className='text-xl text-grey-800 font-semibold mb-3'>Core Skills & Expertise</h2>
            <div className='space-y-4'>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Sales Excellence</h3>
                <p>Proven track record in leading sales for midrange luggage, consistently exceeding targets in competitive retail spaces like Marshalls and TJ Max.</p>
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Leadership</h3>
                <p>Skilled in cross-functional team leadership, with 14 endorsements for management and a history of building effective, result-oriented teams.</p>
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Strategic Expertise</h3>
                <ul className='list-disc ml-5 space-y-1'>
                  <li>Product Development & Marketing Strategy</li>
                  <li>Business Strategy & New Business Development</li>
                  <li>Consumer Products & Market Analysis</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
  </>      
  )
}

export default Skills;