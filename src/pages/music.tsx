import Head from "next/head";
import SocialMedia from "@/components/SocialMedia";
import Navbar from "@/components/Navbar";
import '../styles/globals.css'
const Music = () => {
  return (
    <>
      <Head>
        <title>Music - Reid Poole</title>
      </Head>
      <SocialMedia />
        <div className='flex row'>
          <Navbar />
          <div className="container mx-auto px-4 text-center w-2/3 h-full">
            <h1 className="text-xl font-bold">Music Page</h1>
            <p>Under Construction</p>
            {/* ...Add your construction image here... */}
          </div>
        </div>
  </>
    );
};

export default Music;