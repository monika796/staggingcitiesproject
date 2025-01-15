'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MainComponent from '@/components/LightboxPdf'
const Footer = () => {
  return (
    <>
      {/* footer start */}
      <br></br>
      <footer className="container max-w-[1481px] mx-auto md:mt-[60px]">
        <div className=" hidden md:flex w-[100%] mx-auto flex flex-wrap items-center justify-between mx-auto border-t border-b border-solid border-black">
          <div className="flex gap-[40px] md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="px-4 py-6 md:flex md:items-center md:justify-between"></div>
            <button type="button" className="text-black font-bold ">
              <Link href="/book">Book </Link>
            </button>

            <button type="button" className="  m-[25px] text-black font-bold">
              {' '}
              <Link href="/donation">Donate Now</Link>
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-gray-900 bg-blue-700 rounded md:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/articles"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="grid grid-cols-2 gap-8 px-0 py-6 lg:py-8 md:grid-cols-4">
            <div className="grid justify-start items-start">
              <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white">Programs</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/leadership-circle" className=" underline text-black ">
                    Global Leadership <br className="md:hidden block" /> Circle
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/vantage-point" className="underline text-black ">
                    VantagePoint™
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="underline text-black "></Link>
                </li>
              </ul>
            </div>
            <div className=" flex  justify-start items-start">
              <div className="grid justify-center items-start">
                <h2 className="  mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white">About the Book</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 !text-center">
                    {/* <Link href="https://drive.google.com/file/d/1-P0sWAfjtc8s3sl_R5yyGfCA2cuoWV6T/view?usp=sharing" className="hover:underline">Read a Sample  <br className="md:hidden block" />  Chapter</Link> */}
                    <MainComponent
                      buttonText="Read a Sample Chapter" // Pass dynamic text as prop
                      pdfUrl="/SampleChapter.pdf#scrollbar=0"
                      extraclass="text-left text-black underline" // Pass the dynamic PDF URL
                    />
                  </li>
                  <li className="mb-4">
                    <Link
                      href="https://www.amazon.com/Intersection-Introduction-Design-Integrated-Living/dp/166575057X/ref=sr_1_1?crid=1QMBZ133ERX0U&dib=eyJ2IjoiMSJ9.WwghbEqcneXNsLO0OzP5f5_NQgq_zyPN9oyDmb3pKbCKvKi0SyfjefTG7vrrsm3SLLVyzyxqPXc8_UmfPYRT-CubxoHi1yDKNFj0_3V_FJOPhozNAoPG9O_mml6qOneJSQ4rOVfut5fUS-cRoJrsM5K5j-86xUEPCXbyh9YMyAiDfZZHU08vEpKeryJI6gZaI57KM9vRRSrGF4AQ-QYCtvLoatN4jOxVVJAA9oQHtCA.2eOJgAdWz1BJxbLYG4sbEQYD1mcgV9CvuG27G5JAl-A&dib_tag=se&keywords=the+intersection+faith%2C+work%2C+and+life&qid=1723663542&sprefix=The+intersection%3A+Faith%2C+Work%2Caps%2C166&sr=8-1"
                      className="underline text-black "
                      target="_blank"
                    >
                      Buy Book
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <Image alt="" width={124} height={146} src="/Book3d.png" className="" />
              </div>
            </div>
            <div className="grid justify-start items-start">
              <h2 className="mb-3 text-sm font-bold text-gray-900 uppercase dark:text-white">Stay Connected</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="https://www.facebook.com/CitiesProjectGlobal/" className="text-black  underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://www.linkedin.com/company/citiesprojectglobal" className="text-black  underline">
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://www.instagram.com/citiesprojectglobal/" className="text-black  underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid justify-start items-start">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/terms-of-use" className="text-black  underline">
                    Terms of Use
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/privacy-statement" className="text-black  underline">
                    Privacy Statement
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="text-black underline">
                    © CitiesProjectGlobal 2024
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
