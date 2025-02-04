import { Anton } from 'next/font/google'
import Partner from '@/components/partner'
import Newsletter from '@/components/Newsletter'
import { gql } from '@apollo/client'
import client from 'apollo-client'
import Image from 'next/image'
import { Form, Input, Label, Button } from 'reactstrap'
import SubscriptionForm from '@/components/ContactSubscribeForm'
import Link from 'next/link'
import MainComponent from '@/components/LightboxPdf'
import Head from '../head'
import { CONTACT_PAGE_POSTS_QUERY } from '@/queries/queries'

// Define the Anton font
const anton = Anton({ weight: '400', subsets: ['latin'] })
export const revalidate = 60 // revalidate at most every 5 minutes
// GraphQL Query

interface ContactPageFields {
  firstMainHeadingPart1: string
  firstRightImage?: { node?: { link?: string } }
  firstSubheading: string
  first_main_heading_part_2: string
  secondContactSectionDescription: string
  secondContactSectionFormHeading: string
  secondContactSectionImage?: { node?: { link?: string } }
  secondContactSectionHeading: string
  thirdSectionCenterFirstButtonLink: string
  thirdSectionCenterSecondButtonLink: string
  thirdSectionCenterFirstButton: string
  thirdSectionCenterHeading: string
  thirdSectionCenterSecondButton: string
  thirdSectionCenterSubHeading: string
  thirdSectionCenterUppertext: string
  thirdSectionLeftImage?: { node?: { link?: string } }
  thirdSectionRightImage?: { node?: { link?: string } }
}

interface Page {
  contactpagefeilds: ContactPageFields
}

interface ContactProps {
  data: Page
}

const Contact = async (): Promise<JSX.Element> => {
  const response = await client.query<{ page: Page }>({
    query: CONTACT_PAGE_POSTS_QUERY,
  })
  console.log(response);
  const fields = response.data.page.contactpagefeilds
  return (
    <main className="md:w-[80%] mx-auto">
      <Head data={response.data} />
      <div className="container mx-auto pt-10 md:pt-20 max-w-[1480px]">
        <section className="md:flex">
          <div className="md:w-2/3">
            <h2 className="font-bold text-black md:text-left text-center md:text-[48px] text-[25px] leading-tight mb-4">
              {fields.firstMainHeadingPart1}
              <br />
              {fields.first_main_heading_part_2}
            </h2>
            <p className="font-normal md:text-[18px] text-[15px] text-center md:text-left float-left text-black p-2 pb-3">
              {fields.firstSubheading}
            </p>
          </div>
          <div className="md:w-1/3 pb-3 md:pb-0">
            <Link href="#newsletter">
              {' '}
              <Image
                src={fields.firstRightImage?.node?.link || ''}
                className="w-[81%] mx-auto md:mx-0 p-2 md:p-0"
                alt="First Section"
                width={800}
                height={500}
              />
            </Link>
          </div>
        </section>

        {/* Form Section */}
        <div className="md:flex mx-auto bg-[#F7F7F7] md:mt-[-4%] pt-20 md:pt-0">
          <div className="md:w-8/12">
            <div className="md:flex items-center">
              <div className="md:w-1/2 table mx-auto md:block md:mx-0">
                <Image
                  src={fields.secondContactSectionImage?.node?.link || ''}
                  alt="Second Section" // For responsive images
                  width={800} // Set a default width
                  height={500}
                  className="md:pr-20"
                />
              </div>
              <div className="md:w-1/2">
                <h3
                  className={`${anton.className} uppercase text-center md:text-left md:text-[55px] text-[30px] text-[#000000] font-light leading-[68px]`}
                >
                  {fields.secondContactSectionHeading}
                </h3>
                <p className="md:w-[65%] text-[#000000] text-center md:text-left">
                  {fields.secondContactSectionDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
            <p className="md:w-[75%] text-[#000000] pb-[20px] text-center md:text-left font-extrabold text-[18px]">
              {fields.secondContactSectionFormHeading}
            </p>

            <SubscriptionForm />
          </div>
        </div>

        <section className="container mx-auto md:pb-15">
          <div className="md:flex">
            <div className="md:w-3/12 relative grid justify-center items-center p-10">
              <Image
                width={1000}
                height={1000}
                className="md:absolute top-30"
                alt=""
                src={fields.thirdSectionLeftImage?.node?.link || '/default-image.png'}
              />
            </div>
            <div className="md:w-6/12 text-center mx-auto p-5 md:p-20">
              <h3 className="text-[15px] bg-[#fff] text-black font-bold mx-auto text-center border w-fit px-[14px]  rounded-[20px]">
                {fields.thirdSectionCenterUppertext}
              </h3>
              <h2 className="font-bold text-black  mx-auto text-center    md:text-[38px] text-[25px] leading-tight mb-4">
                {fields.thirdSectionCenterHeading}
              </h2>
              <Image width={1000} height={1000} src={'/25.png'} className="" alt="" />
              <p className="text-[#000000]  md:w-[80%] md:text-[18px] mx-auto text-center ">
                {fields.thirdSectionCenterSubHeading}
              </p>
              <div className="md:flex gap-5 md:pt-10 justify-center items-center ">
                <Link href={fields.thirdSectionCenterFirstButtonLink} target="_blank">
                  {' '}
                  <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                    {fields.thirdSectionCenterFirstButton}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M1 13 13 1M4 1h9v9"></path>
                      </g>
                    </svg>
                  </button>
                </Link>{' '}
                <br className="hidden md:block" />
                <div className="max-w-fit mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                  <MainComponent
                    extraclass=""
                    buttonText={fields.thirdSectionCenterSecondButton} // Pass dynamic text as prop
                    pdfUrl="api/proxy/"
                    // Pass the dynamic PDF URL
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </div>{' '}
              </div>
            </div>

            <div className="md:w-3/12 grid justify-center relative items-center  p-10">
              <Image
                width={1000}
                height={1000}
                src={fields.thirdSectionRightImage?.node?.link || '/default-image.png'}
                className="md:absolute top-30 right-0"
                alt=""
              />
            </div>
          </div>
        </section>

        <Partner />
        <Newsletter />
      </div>
    </main>
  )
}

export default Contact
