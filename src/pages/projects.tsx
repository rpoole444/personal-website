
import Head from 'next/head'
import SocialMedia from '@/components/SocialMedia'
import Navbar from '@/components/Navbar'

const Projects = () => {
  
  // const images = [
  //   { src: photo1, alt: 'Airline Distribution' },
  //   { src: photo2, alt: 'Assorted Cases'},
  //   { src: photo3, alt: 'Brands'},
  //   { src: photo4, alt: 'Case Details'},
  //   { src: photo5, alt: 'Description Cases'},
  //   { src: photo6, alt: 'Distribution Channels'},
  //   { src: photo7, alt: 'Distribution Channels 2'},
  //   { src: photo8, alt: 'Distribution Channels 3'},
  //   { src: photo9, alt: 'Operations East Coast'},
  //   { src: photo10, alt: 'Operations West Coast'}
  // ]

  return (
        <>
          <Head>
            <title>Projects - Reid Poole</title>
          </Head>
          <SocialMedia />
          <div className='flex row'>
            <Navbar />
            <section id="work" className="bg-gray-100 py-10 px5 lg:px20 w-2/3 h-full flex flex-col overflow-hidden ">
                <h2 className='text-3x1 text-center font-bold text-gray-700 mb-10'>Personal and Professional Projects</h2>
                <div className='space-y-10 p-5'>
                  <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <h2 className="bg-gradient-to-r from-purple-500 to-indigo-600 text-whit text-2x1 font-bold p-4">Fiction Fountain</h2>
                    <div className="flex flex-col md:flex-row">
                      <iframe
                        title="fictionFountain"
                        frameBorder="0"
                        className="w-full md:w-1/2 h-64"
                      ></iframe>
                      <div className='p-4 space-y-p'>
                        <p className='text-gray-600'>
                          Fiction Fountain is an application that allows a user to
                          generate a bedtime of story-time Story based on a prompt
                          directed to the Openai Chatbot, additionally users are able to
                          generated a picture! On load you can choose to generate a
                          story or a picture, and then you are taken to a page with an
                          input where you can add a prompt for the bot to generate a
                          story. Upon submition of the prompt you are taken to a screen
                          to view the generated story or image. The app incorporates a
                          responsive layout and will change its structure to fit both
                          large and mobile displays. It was built using functional React
                          Hooks, Typescript, controlled form pattern, React Router.
                        </p>
                        <div className='flex justify-around space-x-4 p-4'>
                          <a
                            href="https://github.com/rpoole444/fiction-fountain-fe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'
                            >
                              Github Repo
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-10 p-5'>
                  <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <h2 className="bg-gradient-to-r from-purple-500 to-indigo-600 text-whit text-2x1 font-bold p-4">Shelf Life</h2>
                    <div className="flex flex-col md:flex-row">
                      <iframe
                        title="shelfLife"
                        frameBorder="0"
                        className="w-full md:w-1/2 h-64"
                      ></iframe>
                      <div className='p-4 space-y-p'>
                        <p className='text-gray-600'>
                          Do you have a hard time picking out the right book to read?
                          Well look no further, Shelf Life is here to help! This App is
                          a book recomendation app where you are able to look at a
                          database of books referred by the Creators and add the book to
                          your favorites based on your interest and the recomendation!
                          Further more, you are able to search the New York Times top
                          100 best sellers and add your recommendation to the
                          recommendation database.
                        </p>
                        <div className='flex justify-around space-x-4 p-4'>
                          <a
                            href="https://github.com/rpoole444/fiction-shelf-life-FE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'
                            >
                              Github Repo
                            </a>
                            <a
                              href="https://shelf-life-k0fgat1zg-rpoole444.vercel.app/"
                              target="_blank"
                              rel="noreferrer"
                              className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'

                            >
                              Visit Site
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-10 p-5'>
                  <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <h2 className="bg-gradient-to-r from-purple-500 to-indigo-600 text-whit text-2x1 font-bold p-4">Ceaseless Cinemas</h2>
                    <div className="flex flex-col md:flex-row">
                      <iframe
                        title="ceaselessCinemas"
                        frameBorder="0"
                        className="w-full md:w-1/2 h-64"
                      ></iframe>
                      <div className='p-4 space-y-p'>
                        <p className='text-gray-600'>
                          If you're interested in the latest films, Ceaseless Cinema is
                          here for you! You can search through all of the films and find
                          their trailers and film details such as, runtime, release
                          date, budge, revenue, description, and their official trailer.
                        </p>
                        <div className='flex justify-around space-x-4 p-4'>
                          <a
                            href="https://github.com/rpoole444/rancidTomatillos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'
                            >
                              Github Repo
                            </a>
                            <a
                              href="https://rancid-tomatillos-tau.vercel.app/"
                              target="_blank"
                              rel="noreferrer"
                              className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'

                            >
                              Visit Site
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-10 p-5'>
                  <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <h2 className="bg-gradient-to-r from-purple-500 to-indigo-600 text-whit text-2x1 font-bold p-4">Artist Archive</h2>
                    <div className="flex flex-col md:flex-row">
                      <iframe
                        title="artistArchive"
                        frameBorder="0"
                        className="w-full md:w-1/2 h-64"
                      ></iframe>
                      <div className='p-4 space-y-p'>
                        <p className='text-gray-600'>
                          Artist Archive aims to inspire the uninspired ear! This
                          fullstack app contains a special collection of Incredible
                          musical artists from many differing genres. Look through the
                          Archive and find new and exciting music artists! Each artist's
                          click takes you to a description and an inspiring music video
                          of the Artist. But wait, if a user finds an artist that
                          resonates with them, you can collect your favorites into
                          private favorites collections! Don't waste another moment and
                          find the deployed site below!!
                        </p>
                        <div className='flex justify-around space-x-4 p-4'>
                          <a
                            href="https://github.com/rpoole444/ArtistArchive-FE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'
                            >
                              Github Repo
                            </a>
                            <a
                              href="https://artist-archive-fe.herokuapp.com/"
                              target="_blank"
                              rel="noreferrer"
                              className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'

                            >
                              Visit Site
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='space-y-10 p-5'>
                  <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <h2 className="bg-gradient-to-r from-purple-500 to-indigo-600 text-whit text-2x1 font-bold p-4">Grant Guru</h2>
                    <div className="flex flex-col md:flex-row">
                      <iframe
                        title="grantGuru"
                        frameBorder="0"
                        className="w-full md:w-1/2 h-64"
                      ></iframe>
                      <div className='p-4 space-y-p'>
                        <p className='text-gray-600'>
                          Grant Guru is an application that allows a user to explore a
                          database full of Scholarship and grant applications to Help
                          students find fincial aid with ease! Upon submition of the
                          form, queries are sent to our backend where they filter the
                          array of scholarships to fit the parameters and send us the
                          filtered scholarships.A user is able to add and delete
                          scholarships to and from their saved window. The app
                          incorporates a responsive layout and will change its structure
                          to fit both large and mobile displays.
                        </p>
                        <div className='flex justify-around space-x-4 p-4'>
                          <a
                            href="https://github.com/grant-guru/grant-guru-fe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'
                            >
                              Github Repo
                            </a>
                            <a
                              href="https://grant-guru-fe.vercel.app/"
                              target="_blank"
                              rel="noreferrer"
                              className='text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py2.5 text-center'

                            >
                              Visit Site
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        </>
  )
};

export default Projects;
