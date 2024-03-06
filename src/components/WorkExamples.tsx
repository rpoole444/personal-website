import photo1 from '../../public/BarryCasperSalesPhotos/airlineDistribution.jpeg'
import photo2 from '../../public/BarryCasperSalesPhotos/assortedCases.jpeg'
import photo3 from '../../public/BarryCasperSalesPhotos/brands.jpeg'
import photo4 from '../../public/BarryCasperSalesPhotos/caseDetails.jpeg'
import photo5 from '../../public/BarryCasperSalesPhotos/descriptionCases.jpeg'
import photo6 from '../../public/BarryCasperSalesPhotos/distributionChannels.jpeg'
import photo7 from '../../public/BarryCasperSalesPhotos/distributionChannels2.jpeg'
import photo8 from '../../public/BarryCasperSalesPhotos/distributionChannels3.jpeg'
import photo9 from '../../public/BarryCasperSalesPhotos/operationsEastCoast.jpeg'
import photo10 from '../../public/BarryCasperSalesPhotos/operationsWestCoast.jpeg'
import Image from 'next/image'

const WorkExamples = () => {
  
  const images = [
    { src: photo1, alt: 'Airline Distribution' },
    { src: photo2, alt: 'Assorted Cases'},
    { src: photo3, alt: 'Brands'},
    { src: photo4, alt: 'Case Details'},
    { src: photo5, alt: 'Description Cases'},
    { src: photo6, alt: 'Distribution Channels'},
    { src: photo7, alt: 'Distribution Channels 2'},
    { src: photo8, alt: 'Distribution Channels 3'},
    { src: photo9, alt: 'Operations East Coast'},
    { src: photo10, alt: 'Operations West Coast'}
  ]

  return (
    <div className='container mx-auto my-8'>
      <div className='grid grid-cols-2 gap-4'>
        {images.map((image, index) => (
          <div key={index} className='max-w-sm mx-auto'>
            <Image
              src={image.src}
              alt={image.alt}
              layout='responsive'
              width={100}
              height={100}
              objectFit='cover'
              className='shadow-lg'
            />
          </div>
        ))}
      </div>  
    </div>
  )
};

export default WorkExamples;
