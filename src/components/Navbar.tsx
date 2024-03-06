import ProfileCircle from "./ProfileCircle";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-col justify-start items-center w-1/3 h-full p-4 pt-12 bg-white">
        <ProfileCircle />
          <div className='text-center mt-4'>  
                <h1 className='text-2xl font-bold text-gray-800'>Reid Poole</h1>
                <p className='text-md text-gray-600'>Software Engineer, Musician, Educator</p>
          </div>
          <nav className="flex flex-col items-center mt-4">
            <a href="/aboutMe" className='text-lg text-gray-700 hover:text-gray-900 py-1'>About Me</a>
            <a href="#work" className='text-lg text-gray-700 hover:text-gray-900 py-1'>Work Examples</a>
            <a href="#skills" className='text-lg text-gray-700 hover:text-gray-900 py-1'>Core Skills and Expertise</a>
            <a href="/music" className='text-lg text-gray-700 hover:text-gray-900 py-1'>Music</a>
            <Link href="/contact" className='text-lg text-gray-700 hover:text-gray-900 py-1'>
              Contact
            </Link>
          </nav>
      </div>
  )
};

export default Navbar;