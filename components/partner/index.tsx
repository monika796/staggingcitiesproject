import { Anton } from 'next/font/google'
import { gql } from '@apollo/client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchData } from '@/lib/fetchData'
const PARTNER_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      patnerssection {
        linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image2 {
          node {
            link
          }
        }
        image3 {
          node {
            link
          }
        }
        image4 {
          node {
            link
          }
        }
        image5 {
          node {
            link
          }
        }
        image6 {
          node {
            link
          }
        }
        image7 {
          node {
            link
          }
        }
        image8 {
          node {
            link
          }
        }
        partnerImages {
          partnerImages {
            addPartnersImages {
              node {
                link
              }
            }
          }
        }
        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            link
          }
        }
      }
    }
  }
`

export default async function Partner() {
  const data = await fetchData(PARTNER_QUERY)

  const { patnerssection, homesixthsection } = data.page
  const partner_immm = data.page.patnerssection.partnerImages.partnerImages

  return (
    <div className="container mx-auto max-w-[1280px]">
      <section className="md:pt-[150px] pt-[50px] border border-x-0 border-y-stroke py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto  px-4 md:px-8 2xl:px-0">
          <h5 className="md:text-[64px] text-[30px] leading-[37px] text-black text-center md:pb-[30px] font-bold pb-2">
            {data.page.patnerssection.mainheading}
          </h5>
          <h5
            className="text-[15px] text-black text-center"
            dangerouslySetInnerHTML={{ __html: data.page.patnerssection.firstsubtitlepatner }}
          />
          <div className="  grid md:grid-cols-5 grid-cols-2  items-center sm:flex sm:flex-wrap justify-center gap-5 md:w-[100%] lg:w-[100%] mx-auto pt-[29px]">
            {partner_immm.map((partner_images, index) => (
              <div
                key={index}
                className="p-5 border border-[#e3e2e2] h-[160px] grid items-center grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:border-[#a1cf5f] hover:shadow-md"
              >
                <Image
                  src={partner_images.addPartnersImages?.node?.link || '/No_Image.jpg'}
                  alt=""
                  width={120}
                  height={120}
                  className="object-contain "
                />
              </div>
            ))}
          </div>

          <div className="relative text-black pt-10">
            <div className="text-center">
              <h5 className="text-[20px] font-bold pb-2">
                {data.page.patnerssection.textninthbox} -{' '}
                <Link href={data.page.patnerssection.linknithbox} className="underline">
                  {data.page.patnerssection.linktextninthbox}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
