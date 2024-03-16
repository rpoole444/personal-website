import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/SocialMedia";
import Head from "next/head";
import '../styles/globals.css'

const Technologies = () => {
  return (
    <>
      <Head>
        <title>About Me - Reid Poole</title>
      </Head>
      <SocialMedia />
        <div className='flex row'>
          <Navbar />
          <h2 id="skills" className="text-2xl font-bold text-center text-gray-800 my-8">
            Technologies
          </h2>
          <div className="overflow-x-auto">
            <section className="flex gap-6 justify-center items-center py-5">
              <p>Add icons for each Tech here!</p>
            </section>
          </div>
        </div>
    </>
  )
}

export default Technologies;