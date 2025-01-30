import Newsletter from '@/components/Newsletter'
import VideoPlayer from '@/components/Bookvideosection'
import Partner from '@/components/partner'
import Image from 'next/image'
import Link from 'next/link'
import MainComponent from '@/components/LightboxPdf'
import { BOOK_PAGE_QUERY } from '@/queries/queries'
import Head from '../head'
import { fetchData } from '@/lib/fetchData'
export const revalidate = 60 // revalidate at most every 5 minutes

export default async function Book() {
  const data = await fetchData(BOOK_PAGE_QUERY)
  return (
    <main className="container mx-auto max-w-[1480px]">
      <Head data={data} />
      <h1 className="md:text-[60px] text-[25px] font-bold text-center text-black md:max-w-[1178px] mx-auto md:leading-[77.45px] mt-15">
        {data.page.bookPageFeilds.bookFirstSectionMainHeading}
      </h1>
      <section className="md:py-[42px] md:p-0 p-3">
        <Image
          src={data.page.bookPageFeilds.bookSecondSectionImage?.node?.link}
          className=" mx-auto"
          alt=""
          layout="responsive"
          width={16}
          height={9}
        />
      </section>
      <div className="container mx-auto  md:max-w-[1280px]">
        <div className="flex md:flex-row-reverse sm:flex-col flex-col">
          <div className="md:w-5/12">
            <Image
              src={data.page.bookPageFeilds.bookThirdSectionLeftImage?.node?.link}
              className="mx-auto object-contain md:h-[50vh] sm:h-[30vh] sm:w-[100%]"
              alt=""
              // layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
          <div className="md:w-7/12 md:pt-20 md:pl-10 pl-0 ">
            <h2 className="font-bold text-gray-800 text-center md:text-left text-3xl md:text-[48px] text-[25px] leading-tight mb-4">
              {' '}
              {data.page.bookPageFeilds.bookThirdSectionRightHeading}
            </h2>
            <div
              className="text-black text-[16px] md:text-[18px] md:text-lg text-center  md:text-left md:leading-loose mb-6 [&>p]:mb-4"
              dangerouslySetInnerHTML={{ __html: data.page.bookPageFeilds.bookThirdSectionRightDescription }}
            />
            <div className="md:flex gap-2">
              <Link href={data.page.bookPageFeilds.bookThirdSectionRightButtonOneLink.url} target="_blank">
                {' '}
                <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                  {data.page.bookPageFeilds.bookThirdSectionRightButtonOne}
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
              <br className="hidden md:block" />
              <div className="hidden max-w-fit mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                <MainComponent
                  extraclass=""
                  buttonText={data.page.bookPageFeilds.bookThirdSectionRightButtonTwo} // Pass dynamic text as prop
                  pdfUrl="/SampleChapter.pdf#scrollbar=0" // Pass the dynamic PDF URL
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src={`/api/proxy`} // Use the dynamic PDF URL passed as a prop
        width="100%"
        height="100%"
        title="PDF Viewer"
        className="border-0 rounded-lg lg:aspect-video lg:h-[70vh] sm:h-[35vh] mt-13 mb-13"
      ></iframe>

      <div className="container mx-auto  md:py-15">
        <div className="md:flex md:flex-wrap lg:flex-nowrap">
          <div className="lg:w-2/5 md:w-[50%]  bg-[#000000] p-20 grid justify-center items-center md:h-[250px]">
            <h2 className="font-bold text-white  md:w-[85%] text-center md:text-left md:text-[24px] text-[24px] leading-tight">
              {' '}
              {data.page.bookPageFeilds.bookFourthSectionFirstColumnText}
            </h2>
          </div>
          <div className="lg:w-1/5 md:w-[50%] md:m-0 m-5 md:mx-0 mx-0 md:p-[0] grid justify-center items-center border border-[#DFDFDF] md:h-[250px]">
            <Image
              src={data.page.bookPageFeilds.bookFourthSectionSecondColumnImage?.node?.link}
              alt=""
              layout=""
              width={150}
              height={200}
            ></Image>
          </div>
          <div className="lg:w-1/5 md:w-[50%]  md:m-0 m-5 md:mx-0 mx-0 md:p-[0] grid justify-center items-center border border-[#DFDFDF] md:h-[250px]">
            <Image
              src={data.page.bookPageFeilds.bookFourthSectionThirdColumnImage?.node?.link}
              alt=""
              layout=""
              width={150}
              height={200}
            ></Image>
          </div>
          <div className="lg:w-1/5  md:w-[50%]  md:m-0 m-5 md:mx-0 mx-0 md:p-[0] grid justify-center items-center border border-[#DFDFDF] md:h-[250px]">
            <Image
              src={data.page.bookPageFeilds.bookFourthSectionFourthColumnImage?.node?.link}
              alt=""
              layout=""
              width={150}
              height={200}
            ></Image>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-10 md:mb-0">
        <section className="mx-auto grid gap-10 py-20 ">
          <Image alt="" width={80} height={80} src="/76.png" className="mx-auto" />
          <h3
            className={`md:text-[38px] text-[20px] font-normal text-center text-[#000000] md:leading-normal md:w-[75%] md:max-w-[1,108px] mx-auto`}
          >
            {data.page.bookPageFeilds.bookFifthReviewSectionHeading}
          </h3>
          <h4 className={` text-[20px] font-normal  text-center text-[#000000]`}>
            {data.page.bookPageFeilds.bookFifthReviewSectionDescription}
          </h4>
        </section>
      </div>

      <VideoPlayer />

      <div className="container mx-auto md:py-15">
        <h2 className="font-bold text-black mx-auto text-center  md:max-w-[800px] md:text-[48px] text-[25px] leading-tight mb-4">
          {data.page.bookPageFeilds.bookSeventhSectionMainHeading}
        </h2>
        <div className="md:flex">
          {/* <div className="md:w-1/2  ">
            <div className="md:flex gap-5 ">
              <Link href={data.page.bookPageFeilds.bookSeventhSectionButtonOneLink} target="_blank">
                <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                  {data.page.bookPageFeilds.bookSeventhSectionButtonOneText}
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
              <br className="hidden md:block" />
            </div>
          </div> */}
          <div className="md:w-full md:max-w-[70vh] mx-auto">
            {/* <p className="font-normal text-2xl text-black pt-2 pb-3">
              {data.page.bookPageFeilds.bookSeventhSectionDescription1}{' '}
            </p>
            <p className="font-normal text-2xl text-black pb-10">
              {data.page.bookPageFeilds.bookSeventhSectionDescription2}
            </p> */}
            <div
              className="font-normal text-2xl text-black pb-3  [&>p]:mb-4 text-justify"
              dangerouslySetInnerHTML={{ __html: data.page.bookPageFeilds.bookSeventhSectionDescription3 }}
            />
            <h5
              className=" text-[20px] font-normal  text-center text-[#000000]"
              dangerouslySetInnerHTML={{ __html: data.page.bookPageFeilds.bookSeventhSectionDescription4 }}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-15">
        <div className="flex flex-col md:flex-row sm:flex-col-reverse">
          <div className="md:w-1/2 p-2 relative">
            <h2 className="font-bold text-black text-center md:text-left w-full  md:w-[75%] text-[25px] md:text-[48px] leading-tight mb-4">
              {' '}
              {data.page.bookPageFeilds.bookEigthSectionMainHeading}
            </h2>
            <div
              className="font-normal text-center md:text-left text-[16px] text-black md:pb-10 md:pr-10 [&>p]:mb-4"
              dangerouslySetInnerHTML={{ __html: data.page.bookPageFeilds.bookEigthSectionMainLeftDescription }}
            />
            <Image
              src={data.page.bookPageFeilds.bookEigthSectionMainLeftImage?.node?.link}
              className="hidden"
              alt=""
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 p-2">
            <Image
              src={data.page.bookPageFeilds.bookEigthSectionMainRightImage?.node?.link}
              className="md:p-0 pb-0"
              alt=""
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-15 md:p-0 p-3">
        <div className="md:flex ">
          <div className="md:w-[45%] p-2 relative">
            <h2 className="font-bold text-black text-center md:text-left  md:w-[75%] md:text-[33px] text-[28px] leading-tight mb-4">
              {data.page.bookPageFeilds.bookNinthSectionMainLeftHeading}
            </h2>
          </div>
          {/* <div className="md:w-1/2 p-2">
            <p className="font-normal text-[14px] text-center md:text-left  md:w-[48%] float-right  text-black pb-3">
              
            </p>
          </div> */}
        </div>
        <div className="md:flex md:mt-[90px] gap-6">
          <div className="">
            <Image
              src={data.page.bookPageFeilds.bookNinthSectionLeftImage?.node?.link}
              alt=""
              width={800}
              height={800}
              className="object-contain w-[100%]"
            ></Image>
          </div>
          <div className=" relative">
            <div className="md:flex md:absolute top-[-20%] md:w-[95%] right-0">
              <div className="md:w-2/3  grid items-center p-6 bg-[#B8EA81]">
                <p className="text-[#000000] text-center md:text-left  text-[18px]">
                  {data.page.bookPageFeilds.bookNinthSectionMainRightDescription}
                  <br />
                  <br />
                  {data.page.bookPageFeilds.bookNinthSectionRightFirstColumnText}
                </p>
              </div>
              <div className="md:w-1/3  grid items-center  p-6 bg-[#000000]">
                <div>
                  {' '}
                  <p className="text-white  text-center md:text-left text-[14px] mb-4">
                    {data.page.bookPageFeilds.bookNinthSectionRightSecondColumnText}
                  </p>
                  <Link href={data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonLink}>
                    {' '}
                    <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                      {data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonText}
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
            <Image
              src={data.page.bookPageFeilds.bookNinthSectionRightImage?.node?.link}
              alt=""
              width={1018}
              height={436}
            ></Image>
          </div>
        </div>
      </div>

      <Partner />

      <Newsletter />
    </main>
  )
}
