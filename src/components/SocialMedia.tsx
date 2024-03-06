import Image from "next/image"
import fbImage from '../../public/FBicon.png'
import linkedInImage from '../../public/linked.png'
import instaImage from '../../public/insta.png'
const SocialMedia = () => {
  return (
        <div className='flex justify-around p-4 pr-4 bg-gray-50'>
          {/*Social Media*/}
          <a href="https://www.facebook.com/barry.casper.5" className="hover:text-blue-600" target="_blank" rel="noreferrer">
            <Image src={fbImage} alt="Facebook" width={50}  height={50} />
          </a>
          <a href="https://www.linkedin.com/in/barry-casper-07710219/" className="hover:text-pink-600" target="_blank" rel="noreferrer">
            <Image src={linkedInImage} alt="Linked In" width={50}  height={50} />
          </a>
          <a href="https://www.instagram.com/barrycasper/" className="hover:text-pink-600" target="_blank" rel="noreferrer">
            <Image src={instaImage} alt="Instagram" width={50}  height={50} />
          </a>
        </div>
      
  )
};
export default SocialMedia;