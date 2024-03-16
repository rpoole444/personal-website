import Head from 'next/head';
import SocialMedia from '@/components/SocialMedia';
import Navbar from '@/components/Navbar';
import "../styles/globals.css"
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
            <div className='space-y-4 p-5'>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Frontend and Backend Software Development</h3>
                  <p>
                    Proficient in a broad range of programming languages and frameworks, including JavaScript, Java, TypeScript, HTML, CSS, React.js, React Native, Next.js, Angular, Redux.js, Spring, and Node.js. Skilled in front-end development and backend integrations, enhancing application performance and user engagement.              
                  </p>
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Project Leadership and Team Management</h3>
                <p>
                  Experienced in leading and managing software development projects and teams, evidenced by successful overhauls of mobile applications and UI/UX improvements. Proven ability to boost user engagement and satisfaction, and adept at coordinating with cross-functional teams to achieve project goals.</p>
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Technical Instruction and Mentorship</h3>
                <p>
                  Demonstrated expertise in technical instruction and student success facilitation, developing and delivering comprehensive courses in Git, JavaScript, Ruby, and other key technologies. Skilled in implementing instructional strategies and providing mentorship in behavioral and personal development skills.
                </p>
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Software Architecture and Data Management</h3>
                  Strong foundation in software architecture, with experience enhancing AWS application architecture and integrating technologies like DynamoDB, Cognito, and Lambda. Skilled in data management, classification, and digitization, showcasing an analytical acumen and precision.              
              </div>
              <div className="skill-category">
                <h3 className='text-xl text-gray-700 font-medium mb-2'>Creative Problem Solving and Innovation</h3>
                  Unique background in music and education, leveraging creative skills to enhance software development processes and team dynamics. Ability to infuse projects with innovative thinking and a fresh perspective, contributing to significant improvements in technology and education sectors.              
              </div>
            </div>
          </section>
        </div>
  </>      
  )
}

export default Skills;