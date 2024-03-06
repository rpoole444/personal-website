import Image from 'next/image';
import profileImage from '../../public/musicBoxReid.jpg'

const ProfileCircle = ( ) => {
  console.log( 'ProfileCircle: ', profileImage)
  return (
    <div className="rounded-full border border-gray-300 relative w-64 h-64 overflow-hidden">
      <Image 
        src={profileImage}
        alt="Reid Poole"
        priority
         className="rounded-full w-64 h-64 relative object-cover object-top"
        />
    </div>
  )
};
export default ProfileCircle