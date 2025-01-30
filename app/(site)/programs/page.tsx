// app/new-page/page.js
import { Anton } from 'next/font/google'
import Testimonial from '@/components/Testimonial'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import { gql } from '@apollo/client'
import client from 'apollo-client'
import Image from 'next/image'
import ProgramTestimonial from '@/components/programtestemonial'
import { PROGRAM_PAGE_QUERY, TESTIMONIAL_QUERY, PROGRAM_TESTIMONIAL_QUERY } from '@/queries/queries'
import Head from '../head'
import { fetchData } from '@/lib/fetchData'
export const revalidate = 60 // revalidate at most every 5 minutes

export default async function Programs() {
  const data = await fetchData(PROGRAM_PAGE_QUERY)
  const testimonials = await fetchData(TESTIMONIAL_QUERY)
  const programTestimonials = await fetchData(PROGRAM_TESTIMONIAL_QUERY)
  return (
    <main className="md:w-[100%] mx-auto">
      <Head data={data} />
      <h1
        className="md:w-[100%] lg:w-[1178px] md:py-[42px] pt-4 py-[30px] md:text-[30px] lg:text-[64px] text-[25px] font-bold text-center text-black md:max-w-[1178px] p-5 mx-auto md:leading-[77px] "
        dangerouslySetInnerHTML={{ __html: data.page.programpagefeild.firstSectionMainHeading }}
      />
      <section className="md:py-[42px] md:pt-0 relative container  max-w-[1480px] mx-auto">
        <Image
          width={1500}
          height={1000}
          src={data.page.programpagefeild.secondSectionImage.node.link}
          className="mx-auto p-2 md:p-0 aspect-video object-cover max-h-[600px] rounded-md"
          alt=""
        />
        <div className="lg:flex pt-5 ">
          <div className="lg:w-2/5 relative md:p-10 md:pb-0 p-3">
            {/* <div className="md:absolute bottom-[5%]">  */}
            <ProgramTestimonial data={programTestimonials} />
            {/* </div> */}
          </div>
          <div className="lg:w-3/5 p-10">
            <h2 className=" text-[#000000] lg:text-[32px] text-[20px]  font-normal lg:leading-[47px] text-center md:text-left">
              {data.page.programpagefeild.secondSectionRightAuthorName}{' '}
            </h2>
            <h4 className="pt-[25px] pb-10 text-[#000000] text-[16px] font-bold leading-[23px] md:w-[50%] text-center md:text-left">
              {data.page.programpagefeild.secondSectionRightSubHeading}
            </h4>
            <Link
              href={data.page.programpagefeild.secondSectionRightButtonLink}
              className=" mx-auto md:mx-0 flex  items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300"
            >
              {data.page.programpagefeild.secondSectionRightButtonText}{' '}
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
            </Link>
          </div>
        </div>
        <div className="lg:absolute hidden lg:block lg:top-[30%] left-5  pt-50 p-2 bg-[#A1CF5F]">
          <Image width={70} height={70} className="mx-auto" src="/84.png" alt="" />
          <h2 className=" text-center  text-white">Testimonials</h2>
        </div>
      </section>

      <section className="container  max-w-[1480px]  bg-[#000000] mx-auto">
        <div className="p-6 md:p-13">
          <h1 className="md:text-[48px] text-[35px] md:w-[60%] font-bold text-white text-center md:text-left leading-[38px] md:leading-[58.09px] ">
            {' '}
            {data.page.programpagefeild.thirdSectionMainHeading}
          </h1>
          <div className="md:flex pt-9 gap-10">
            <div className="md:w-4/12  ">
              <h4 className="text-[20px] pb-10 md:w-[75%] text-center md:text-left text-white md:leading-[29.09px] ">
                {' '}
                {data.page.programpagefeild.thirdSectionLeftText}
              </h4>
              <Image width={70} height={70} src="/106.png" className=" md:m-0 mx-auto md:p-0 p-5" alt="" />
            </div>
            <div className="md:w-8/12 md:flex gap-5">
              {data.page.programpagefeild.third_section_right_columns.map((dataposts, index) => (
                <div key={index} className="bg-white rounded-[5px] w-[100%] mb-3 md:mb-0">
                  <div className="flex px-5 py-5 gap-15">
                    <div className="w-1/4">
                      <Image alt="" width={50} height={50} src="/104.png" />
                    </div>
                    <div className="w-3/4">
                      <Image
                        width={1400}
                        height={1000}
                        src={dataposts.columnimages_program?.node?.link}
                        className="mx-auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="px-5 py-5">
                    <h5 className="text-[10px] md:text-[16px] text-[#000000] uppercase md:pb-2 font-bold">
                      {dataposts.columnsubtitleProgram}
                    </h5>
                    <h3 className="text-[20px] md:text-[32px] text-[#000000] md:pb-10 font-bold">
                      {dataposts.columnheadingProgram}
                    </h3>
                    <Link href={dataposts.button_link_program}>
                      {' '}
                      <button className="  mt-[21px]  md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                        {dataposts.button_text_program}
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
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonial testimonials={testimonials} className="bg-white" />
      <Newsletter />
    </main>
  )
}
