import Link from 'next/link'
import Image from 'next/image'
import { Anton } from 'next/font/google'
import Partner from '@/components/partner'
import LastFiveSection from '@/components/lastfiveimages'
import { gql } from '@apollo/client'
import client from 'apollo-client'
import SwiperSectionshortcourses from '@/components/shortcourseproductslider'
import ReviewFirstSlider from '@/components/shortcoursereviewslider/Firstslider'
import ReviewSecondSlider from '@/components/shortcoursereviewslider/Secondslider'
import { fetchData } from '@/lib/fetchData'
import Head from '../head'
export const revalidate = 60 // revalidate at most every 5 minutes
import { SHORT_COURSE_PAGE_QUERY } from '@/queries/queries'

const anton = Anton({ weight: '400', subsets: ['latin'] })
const ShortCoursePage = async () => {
  const data = await fetchData(SHORT_COURSE_PAGE_QUERY)

  const shortcourse = data.page.shortCourseFields
  return (
    <main className="">
      <Head data={data} />
      <div className="main-heading py-10 container mx-auto max-w-[1480px]">
        <div className="flex items-center justify-between flex-wrap my-8 ">
          <h2 className="m-0 text-[32px] md:text-[64px] text-black font-bold md:leading-[60px] leading-[33px]">
            {shortcourse.shortCourseMainHeadingPart1}
            <br className="hidden md:block" />
            {shortcourse.shortCourseMainHeadingPart2}
          </h2>
        </div>
      </div>
      <section className="container mx-auto max-w-[1480px]">
        <div className=" relative flex flex-wrap md:flex-nowrap bg-[#EEF0EB]">
          <div className="md:w-1/3 w-full p-8  relative mx-auto">
            <div className="md:absolute relative bottom-0 md:bottom-10 ">
              <h2 className="text-black w-full md:w-[70%] md:mb-0 mb-10 text-[20px] leading-[30px]">
                {shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionFirstColumnText}
              </h2>
              <Link
                href={shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionFirstColumnButtonLink}
                className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
              >
                {shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionFirstColumnButtonText}
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
          <div
            className="flex justify-center relative flex-wrap md:flex-nowrap items-center w-full md:w-2/3 bg-cover bg-center  "
            //  style={{ backgroundImage: `url('${shortcourse.shortCoursesFirstSection.shortCoursesMainBackgroundImage?.node?.link}')` }}>
          >
            <Image
              src={
                shortcourse.shortCoursesFirstSection.shortCoursesMainBackgroundImage?.node?.link || '/default-image.jpg'
              } // Fallback image
              layout="fill"
              objectFit="cover"
              alt={'Default title'} // Provide a fallback title
            />
            <div className="relative w-full md:w-7/12">
              <Image
                src={shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionSecondColumnMainImage?.node?.link}
                className=" w-[80%]"
                height={1000}
                width={1000}
                alt=""
              />
              <Image
                src={shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionSecondColumnBottomImage?.node?.link}
                height={1000}
                width={1000}
                alt=""
                className="relative md:absolute w-[40%] bottom-[100px] right-[-100px]"
              />
              <Image
                src={shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionSecondColumnUpperImage?.node?.link}
                height={1000}
                width={1000}
                alt=""
                className="relative md:absolute w-[30%] top-0 left-[-100px]"
              />
            </div>
            <div className="md:w-5/12 w-full grid gap-10 ">
              <div className="bg-[#000000] relative md:absolute w-full md:w-[373px]  mr-7 -top-30 p-9 rounded-lg border-b-[20px] border-[#A1CF5F]">
                <h2 className="text-white   text-[24px] leading-[29.05px]">
                  {shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionThirdColumnHeading}
                </h2>
                <p className="text-white pt-6  text-[16px] leading-[30px]">
                  {shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionThirdColumnDescription}
                </p>
                <Image
                  src={shortcourse.shortCoursesFirstSection.shortCoursesFirstSectionThirdColumnImage?.node?.link}
                  height={1000}
                  width={1000}
                  alt=""
                  className="w-[35%] py-3 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap md:flex-nowrap py-20 container mx-auto max-w-[1480px]">
        <div className="md:w-1/3 w-full p-0 md:p-8 mb-10 md:mb-0 pt-12">
          <h4 className="text-[20px] w-[50%]  font-bold text-black">
            {shortcourse.shortCoursesSecondSection.shortCoursesSecondSectionFirstColumnText}
          </h4>
        </div>
        <div className="md:w-2/3 w-full p-0 md:p-8 gap-10 grid">
          <h2 className="m-0 text-[22px] md:text-[40px] text-black font-bold md:leading-[60px] leading-[30px]">
            {shortcourse.shortCoursesSecondSection.shortCoursesSecondSectionSecondColumnHeading}
          </h2>
          <div className=" flex flex-wrap md:flex-nowrap ">
            {shortcourse.shortCoursesSecondSection.shortCoursesSecondSectionSecondColumnBottomFeilds.map(
              (stat, index) => (
                <div key={index} className="md:w-1/3 w-full m-3 border-t border-gray-500 p-3 md:p-6">
                  <h3 className="m-0 md:text-[70px] text-[25px] text-black font-bold leading-[60px]">
                    {stat.shortCoursesSecondSectionSecondColumnBottomFeildsHeading}
                  </h3>
                  <p className="text-[20px] text-black leading-[60px]">
                    {stat.shortCoursesSecondSectionSecondColumnBottomFeildsDescription}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="bg-[#121212] md:p-20 p-5 container mx-auto max-w-[1480px]">
        <div className="">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 grid gap-10">
              <Image src="/106.png" alt="" className="w-[10%]" width={1000} height={1000} />
              <h2 className="m-0 md:text-[50px] text-[20px] w-[100%] text-white font-bold leading-[22px] md:leading-[60px]">
                {shortcourse.shortCoursesThirdSection.shortCoursesThirdSectionMainFirstRowHeading}{' '}
              </h2>
            </div>
            <div className="w-full md:w-1/2 md:mt-20 mt-8">
              <h4 className="text-[16px] w-full md:w-[50%] float-right text-white">
                {shortcourse.shortCoursesThirdSection.shortCoursesThirdSectionMainFirstRowDescription}{' '}
              </h4>
            </div>
          </div>
          <div className=" py-20">
            <div className="">
              {/* {shortcourse.shortCoursesThirdSection.shortCoursesThirdSectionMainSecondRowCards.map((course,index) => (
                     <div key={index} className="m-4 rounded bg-white">
                        <Image
                           src={course.shortCoursesThirdSectionMainSecondRowCardImage?.node?.link}
                           alt={course.shortCoursesThirdSectionMainSecondRowCardTitle}
                           className="h-[200px]"
                           height={1000}
                           width={1000}
                        />
                        <div className="p-5 grid gap-3">
                           <p className="text-[20px] text-black font-medium leading-[24px]">
                           {course.shortCoursesThirdSectionMainSecondRowCardTitle}
                           </p>
                           <Image
                           src='/140.png'
                           alt=''
                           className="w-[50%]"
                           height={1000}
                           width={1000}
                           />
                           <h4 className="text-[20px] w-[50%] font-bold text-black">
                           {course.shortCoursesThirdSectionMainSecondRowCardPrice}
                           </h4>
                           <Link
                           href={course.shortCoursesThirdSectionMainSecondRowCardButtonLink}
                           className="flex w-fit items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                           >
                        {course.shortCoursesThirdSectionMainSecondRowCardButtonText}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              id="arrow"
                           >
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
                     ))} */}
              <SwiperSectionshortcourses />
              {/* // */}
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-20 py-0 md:mt-0 mt-10 container mx-auto max-w-[1480px]">
        <Image
          src={shortcourse.shortCoursesFourthSection.shortCoursesFourthSectionImage?.node?.link}
          alt=""
          className="mx-auto w-full md:w-[40%]"
          width={1000}
          height={1000}
        />
        <div className=" py-15 md:w-[70%] w-full mx-auto ">
          <h2 className="max-w-[613px] text-black text-[25px] md:text-[48px] font-bold leading-[28px] md:leading-[48px]">
            {shortcourse.shortCoursesFourthSection.shortCoursesFourthSectionHeading}
          </h2>
        </div>
        <h2 className="md:w-[43%] w-full mx-auto text-black md:text-[20px] text-[16px]   leading-[40px]">
          <hr className="border-t-1 border-[#000000] mb-3 w-[15%] " />
          {shortcourse.shortCoursesFourthSection.shortCoursesFourthSectionDescription}
        </h2>
        <h2 className="md:w-[43%] w-full mx-auto text-black md:text-[20px] text-[16px]  leading-[40px]">
          {shortcourse.shortCoursesFourthSection.shortCoursesFourthSectionDescriptionPart2}
        </h2>
      </section>
      <section className="mx-auto md:py-30 py-10 my-20 container max-w-[1480px]   bg-[#F5F5F5]">
        <Image src="/76.png" alt="" className="mx-auto w-[7%] pb-10" width={1000} height={1000} />
        <h2
          className={`${anton.className} uppercase mx-auto pb-3 text-center w-full md:w-[46%] text-black text-[26px] md:text-[50px] font-bold  leading-[40px] md:leading-[60px]`}
        >
          {shortcourse.shortCoursesFifthSection.shortCoursesFifthSectionReview}
        </h2>
        <h4 className="text-[20px] text-center font-bold text-black">
          {shortcourse.shortCoursesFifthSection.shortCoursesFifthSectionText}
        </h4>
        <p className="text-center text-black text-[15px]">
          {shortcourse.shortCoursesFifthSection.shortCoursesFifthSectionSubText}
        </p>
      </section>
      {/*////////////////////////////  */}
      <section className="mt-30 mx-8 md:mx-0">
        <h2 className="md:w-[30%] w-full mx-auto text-center text-black md:text-[48px] text-[25px] font-bold leading-[30px] md:leading-[58px] mb-5">
          {shortcourse.shortCoursesSixthSection.shortCoursesSixthSectionMainHeading}
        </h2>
        <h2 className="md:w-[35%] w-full mx-auto text-center text-black text-[16px] pb-10  leading-[30px]">
          {shortcourse.shortCoursesSixthSection.shortCoursesSixthSectionMainDescription}
        </h2>
        <div className="my-5 bg-white  ">
          <div className=" ">
            {/* Testimonial 4 */}
            <ReviewFirstSlider />
            {/* {shortcourse.shortCoursesSixthSection.shortCoursesSixthSectionFirstReviewRow.map(
        (testimonial, index) => (
        <div
          key={index}
          className="p-10 bg-[#F5F5F5] text-black rounded-lg"
        >
          <div className="flex mb-4">
            <div className="mr-4">
              <Image
                src={testimonial.shortCoursesSixthSectionReviewFirstUserImage?.node?.link}
                alt={testimonial.shortCoursesSixthSectionReviewFirstUserName}
                width={50}
                height={50}
                className="rounded-full border-2 border-[#cec5c5]"
              />
            </div>
            <div>
              <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">
              {testimonial.shortCoursesSixthSectionReviewFirstUserName}
              </p>
              <p className="text-[14px] text-[#000] ">{testimonial.shortCoursesSixthSectionReviewFirstUserStatus}</p>
            </div>
          </div>
          <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
          {testimonial.shortCoursesSixthSectionReviewFirstReview}
          </p>
        </div>
      ))} */}
          </div>
        </div>
        {/* second row */}
        <div className="my-5 bg-white ">
          <div className="111 ">
            {/* Testimonial 4 */}
            {/* {shortcourse.shortCoursesSixthSection.shortCoursesSixthSectionSecondReviewRow.map(
                     (testimonial, index) => (
                     <div
                        key={index}
                        className="p-10 bg-[#F5F5F5] text-black rounded-lg"
                     >
                        <div className="flex mb-4">
                           <div className="mr-4">
                           <Image
                              src={testimonial.shortCoursesSixthSectionReviewSecondUserImage?.node?.link}
                              alt={testimonial.shortCourseSixthSectionReviewSecondUserName}
                              width={50}
                              height={50}
                              className="rounded-full border-2 border-[#cec5c5]"
                           />
                           </div>
                           <div>
                           <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">
                           {testimonial.shortCourseSixthSectionReviewSecondUserName}
                           </p>
                           <p className="text-[14px] text-[#000] ">{testimonial.shortCoursesSixthSectionReviewSecondUserStatus}</p>
                           </div>
                        </div>
                        <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                        {testimonial.shortCoursesSixthSectionReviewSecondReview}
                        </p>
                     </div>
                     ))} */}

            <ReviewSecondSlider />
          </div>
        </div>
      </section>
      <Partner />
      <LastFiveSection />
      {/* //////////////////////////////////////// */}
    </main>
  )
}
export default ShortCoursePage
