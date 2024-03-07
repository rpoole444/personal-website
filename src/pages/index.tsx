import Head from 'next/head';
import SocialMedia from '@/components/SocialMedia';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const Home = () => {
  return (
      <>
        <Head>
          <title>Home - Reid Poole</title>
        </Head>
        <main className='bg-gray-100 py-10 px5 lg:px20'>
          <SocialMedia />
          <div className='flex row'> 
            <Navbar />
            <div className='w-2/3 h-full flex flex-col overflow-hidden'>
              <div className='flex-1 overflow-auto pr-7'>
                {/* Add Home Page Content maybe without this div. */}
               </div>
            </div>
          </div>
        </main>
      </>
  )
}
export default Home;