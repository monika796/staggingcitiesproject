'use client'
import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'
import donation from '/public/109.png'

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo1MTQ=") {
      donatePageFeilds {
        donateSecondSectionLeftButtonLink
        donateSecondSectionLeftButtonText
        donateSecondSectionLeftDescription
        donateSecondSectionLeftHeading
        donateSecondSectionRightImage {
          node {
            link
          }
        }
        donateSecondSectionLeftFaqs {
          donateFaqDescription
          donateFaqTitle
          fieldGroupName
        }
      }
    }
  }
`

const DonationFaq = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  if (loading) {
    return
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <section className="container mx-auto md:py-18 py-10 max-w-[1480px]">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="md:w-1/2 w-full p-[20px] md:p-[48px] rounded-[30px] border border-[#dcdcdc] md:m-[0] m-0 ">
          <h1 className="text-[32px] md:text-[76px] text-[#000000] font-normal text-center leading-[51px]">
            $
            <span className="!text-[#cccccc]">
              <input
                type="tel"
                className="text-[#000000] w-[200px] border p-2 w-full rounded-md focus:outline-none focus:border-none"
                placeholder="0.00"
                pattern="[0-9]*" // Allows only numbers
              />{' '}
              {data.page.donatePageFeilds.donateSecondSectionLeftHeading}
            </span>
          </h1>
          <h4 className="text-[20px] w-full md:w-[50%] font-bold leading-[24.2px] text-center m-auto py-5">
            {data.page.donatePageFeilds.donateSecondSectionLeftDescription}
          </h4>
          <div className="w-full max-w-md mx-auto mt-10">
            <div className="mx-auto bg-white border border-solid border-[#e6e6e7] rounded-[5px]">
              {data.page.donatePageFeilds.donateSecondSectionLeftFaqs.map((faq, index) => (
                <div key={index} className="mb-2 !text-[#000000] border-b border-solid border-[#e6e6e7]">
                  <button className="w-full text-left p-4 rounded" onClick={() => toggleAccordion(index)}>
                    {faq.donateFaqTitle}
                  </button>
                  <div className={`overflow-hidden ${activeIndex === index ? 'max-h-96 p-4' : 'max-h-0'} bg-white`}>
                    <p className="text-[#000000]">{faq.donateFaqDescription}</p>
                  </div>
                </div>
              ))}
              <Link href={data.page.donatePageFeilds.donateSecondSectionLeftButtonLink}>
                <button className="mx-auto flex w-[90%] m-5 text-center justify-center mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
                  {data.page.donatePageFeilds.donateSecondSectionLeftButtonText}
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
        </div>
        <div className="w-1/2">
          <Image src={donation} width="733" height="791" alt=""></Image>
        </div>
      </div>
    </section>
  )
}

export default DonationFaq
