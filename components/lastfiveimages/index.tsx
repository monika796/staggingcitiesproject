import { gql } from '@apollo/client'
import React from 'react'
import Image from 'next/image'
import client from 'apollo-client'
import Link from 'next/link'

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo2MDg=") {
      leadershipPageFeilds {
        vantageFormThirdSection {
          vantageFormThirdSectionImage1 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage2 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage3 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage4 {
            node {
              link
            }
          }
          vantageFormThirdSectionImage5 {
            node {
              link
            }
          }
        }
      }
    }
  }
`

async function fetchData() {
  const { data } = await client.query({
    query: POSTS_QUERY,
  })
  return data
}
export default async function LastFiveSection() {
  const data = await fetchData()

  return (
    <section>
      <div className="flex justify-center mx-auto w-fit gap-3 my-40">
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage1?.node?.link}
          />
        </div>
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage2?.node?.link}
          />
        </div>
        <div className=" ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage3?.node?.link}
          />
        </div>
        <div className="] ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage4?.node?.link}
          />
        </div>
        <div className="  ">
          <Image
            alt=""
            height={1000}
            width={1000}
            className=""
            src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage5?.node?.link}
          />
        </div>
      </div>
    </section>
  )
}
