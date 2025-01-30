import React from 'react'
import Image from 'next/image'
import Imageone from '/public/leader-image1.png'
import Imagetwo from '/public/leader-image2.png'
import Divider from '/public/design-divider.png'
import Leaderbg from '/public/leader-bg.png'
import Threeimg from '/public/32.png'
import fourimg from '/public/cover.png'
import Pcover from '/public/city.png'
import Integrated from '/public/Integrated.png'
import Calling from '/public/calling.png'
import Slider from '/public/slider-img.png'
import Union from '/public/union-icon.png'
import Collective from '/public/collective.png'
import VideoPlayer from '@/components/Leadershipvideosection'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'
// import { gql } from '@apollo/client'
import client from 'apollo-client'
import parse from 'html-react-parser'
import MainComponent from '@/components/LightboxPdf'
import LastFiveSection from '@/components/lastfiveimages'
import SwiperSectionLeaderhsip from '@/components/leadershipcommunityslider'
import { LEADERSHIP_PAGE_QUERY } from '@/queries/queries'
import { fetchData } from '@/lib/fetchData'
import Head from '../head'


export const revalidate = 60 // revalidate at most every 5 minutes

const page = async () => {
  const data = await fetchData(LEADERSHIP_PAGE_QUERY)
  return (
    <div className="container mx-auto max-w-[1480px]">
      <Head data={data} />
      <section>
        <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[1178px] md:text-[64px] text-[25px] leading-[38px]  font-bold text-center text-black  p-5 mx-auto md:leading-[77px] ">
          {data.page.leadershipPageFeilds.leadershipMainHeading}
        </h1>
      </section>
      <section>
        <div className=" font-sans bg-white">
          <div className="flex lg:flex-nowrap justify-between gap-5 flex-wrap gap-12 mt-5">
            <div className="relative  lg:max-w-[30%] w-full ">
              <Image
                src={
                  data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionFirstColumnImage
                    ?.node?.link
                }
                alt="Group Discussion"
                width={1000}
                height={1000}
                className=" object-cover w-full rounded-md"
              />
            </div>

            <div className="text-left  lg:max-w-[40%] lg:pl-[20px] 2xl:pl-[70px]">
              <h1 className=" text-[24px] md:text-[32px] font-light leading-tight text-gray-900 mb-6">
                {data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionSecondColumnHeading}
              </h1>
              <p className=" md:text-[16px] text-gray-700 leading-relaxed mb-4">
                {
                  data.page.leadershipPageFeilds.leadershipFirstSectionFeilds
                    .leadershipFirstSectionSecondColumnDescription1
                }
              </p>
              <p className="text-gray-700 leading-relaxed">
                {
                  data.page.leadershipPageFeilds.leadershipFirstSectionFeilds
                    .leadershipFirstSectionSecondColumnDescription2
                }
              </p>
            </div>
            <div className=" lg:px-12 px-0 pb-0 flex justify-end items-end w-full  lg:max-w-[30%]">
              <Image
                src={
                  data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionThirdColumnImage
                    ?.node?.link
                }
                alt="Woman in business"
                width={1000}
                height={1000}
                className="rounded-md w-full"
              />
            </div>
          </div>

          {/* Bottom Right Small Image */}
        </div>
      </section>

      <section className="my-20">
        <div className="font-sans bg-white grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-0 md:gap-3 md:py-20 py-0">
          {/* Left Section */}
          <div className="bg-[#121212] w-full text-white flex flex-col items-center justify-center px-5 py-10 md:px-15 md:py-25 md:h-[751px]">
            <h1 className="text-3xl font-bold mb-6 text-center">
              {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionFirstColumnHeading}
            </h1>
            <div className="flex justify-center mb-10 mt-5">
              <Image src={Divider} alt="Faith Icon" width={300} height={50} />
            </div>
            <p className="text-gray-300 text-center leading-relaxed mb-8">
              {
                data.page.leadershipPageFeilds.leadershipSecondSectionFields
                  .leadershipSecondSectionFirstColumnDescription
              }
            </p>
            <a
              href={
                data.page.leadershipPageFeilds.leadershipSecondSectionFields
                  .leadershipSecondSectionFirstColumnButtonLink
              }
              className="bg-[#A1CF5F] hover:bg-green-600 text-black font-semibold py-2 px-4 rounded flex items-center justify-center"
            >
              {
                data.page.leadershipPageFeilds.leadershipSecondSectionFields
                  .leadershipSecondSectionFirstColumnButtonText
              }
              <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="relative col-span-1 lg:col-span-2 h-[751px]">
            {/* Background Image */}
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipSecondSectionFields
                  .leadershipSecondSectionSecondColumnBackgroundImage?.node?.link
              }
              alt="Speaker Image"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />

            {/* Cards */}
            <div className="absolute bottom-8 right-8 space-y-6 w-[310px]">
              {/* Global Leadership Circle */}
              <div className="bg-[#B8EA81] p-6 rounded-[5px] shadow-md w-[310px]">
                <Image src={Union} alt="Faith Icon" width={25} height={29} className="ml-auto" />
                <h2 className="text-black font-bold text-[23px] mb-2 md:pr-[60px]">
                  {
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxHeading
                  }
                </h2>
                <p className=" text-black mt-3 mb-8">
                  {
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxDescription
                  }
                </p>
                {/* <Link
                    href={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonLink}
                    className="bg-white text-black text-[16px] font-bold py-2 px-4 rounded border border-gray-200  hover:bg-gray-100"
                  >
                    {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonText} <span className="ml-2">↗</span>
                  </Link> */}
                <MainComponent
                  extraclass="bg-white text-black text-[16px] font-bold py-2 px-4 rounded border border-gray-200  hover:bg-gray-100"
                  buttonText={
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonText
                  } // Pass dynamic text as prop
                  pdfUrl={
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonLink?.node?.link
                  } // Pass the dynamic PDF URL
                />
              </div>

              {/* Denver Leadership Circle */}
              <div className="bg-white p-6  rounded-[5px]  shadow-md w-[310px]">
                <Image src={Union} alt="Faith Icon" width={25} className="ml-auto" height={29} />
                <h2 className="text-black font-bold text-[23px] mb-2 md:pr-[60px]">
                  {
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxHeading
                  }
                </h2>
                <p className="text-gray-600 mt-3 mb-8">
                  {
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxHeading
                  }
                </p>
                {/* <a
                    href={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonLink}
                    className="bg-[#A1CF5F] hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded "
                  >
                   {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonText}
                   <span className="ml-2">↗</span>
                  </a> */}
                <MainComponent
                  extraclass="bg-[#A1CF5F] hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded"
                  buttonText={
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonText
                  } // Pass dynamic text as prop
                  pdfUrl={
                    data.page.leadershipPageFeilds.leadershipSecondSectionFields
                      .leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonLink?.node?.link
                  } // Pass the dynamic PDF URL
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className=" mt-0  max-w-[900px] md:text-[48px] text-[25px] leading-[38px]  font-bold text-center text-black  mx-auto md:leading-[77px] ">
          {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionMainHeading}
        </h1>
      </section>
      <section>
        <div className="max-w-[1155px] mx-auto bg-white py-16 ">
          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F5F5F5] p-6 lg:max-w-[355px] rounded-md">
              {/* Icon and Image */}
              <div className="flex mb-4">
                <Image
                  src={
                    data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0]
                      .leadershipThirdSectionBoxImages?.node?.link
                  }
                  alt="Discussion Image"
                  width={1000}
                  height={1000}
                  className="rounded-md ml-auto video-image h-50 object-cover"
                />
              </div>
              {/* Content */}
              <h2 className="font-bold text-black text-lg mb-2 mt-20 max-w-[219px]">
                {' '}
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0]
                    .leadershipThirdSectionBoxHeading
                }{' '}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0]
                    .leadershipThirdSectionBoxDescription
                }
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F5F5F5] p-6 lg:max-w-[355px] rounded-md">
              {/* Icon and Image */}
              <div className="flex mb-4">
                <Image
                  src={
                    data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1]
                      .leadershipThirdSectionBoxImages?.node?.link
                  }
                  alt="Collaboration Image"
                  width={1000}
                  height={1000}
                  className="rounded-md ml-auto video-image h-50 object-cover"
                />
              </div>
              {/* Content */}
              <h2 className="font-bold text-black text-lg mb-2 mt-20 max-w-[219px]">
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1]
                    .leadershipThirdSectionBoxHeading
                }
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1]
                    .leadershipThirdSectionBoxDescription
                }
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5F5F5] p-6 lg:max-w-[355px] rounded-md">
              {/* Icon and Image */}
              <div className="flex mb-4">
                <Image
                  src={
                    data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2]
                      .leadershipThirdSectionBoxImages?.node?.link
                  }
                  alt="Transformation Tools"
                  width={1000}
                  height={1000}
                  className="rounded-md ml-auto video-image h-50 object-cover"
                />
              </div>
              {/* Content */}
              <h2 className="font-bold text-black text-lg mb-2 mt-20 max-w-[270px]">
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2]
                    .leadershipThirdSectionBoxHeading
                }
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {
                  data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2]
                    .leadershipThirdSectionBoxDescription
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-black">Watch Our Community Share Their Experience</h2>{' '}
          <hr className="border w-[70%]" />
        </div>
        <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 ">
          <SwiperSectionLeaderhsip />
        </div>
      </section>
      <section>
        <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[800px] md:text-[48px] text-[25px] leading-[38px]  font-bold  text-black  md:leading-[58px] ">
          {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionMainHeading}
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionFirstColumnImage
                  ?.node?.link
              }
              alt="Transformation Tools"
              width={539}
              height={418}
              className=""
            />
          </div>
          <div className="pt-3 md:px-5 px-0">
            <p className="text-black">
              {
                data.page.leadershipPageFeilds.leadershipFourthSectionFields
                  .leadershipFourthSectionSecondColumnDescription1
              }{' '}
            </p>
            <p className="mt-5 text-black">
              {
                data.page.leadershipPageFeilds.leadershipFourthSectionFields
                  .leadershipFourthSectionSecondColumnDescription2
              }{' '}
            </p>
          </div>
          <div className="pt-3 md:px-5 px-0">
            <p className="text-black">
              {' '}
              {
                data.page.leadershipPageFeilds.leadershipFourthSectionFields
                  .leadershipFourthSectionThirdColumnDescription1
              }{' '}
            </p>
            <p className="mt-5 text-black">
              {
                data.page.leadershipPageFeilds.leadershipFourthSectionFields
                  .leadershipFourthSectionThirdColumnDescription2
              }
            </p>
          </div>
        </div>
      </section>

      <section className="my-20 md:my-40 container mx-auto">
        <div className="mx-auto">
          <div className="w-full text-center">
            <h2 className=" text-[25px] md:text-[48px] md:leading-[58.09px] leading-[30px] font-bold text-black">
              {data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnHeading}
            </h2>
            <p className="text-[16px] leading-[22px] mt-5">
              {data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnDescription}
            </p>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnImages
                  ?.node?.link
              }
              alt="Transformation Tools"
              width={800}
              height={800}
              className="aspect-video mx-auto"
            />
          </div>

          <div className="col-span-2 md:max-w-[80vw] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <div className="col-span-2 px-0 my-10 md:my-[0]">
                <h3 className=" text-[24px] md:text-[48px] text-black font-bold">Our city today</h3>

                <p className="font-[16px] leading-[23px] text-black mt-6">
                  <b>
                    {
                      data.page.leadershipPageFeilds.leadershipFifthSectionFields
                        .leadershipFifthSectionSecondColumnDescriptionHeading1
                    }
                  </b>
                  {
                    data.page.leadershipPageFeilds.leadershipFifthSectionFields
                      .leadershipFifthSectionSecondColumnDescription1
                  }{' '}
                </p>
                <p className="font-[16px] leading-[23px] text-black mt-6">
                  <b>
                    {
                      data.page.leadershipPageFeilds.leadershipFifthSectionFields
                        .leadershipFifthSectionSecondColumnDescriptionHeading2
                    }
                  </b>
                  {
                    data.page.leadershipPageFeilds.leadershipFifthSectionFields
                      .leadershipFifthSectionSecondColumnDescription2
                  }{' '}
                </p>
                <p className="font-[16px] leading-[23px] text-black mt-6">
                  <b>
                    {
                      data.page.leadershipPageFeilds.leadershipFifthSectionFields
                        .leadershipFifthSectionSecondColumnDescriptionHeading3
                    }
                  </b>
                  {
                    data.page.leadershipPageFeilds.leadershipFifthSectionFields
                      .leadershipFifthSectionSecondColumnDescription3
                  }{' '}
                </p>
              </div>
              <div>
                <Image
                  src={
                    data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionThirdColumnImage
                      ?.node?.link
                  }
                  alt=""
                  width={800}
                  height={800}
                  className="rounded-lg"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:max-w-[80vw] mx-auto">
        <h2 className=" text-[24px] md:text-[48px] text-black font-bold text-left">
          {data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionMainHeading}
        </h2>
        <p className="text-[16px] mt-5 text-black">
          {data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionMainDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipSixthSectionFields
                  .leadershipSixthSectionFirstRowFirstColumnImage?.node?.link
              }
              alt=""
              width={714}
              height={385}
            ></Image>
          </div>
          <div className="flex justify-center items-start flex-col">
            <div className="max-w-[545px]">
              <h2 className="text-[24px] text-black font-bold leading-[23px] mb-6">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionFirstRowSecondColumnHeading
                }
              </h2>
              <p className="text-black">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionFirstRowSecondColumnDescription
                }
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-8 mt-6">
          <div className="flex justify-between items-center gap-0 md:gap-5 md:flex-nowrap flex-wrap ">
            <div className="md:w-[50%] w-full">
              <Image
                src={
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionSecondRowFirstColumnImage?.node?.link
                }
                alt=""
                width={319}
                height={375}
                className="w-full"
              ></Image>
            </div>
            <div className="md:w-[50%] w-full mt-10 md:mt-0">
              <h2 className="text-[24px] text-black font-bold leading-[23px] mb-6">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionSecondRowSecondColumnHeading
                }
              </h2>
              <p className="text-black">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionSecondRowSecondColumnDescription
                }
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipSixthSectionFields
                  .leadershipSixthSectionSecondRowThirdColumnImages?.node?.link
              }
              alt=""
              className="rounded-md"
              width={714}
              height={385}
            ></Image>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center ">
            <div className="md:w-[50%] hidden lg:block "></div>
            <div className="lg:w-[50%] w-full">
              <Image
                src={
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionThirdRowFirstColumnImages?.node?.link
                }
                alt=""
                width={319}
                height={375}
                className="w-full"
              ></Image>
            </div>
          </div>
          <div className="flex justify-center items-start flex-col">
            <div className="max-w-[454px]">
              <h2 className="text-[24px] text-black font-bold leading-[23px] mb-6">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionThirdRowSecondsColumnHeading
                }
              </h2>
              <p className="text-black">
                {
                  data.page.leadershipPageFeilds.leadershipSixthSectionFields
                    .leadershipSixthSectionThirdRowSecondsColumnDescription
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-10 pt-0 pb-10">
        <div className="section-header mt-20">
          <h2 className="mx-auto text-[24px] md:text-[48px] text-black font-bold">
            {data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionMainHeading}
          </h2>
          <p className="text-[16px] mt-6 text-black mx-auto">
            {data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionMainDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* First Box */}
          <div className="p-5 rounded-lg flex flex-col justify-between">
            <div className="h-[250px] flex flex-col justify-center">
              <h2 className="text-left text-[20px] text-black font-bold leading-[23px] mb-3 max-w-[377px]">
                {
                  data.page.leadershipPageFeilds.leadershipEightSectionFields
                    .leadershipEightSectionFirstRowFirstColumnHeading
                }
              </h2>
              <p className="text-black text-[16px] leading-[23px] text-left mb-5 max-w-[377px]">
                {
                  data.page.leadershipPageFeilds.leadershipEightSectionFields
                    .leadershipEightSectionFirstRowFirstColumnDescription
                }
              </p>
            </div>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowFirstImage
                  ?.node?.link
              }
              alt=""
              width={453}
              height={280}
              className="w-full h-[250px] object-cover rounded-md"
            />
          </div>

          {/* Second Box */}
          <div className="p-5 rounded-lg flex flex-col justify-between flex md:flex-col-reverse flex-col justify-center">
            <div className="h-[280px] flex flex-col justify-center">
              <h2 className="text-left text-[20px] text-black font-bold leading-[23px] mb-3 max-w-[377px]">
                {data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowThirdHeading}
              </h2>
              <p className="text-black text-[16px] leading-[23px] text-left max-w-[377px]">
                {
                  data.page.leadershipPageFeilds.leadershipEightSectionFields
                    .leadershipEightSectionFirstRowThirdDescription
                }
              </p>
            </div>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipEightSectionFields
                  .leadershipEightSectionFirstRowSecondColumnImage?.node?.link
              }
              alt=""
              width={453}
              height={280}
              className="w-full h-[250px] object-cover rounded-md mb-5 md:mb-0"
            />
          </div>

          {/* Third Box */}
          <div className="p-5 rounded-lg flex flex-col justify-between">
            <div className="h-[250px] flex flex-col justify-center">
              <h2 className="text-left text-[24px] text-black font-bold leading-[23px] mb-3">
                {
                  data.page.leadershipPageFeilds.leadershipEightSectionFields
                    .leadershipEightSectionSecondRowSecondHeading
                }
              </h2>
              <p className="text-black text-left">
                {
                  data.page.leadershipPageFeilds.leadershipEightSectionFields
                    .leadershipEightSectionSecondRowSecondDescription
                }
              </p>
            </div>
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowThirdImage
                  ?.node?.link
              }
              alt=""
              width={453}
              height={280}
              className="w-full h-[250px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="mt-[6rem]">
        <h2 className=" text-[24px] md:text-[48px] text-black font-bold text-left">
          {data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionMainHeading}
        </h2>
        <div className="flex flex-wrap md:flex-nowrap mt-15">
          <div className="flex flex-wrap md:flex-nowrap md:w-8/12 ">
            <div className="md:w-2/6 pt-0 w-full">
              <Image
                className="w-full"
                src={
                  data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionFirstColumnImage?.node
                    ?.link
                }
                alt=""
                width={251}
                height={251}
              />
            </div>
            <div className="md:w-4/6 p-0 py-10 md:py-0 md:px-20 [&>p]:mt-10">
              {parse(
                data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionSecondColumnText || '',
              )}
            </div>
          </div>
          <div className="md:w-4/12">
            <Image
              className=""
              src={
                data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionThirdColumnImage?.node?.link
              }
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <section className="my-[100px]">
        <div className="mx-auto">
          <div className=" mx-auto bg-[#F5F5F5] relative   max-w-[986px] w-full">
            {/* Left Content */}
            <div className="lg:w-[100%] text-left  flex flex-col gap-3 justify-center items-start lg:items-start p-0 md:p-15 relative md:h-[510px]">
              <Image src={'/bg.png'} layout="fill" objectFit="cover" alt={'Default title'} />
              <div className="flex items-center  pt-5 md:pt-0 pl-5 md:pl-0">
                {/* Icon or Circle */}
                <div className="w-[52px] h-[52px] z-9 bg-[#A1CF5F] rounded-full"></div>
                <div className="ml-[-20px] w-[52px] h-[52px] bg-white rounded-full"></div>
              </div>
              <h3 className="pl-5 md:pl-0 z-999 text-[16px] font-bold text-bold text-black uppercase mt-5">
                {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionSubheading}
              </h3>
              <h1 className="text-[32px] z-999  pl-5 md:pl-0 font-bold text-black mt-0">
                {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionMainHeading}
              </h1>
              <p className="text-black z-999  pl-5 md:pl-0 text-[16px] max-w-[400px]">
                {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionDescription}
              </p>
              {/* Button */}
              <Link
                href={data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionButtonLink}
                className="inline-flex z-999  items-center  mt-20 justify-center w-[132px] h-[40px] text-sm font-bold text-black bg-[#A1CF5F] hover:bg-green-600 rounded-md transition duration-200"
              >
                {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionButtonText}
                <span className="ml-2 text-lg">↗</span>
              </Link>
              <Image
                src={
                  data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionMainImage?.node
                    ?.link
                }
                width={603}
                height={510}
                alt=""
                className="md:absolute relative right-0 top-0 m-0 p-0"
              ></Image>
            </div>

            {/* <div className="relative mt-8 lg:mt-0 lg:w-[60%]">
         
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url('/path/to/blue-abstract-line.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              zIndex: -1,
            }}
          ></div>
        </div> */}
          </div>
        </div>
      </section>

      <VideoPlayer />

      <section className="bg-[#000000] mt-30">
        <div className="flex flex-wrap md:flex-nowrap px-10 py-10  md:px-15 mx-auto md:py-20 border-b border-[#252525]">
          <div className="w-full md:w-4/12">
            <h2 className="md:text-[18px] text-[10px] font-bold text-left text-white md:w-[80%] md:p-5 ">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionFirstColumnText}
            </h2>
          </div>
          <div className="w-full md:w-8/12 mt-10 md:mt-0">
            <h1 className="text-[24px] md:text-[48px] font-semibold leading-tight text-white  mb-6">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnHeading}
            </h1>
            <p className="text-white leading-relaxed mb-4">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription1}{' '}
            </p>
            <p className="text-white leading-relaxed mb-4">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription2}
              <Link href="/articles/alumni-story-serving-the-underbanked-to-end-the-cycle-of-poverty">
                <span className="text-[#A1CF5F] underline cursor-pointer">
                  {
                    data.page.leadershipPageFeilds.leadershipTenthSection
                      .leadershipTenthSectionSecondColumnDescriptionGreenColor
                  }
                </span>{' '}
              </Link>{' '}
              and more.
            </p>
            <p className="text-white leading-relaxed">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription3}{' '}
            </p>{' '}
            <br />
          </div>
        </div>
        <div className="px-10 md:px-15 py-10">
          <h2 className="md:text-[47px] text-[25px] font-bold text-left text-white md:max-w-[637px] md:p-5 leading-[30px] md:leading-[49px]">
            {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionMainHeading}
          </h2>
          <div className="flex flex-wrap md:flex-nowrap mt-10">
            <div className="md:w-5/12 w-full  md:pl-0 md:pr-0 md:pt-0 pt-20 relative">
              <div className="m-5 pb-3">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[0]
                      .leadershipEleventhFirstImage?.node?.link
                  }
                  className="mx-auto md:mx-0"
                />
                <h5 className="text-white text-[18px] w-[70%] md:text-left text-center">
                  {
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[0]
                      .leadershipEleventhFirstText
                  }
                </h5>
              </div>
              <div className="m-5  pb-3">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[1]
                      .leadershipEleventhFirstImage?.node?.link
                  }
                  className="mx-auto md:mx-0"
                />
                <h5 className="text-white text-[18px] w-[70%] md:text-left text-center">
                  {
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[1]
                      .leadershipEleventhFirstText
                  }
                </h5>
              </div>
              <div className="m-5  pb-3">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[2]
                      .leadershipEleventhFirstImage?.node?.link
                  }
                  className="mx-auto md:mx-0"
                />
                <h5 className="text-white text-[18px] w-[70%] md:text-left text-center">
                  {
                    data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[2]
                      .leadershipEleventhFirstText
                  }
                </h5>
              </div>
            </div>

            <div className="w-full md:w-9/12 pb-10 md:pl-[30px]">
              <Image
                className=""
                alt=""
                width={900}
                height={466}
                src={
                  data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondImage?.node
                    ?.link
                }
              />

              <p className="w-full md:w-[45%] text-gray-300 leading-relaxed my-8">
                {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondDescription}
              </p>
              <Link
                href={
                  data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondButtonLink
                }
                className="bg-[#A1CF5F] mb-10  text-black font-semibold py-2 px-4 rounded "
              >
                {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondButtonText}
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:w-[85%] mx-auto py-20 mt-[50px]">
        <h1 className="md:text-[48px] text-[24px] w-full md:w-[40%] font-bold leading-[30.09px] md:leading-[58.09px] text-[#000000] mb-6">
          {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}
        </h1>
        <div className="flex flex-wrap md:flex-nowrap mt-15 gap-10 mb-15 [&>div>div>p]:mb-5">
          <div className="w-full md:w-1/2">
            <div className="text-[#000000] leading-relaxed mb-4">
              {parse(
                data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionFirstRowFirstColumn ||
                  '',
              )}
            </div>
            {/* <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}  </p>
                <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading} </p>*/}
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-[#000000] leading-relaxed mb-4">
              {' '}
              {parse(
                data.page.leadershipPageFeilds.leadershipTwelfthSection
                  .leadershipTwelfthSectionFirstRowSecondColumnDescription || '',
              )}
            </div>
            {/* <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}  </p> */}
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 grid p-[0] items-center">
            <div>
              <h2 className="text-[#000000] font-bold">
                {
                  data.page.leadershipPageFeilds.leadershipTwelfthSection
                    .leadershipTwelfthSectionSecondRowFirstColumnHeading
                }
              </h2>
              <hr className="w-[50%] my-5 " />
              <p className="text-[#000000] leading-relaxed max-w-[301px]">
                {
                  data.page.leadershipPageFeilds.leadershipTwelfthSection
                    .leadershipTwelfthSectionSecondRowFirstColumnDescription
                }
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipTwelfthSection
                  .leadershipTwelfthSectionSecondRowSecondColumnImage2?.node?.link
              }
              className=""
              alt=""
              width={825}
              height={259}
            />
            <Image
              src={
                data.page.leadershipPageFeilds.leadershipTwelfthSection
                  .leadershipTwelfthSectionSecondRowSecondColumnImage1?.node?.link
              }
              className="absolute top-[20px] left-[-70px] "
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[850px] md:text-[40px] text-[20px]  font-bold text-center text-black  p-5 mx-auto md:leading-normal ">
          {data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionHeading}
        </h1>
        <Link
          href={data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionButtonLink}
          className="mx-auto flex w-fit  items-center gap-2.5  bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
        >
          {data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionButtonText}
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
      </section>
      <LastFiveSection />

      <Newsletter />
      {/* Gurpreet end */}
    </div>
  )
}

export default page
