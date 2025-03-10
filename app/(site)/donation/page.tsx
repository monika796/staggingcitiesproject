import Newsletter from '@/components/Newsletter'
import { Anton } from 'next/font/google'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { gql } from '@apollo/client'
import client from 'apollo-client'
import DonationFaq from '@/components/DonationFaqSecition'
import Image from 'next/image'
import Link from 'next/link'
import donation from '/public/109.png'
import DonationWizard from '@/components/DonationForm'
import { fetchData } from '@/lib/fetchData'
import Head from '../head'
import { DONATION_PAGE_QUERY } from '@/queries/queries'
export const revalidate = 60 // revalidate at most every 5 minutes
const anton = Anton({ weight: '400', subsets: ['latin'] })

export default async function Book() {
  // const data = await fetchData(POSTS_QUERY)
  const data = await fetchData(DONATION_PAGE_QUERY)
  return (
    <main className="md:w-[90%] pt-10  mx-auto max-w-[1480px]">
      <Head data={data} />
      <h1 className="md:py-[15px] pt-10 py-[10px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%]     mx-auto md:leading-[49px] ">
        {' '}
        {data.page.donatePageFeilds.donateFirstSectionMainHeading}
      </h1>
      <h5 className="text-[18px]  text-black md:w-[52%] mx-auto text-center">
        {' '}
        {data.page.donatePageFeilds.donateFirstSectionMainDescription}
      </h5>
      {/* <DonationFaq /> */}
      <section className="container mx-auto md:py-18 py-10 max-w-[1480px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-10">
          <div className="lg:w-1/2 grid  w-full p-[20px] md:p-[48px] rounded-[30px] border border-[#dcdcdc] md:m-[0] m-0 ">
            <DonationWizard
              heading={data.page.donatePageFeilds.donateSecondSectionLeftHeading}
              description={data.page.donatePageFeilds.donateSecondSectionLeftDescription}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <Image src={donation} width="733" height="791" alt=""></Image>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1480px]">
        <div className="w-full md:w-[70%] mx-auto">
          <div className="grid items-end justify-end ">
            <Image
              src={data.page.donatePageFeilds.donateThirdSectionImage?.node?.link}
              alt=""
              layout="responsive"
              width={16}
              height={9}
              className=""
            ></Image>
          </div>
          <div className="grid gap-3">
            <Image alt="" width={70} height={70} src="/76.png" />
            <h3
              className={`${anton.className} w-full md:w-[65%]  text-center md:text-left md:text-[40px] text-[30px] text-black font-light leading-[50px]`}
            >
              {data.page.donatePageFeilds.donateThirdSectionHeading}
            </h3>
            <p className={`${anton.className} text-[27px] text-[#A1CF5F] font-normal leading-[48.99px] text-left `}>
              {' '}
              {data.page.donatePageFeilds.donateThirdSectionSubheading}
            </p>
            <hr className="w-[5%] m-0 " />
            <h5 className="text-[18px] text-black md:w-[55%] mx-auto text-center md:text-left">
              {' '}
              {data.page.donatePageFeilds.donateThirdSectionDescription}
            </h5>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1480px]">
        <div className="flex p-0 md:p-10">
          <div className="w-2/3">
            <Image
              src={data.page.donatePageFeilds.donateFourthSection?.node?.link}
              className="w-[80%]"
              alt=""
              width={740}
              height={439}
            ></Image>
          </div>
          <div className="relative w-1/3">
            <Image
              src={data.page.donatePageFeilds.donateFourthSectionSecondImage?.node?.link}
              className="absolute bottom-0 right-0"
              alt=""
              layout="responsive"
              width={16}
              height={9}
            ></Image>

            <Image alt="" width={220} height={220} src="/116.png" className="absolute bottom-[30%] left-[-23%]" />
          </div>
        </div>
        <div className="">
          <Image
            src={data.page.donatePageFeilds.donateFourthSectionThirdImage?.node?.link}
            className="w-[15%] mx-auto"
            alt=""
            width={740}
            height={439}
          ></Image>
        </div>
      </section>
      <section className="relative  bg-[#A1CF5F] my-20">
        <Marquee className="absolute z-99999 text-white">
          {data.page.donatePageFeilds.donate_fourth_section_scrolltext}{' '}
        </Marquee>
      </section>
      <section className="container mx-auto py-5 max-w-[1480px]">
        <div className="mx-auto text-[30px] pb-8 text-black w-full  md:w-[32%] leading-[33px] italic font-bold text-left ">
          {data.page.donatePageFeilds.donateFifthSectionHeading}
        </div>
        <div className="flex flex-wrap md:flex-no-wrap">
          <div className="md:w-1/3 w-full"></div>
          <div className="md:w-2/3  w-full">
            <h5 className="text-[18px] text-black md:w-[58%] italic mx-auto text-left">
              {data.page.donatePageFeilds.donateFifthSectionDescription}

              <Link href={data.page.donatePageFeilds.donateFifthSectionLink}>
                {' '}
                <button className="flex w-fit mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[15px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
                  {data.page.donatePageFeilds.donateFifthSectionButtonText}
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
            </h5>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
