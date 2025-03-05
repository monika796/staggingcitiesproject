import { Metadata } from 'next'
import Slider from 'react-slick'
import Testimonial from '@/components/Testimonial'
import VideoCarousel from '@/components/videotestemonial'
import Newsletter from '@/components/Newsletter'
// import PostSlider from '@/components/PostSlider'
import StoriesSliderHome from '@/components/PostSlider'
import { Suspense, useContext } from 'react'
import { DocumentNode, gql, useQuery } from '@apollo/client'
import { Anton } from 'next/font/google'
// import client from 'apollo-client'
import Partner from '@/components/partner'
import SwiperSection from '@/components/postbannerslider'
import ReactPlayer from 'react-player'
const anton = Anton({ weight: '400', subsets: ['latin'] })
import Video_gif from '/public/video.gif'
import Demo from '/public/84.png'
import Image from 'next/image'
import Link from 'next/link'
import HomeAboutTheBook from '@/components/HomeAboutthebook'
// import NewBannerSlider from '@/components/HeroBanner' // Import client component
import VideoPopup from '@/components/SecondHomeVideoButton'
import Head from './head'
import {
  HOME_PAGE_QUERY,
  STORIES_QUERY,
  TESTIMONIAL_QUERY,
  HOME_VIDEO_QUERY,
  HOME_HERO_NEWS_QUERY,
} from '@/queries/queries'
import MainComponent from '@/components/LightboxPdf'
import { fetchData } from '@/lib/fetchData'
export const revalidate = 60 // revalidate at most every 5 minutes
export const fetchCache = 'force-no-store';

// export const metadata: Metadata = {
//   title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
//   description: "This is Home for Solid Pro",
//   // other metadata
// };

const ThreeStatement = ({ subtitle, heading, paragraph, image, imageAlignment }) => {
  return (
    <div
      className={`md:w-10/12  lg:w-6/12 md:flex md:items-center md:justify-center grid gap-4 ${
        imageAlignment === 'left' ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="md:w-6/12 order-2 md:order-1  mt-4 md:mt-0 mb-10 md:mb-0">
        <span className="text-[13px] bg-[#a1cf5f] text-black text-center mx-auto block md:inline md:mx-0  w-[55%] rounded-[20px] px-3 py-1 font-bold">
          {subtitle}
        </span>
        <h5 className="text-[20px] pt-3  text-black text-center md:text-left font-bold">{heading}</h5>
        <p className="text-[16px] text-black text-center md:text-left leading-normal  mt-3 ">{paragraph}</p>
      </div>
      <div className="order-1 md:order-2 md:flex md:w-[220px] md:h-[245px] block w-full mx-auto">
        <Image src={image} alt="" className="object-cover rounded-md block mx-auto" width={300} height={300} />
      </div>
    </div>
  )
}
// async function fetchData(query: DocumentNode = HOME_PAGE_QUERY) {
//   const { data } = await client.query({
//     query,
//     fetchPolicy: 'cache-first',
//   })
//   return data
// }

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// }
export default async function Home() {
  const data = await fetchData(HOME_PAGE_QUERY)
  const stories = await fetchData(STORIES_QUERY)
  const testimonials = await fetchData(TESTIMONIAL_QUERY)
  const videos = await fetchData(HOME_VIDEO_QUERY)
  const heroNews = await fetchData(HOME_HERO_NEWS_QUERY)

  // console.log('heroNews::::', heroNews)

  return (
    <main className="mt-[-96px]">
      <Head data={data} />
      {/* body start */}
      {/* <NewBannerSlider banners={data.page.homeExtraBanner.homeBannerSecond} /> */}

      <section className="w-full">
        <div className="container-fluid mx-auto">
          <div className="hero-section relative w-full bg-cover bg-center h-[90vh] md:h-[850px]">
            {' '}
            <Image
              src={data.page.bannerHome.banner?.node?.link}
              layout="fill"
              alt="Programming meme"
              className="object-cover"
            />
            <div className="md:container md:relative absolute bottom-0 md:max-w-[1480px] mx-auto h-[250px] md:h-[780px] w-full">
              <div className="absolute md:top-[61%] md:-translate-y-1/2 text-white mx-8 ">
                {data.page.bannerHome.subtitleupper && (
                  <>
                    <span className="uppercase	inline-block text-[10px] md:text-[14px] bg-[#fff] text-black leading-none text-center  w-[auto] mb-[20px]  font-bold	py-1 px-2">
                      {data.page.bannerHome.subtitleupper}
                    </span>
                    <br />
                  </>
                )}
                <strong
                  className={`${anton.className} block uppercase md:text-[126px]  leading-[50px] text-[47px] font-light xl:leading-[130px]  md:leading-none`}
                >
                  {data.page.bannerHome.textBanner}
                  <br className="hidden md:block" />
                  {data.page.bannerHome.textBanner2}
                  <br className="hidden md:block" />
                  {data.page.bannerHome.textBanner3}
                </strong>
                <p className="mt-2 md:mb-10 mb-10 md:w-[50%] font-light xl:leading-6 md:leading-none">
                  {data.page.bannerHome.subtitle_bottom}{' '}
                </p>
                <Link
                  href={data.page.bannerHome.buttonLinkBannerHome}
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                  {data.page.bannerHome.buttonText}
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
              <div className="hidden md:block absolute right-[17px] md:right-[55px]  md:max-w-[427px]   bottom-[8px]  w-[40%] swiper-slider">
                <SwiperSection data={heroNews} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="discover-design-section w-full relative bg-cover bg-center pt-[100px] md:pt-0"
        // style={{ backgroundImage: `url('${data.page.bannerHomesecond.bannersecondbackground?.node?.link}')` }}
      >
        <div className="container mx-auto max-w-[1480px]">
          <Image
            src={data.page.bannerHomesecond.bannersecondbackground?.node?.link || '/default-image.jpg'} // Fallback image
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-50"
            alt="Default title" // Provide a fallback title
          />
          <div className="flex  md:p-[0px] md:pb-[280px] md:pt-[25px] lg:p-[20px] lg:pb-[280px] 2xl:p-[105px] 2xl:pb-[280px]  flex-col md:flex-row h-full">
            <div className=" w-full md:w-1/2 p-4 md:p-2 flex flex-col justify-center">
              <h2 className="font-bold text-gray-800 text-3xl md:text-[56px] leading-tight mb-4">
                {data.page.bannerHomesecond.heading_second_section}
              </h2>
              <p
                className="max-w-[400px] md:text-[15px] text-black	leading-loose mb-6 mt-4"
                dangerouslySetInnerHTML={{ __html: data.page.bannerHomesecond.subtitleText }}
              />
              <div className="flex-col md:flex-row md:mx-0 hidden md:block ">
                <VideoPopup
                  videoUrl={data.page.bannerHomesecond.buttonLinkSecondSection}
                  buttonText={data.page.bannerHomesecond.buttonText}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2  bg-cover bg-center ">
              <div className="inner_Sec_div relative">
                <div className="md:flex flex-col ">
                  <div className="flex gap-3 bg-white md:items-end md:w-4/12 md:max-w-[237px] max-w-none md:h-[250px] bottom-0 relative p-2 xl:p-4 h-auto md:absolute border border-solid border-black rounded-md mx-4 md:mx-0">
                    <div>
                      {' '}
                      <p className="font-bold text-black  mb-3 text-[20px] xl:w-[157px]">
                        {' '}
                        {data.page.bannerHomesecond.rightsmallsectiontext}
                      </p>
                      <Link href={data.page.bannerHomesecond.rightsmallsectionlink}>
                        <p className="text-black text-[15px] underline">
                          {' '}
                          {data.page.bannerHomesecond.rightsmallsectionlinktext}
                        </p>
                      </Link>
                    </div>
                    <svg
                      className="absolute top-[15px] right-[15px]"
                      width="17"
                      height="17"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="w-full md:w-8/12 self-end p-4">
                    <Image
                      src={data.page.bannerHomesecond.secondRightImage?.node?.link}
                      className="rounded-md"
                      width={350}
                      height={470}
                      alt="Leadership Circle Program"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto  max-w-[1480px] ">
        <div className="w-[100%] md:mt-[-130px] mt-[50px] mx-auto flex flex-col md:flex-col lg:flex-row border border-black border-solid ">
          <div className=" flex flex-col md:flex-row md:w-full lg:w-6/12 bg-white ">
            <div className="w-6/12 relative bg-no-repeat bg-cover w-auto bg-bottom  md:w-[400px] lg:w-[256px]  md:h-[313px] lg:h-[100%]   border-t border-transparent ">
              <Image
                src={`${data.page.sectionHomethird.firstcolumnimage?.node?.link}`}
                alt="Background Image"
                layout="fill" // This will make the image cover the div area
                objectFit="cover" // Ensure the image is scaled to cover the div
                className="object-cover" // Optional: Add styles like border radius
              />
            </div>
            <div className="md:w-6/12 md:pl-[30px] py-4 gap-0  text-left md:text-left px-4 md:px-6">
              <h1 className="text-[32px]  text-black leading-none mt-3 ">
                {data.page.sectionHomethird.firstcolumnheading}
              </h1>
              <h5 className="text-[16px] text-black font-bold mt-2">{data.page.sectionHomethird.subtitletextfirst}</h5>
              <hr className="w-[38px] border-black mt-2" />
              <p className="text-[14px] text-black leading-normal my-5">{data.page.sectionHomethird.buttontxtfirst}</p>
              <p className="text-[14px] text-black leading-normal mb-3">
                <b> Date:</b> November 15, 2024 <br />
                <b>Time:</b> 10:00 AM - 12:00 PM
              </p>
              <div className="flex max-w-fit md:mt-7 mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] mt-3 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg">
                <MainComponent
                  extraclass={']'}
                  buttonText="Sign up"
                  pdfUrl="/api/proxy?url=https://backend.citiesprojectglobal.com/event-signup/"
                />

                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                    fill="black"
                  />
                </svg>
              </div>
              {/* <Link href={data.page.sectionHomethird.buttonLink1ThirdSection}>
                {' '}
                
              </Link> */}
            </div>
          </div>

          <div className="md:w-full lg:w-6/12 flex flex-col md:flex-row ">
            <div className="md:w-6/12  md:text-left text-left py-4 px-7 bg-[#224334]">
              <h3 className="text-[32px] text-white  leading-none mt-3">
                {data.page.sectionHomethird.secondcolumnheading}
              </h3>
              <h5 className="text-[16px] text-white font-bold  mt-2">
                {data.page.sectionHomethird.subtitletextsecond}
              </h5>
              <hr className="w-[38px] md:mx-0 mt-3" />
              <div className="flex flex-row  md:gap-[10px] gap-[28px] items-end justify-between md:items-start mt-10 md:mt-22  md:flex-wrap-reverse">
                <Link href={data.page.sectionHomethird.buttonLink2ThirdSection}>
                  {' '}
                  <button className="w-[150px] flex items-center gap-2.5 justify-center   px-1 md:px-3 float-left bg-[#A1CF5F] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px] mb-2">
                    {data.page.sectionHomethird.buttontxtsecond}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </Link>
                <Image
                  src={data.page.sectionHomethird.secondcolumnimage?.node?.link}
                  className="object-cover w-[106px] h-[106px]"
                  alt="Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="md:w-6/12 py-4 px-7  md:text-left  bg-[#a1cf5f]">
              <h3 className="text-[32px] text-black   leading-none mt-3">
                {data.page.sectionHomethird.thirdcolumnheading}
              </h3>
              <h5 className="text-[16px] text-black font-bold  mt-2">{data.page.sectionHomethird.subtitletextthird}</h5>
              <hr className="w-[38px] md:mx-0 mt-3 border-black" />
              <div className="flex flex-row  md:gap-[10px] gap-[28px] items-end  justify-between md:items-start mt-10 md:mt-22 md:flex-wrap-reverse">
                <Link href={data.page.sectionHomethird.buttonLink3ThirdSection}>
                  {' '}
                  <button className="w-[150px] flex items-center gap-2.5 justify-center  px-1  md:px-3 float-left bg-[#FFFFFF] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px] mb-2">
                    {data.page.sectionHomethird.buttontxtthird}{' '}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                        fill="black"
                      />
                    </svg>
                  </button>{' '}
                </Link>
                <Image
                  src={data.page.sectionHomethird.thirdcolumnimage?.node?.link}
                  alt=""
                  width={100}
                  height={100}
                  className="object-cover w-[106px] h-[106px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative container  mx-auto max-w-[1580px]">
        <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md z-1"></div>
        <div className="relative container w-[100%] max-w-[1480px] mx-auto pt-[30px] z-9 md:pt-[150px] md:pb-[100px]">
          <h1
            className=" px-5 md:px-0 text-[25px] md:max-w-[1062px] md:mx-auto  md:text-[48px] pb-5 mt-10 md:mt-0 md:pb-15 text-black font-bold leading-[30.09px] md:leading-[46.09px] text-center"
            dangerouslySetInnerHTML={{ __html: data.page.homefourtsection.mainheadingfourth }}
          />

          <div className="md:pl-20 flex">
            <ThreeStatement
              imageAlignment="left"
              subtitle={data.page.homefourtsection.firstsubtitle1}
              heading={data.page.homefourtsection.firstheading}
              paragraph={data.page.homefourtsection.firstparagraph}
              image={data.page.homefourtsection.firstimage?.node?.link}
            />
          </div>

          <div className="flex justify-center md:justify-end md:pr-20 my-10">
            <ThreeStatement
              imageAlignment="right"
              subtitle={data.page.homefourtsection.secondsubtitle}
              heading={data.page.homefourtsection.secondheading}
              paragraph={data.page.homefourtsection.secondparagraph}
              image={data.page.homefourtsection.secondimage?.node?.link}
            />
          </div>

          <div className="md:pl-20 flex items-center ">
            <ThreeStatement
              imageAlignment="left"
              subtitle={data.page.homefourtsection.thirdsubtitle}
              heading={data.page.homefourtsection.thirdheading}
              paragraph={data.page.homefourtsection.thirdparagraph}
              image={data.page.homefourtsection.thirdimage?.node?.link}
            />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto max-w-[1481px] " >   
          <div className="flex flex-col md:flex-row w-[100%] pb-[10px] mx-auto items-center rounded-[5px]" style={{ backgroundColor: 'rgb(3, 4, 2)' }}>
        <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
          <span className="text-[18px] bg-[#fff]   text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">{data.page.homefifthsection.fifthfirstsubtitle}</span>
          <h5 className="md:text-[45px] text-[26px]  text-[#A1CF5F] md:text-left text-left  pb-[15px] font-bold pt-[20px] md:leading-10 ">{data.page.homefifthsection.mainheadingfifth}</h5>
          <p className="md:text-[45px] md:w-[87%]  text-[22px] md:text-left text-left text-white md:leading-normal font-bold">
          {data.page.homefifthsection.fifthheadingsimple}</p>
          <Image src={data.page.homefifthsection.authorimage?.node?.link} className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]" alt="image"  width={800} height={500} />
          

          <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5">{data.page.homefifthsection.authortitle}</h5>
          <h5 className="text-[12px] text-white md:text-left text-left font-bold">{data.page.homefifthsection.authordesignation}</h5>
        </div>
        <div className="md:w-8/12   md:py-[30px] relative ">
        <Image src={data.page.homefifthsection.fifthfirstimage?.node?.link} className="" layout="responsive" width={16} height={9} alt="" />
          

        <Image
        src={Video_gif} // No quotes needed here
        className="w-[224px] video-gif"
        alt="Video gif"
        width={100}
        height={100}
      />
          
          <div className="md:float-right md:mt-[-50px] md:mr-3 mt-5 z-99999 relative" >
           <Link href={data.page.homefifthsection.buttonlinkone}> <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">{data.page.homefifthsection.fifthbuttonone} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></button></Link>
            <Link href={data.page.homefifthsection.buttonlinksecond} >   <button className=" mx-auto mt-[21px] md:mx-0 md:mt-4   flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">{data.page.homefifthsection.textbuttonsecond} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></button></Link>
          </div>
        </div>
      </div>
      </div> */}

      <HomeAboutTheBook data={data} Video_gif={Video_gif} />
      <Partner />
      <div className="container mx-auto max-w-[1481px]">
        {' '}
        <section className=" md:flex w-[100%] mt-[54px] mx-auto  bg-[#000] rounded-md">
          <div className=" md:w-6/12 lg:w-6/12 p-10 relative">
            <h2
              className={`text-[#A1CF5F] text-[30px] md:w-[80%] md:text-[38px] uppercase leading-tight md:leading-snug`}
            >
              {data.page.homesixthsection.heading}
            </h2>
            <p className="text-white text-[17px] pt-5">{data.page.homesixthsection.paragraph}</p>
            <p className="text-white text-[17px] md:text-[20px] font-bold pt-[29px] ">
              {data.page.homesixthsection.author}
            </p>
            <p className="text-white text-[16px] pl-0">{data.page.homesixthsection.designations}</p>
            {/* <Image
              src={Demo}
              className="absolute top-[38%] right-3 md:top-3 hidden md:block"
              alt=""
              width={100}
              height={100}
            /> */}

            <div className="absolute top-[38%] right-10 md:top-10 hidden md:block">
              <svg width="107" height="68" viewBox="0 0 107 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_155_425)">
                  <path
                    d="M79.7461 48.4093C74.0798 47.4836 69.271 45.0503 65.3594 40.9044C58.3408 33.4723 56.8236 22.1059 61.6324 13.0009C66.5929 3.61818 76.8371 -1.39388 87.3715 0.411253C97.2991 2.11059 105.472 10.3626 106.917 20.433C108.678 32.7119 103.902 52.0791 87.0153 62.209C83.0575 64.5828 78.5587 66.0507 74.2843 67.8691C73.8357 68.0608 73.2091 67.8162 72.6681 67.7699C72.8726 67.2541 72.9716 66.6392 73.308 66.2292C77.0745 61.6073 79.8516 56.582 79.878 50.4062C79.878 50.0227 79.8648 49.6326 79.845 49.2491C79.8318 49.0309 79.7988 48.8127 79.7527 48.4027L79.7461 48.4093ZM75.8674 65.6474C76.4677 65.4887 76.7711 65.4292 77.0679 65.33C94.555 59.4451 106.118 42.8286 105.67 24.2284C105.353 10.9181 95.0761 1.21133 81.7976 1.67419C68.275 2.14365 57.8988 15.6193 60.8672 28.8438C63.0308 38.491 69.9175 45.0503 79.7197 46.71C80.8675 46.9017 81.4216 47.4307 81.3754 48.5217C81.2764 50.7104 81.2962 52.9321 80.9136 55.0744C80.2276 58.9227 78.2421 62.2288 75.8674 65.6474Z"
                    fill="white"
                  />
                  <path
                    d="M21.1553 48.4616C13.5431 47.1326 7.83721 43.5686 3.82661 37.4192C-1.38454 29.4184 -1.25921 18.7133 4.11685 10.7654C9.63143 2.61253 19.559 -1.49366 28.972 0.496619C38.6555 2.54641 46.281 10.0116 47.9037 19.5795C49.566 29.3457 47.2968 38.5301 42.62 47.0995C36.6041 58.1154 27.0063 64.5557 15.1856 67.9676C14.7898 68.08 14.3017 67.8751 13.8597 67.8156C14.0048 67.3395 14.0246 66.7576 14.3149 66.4072C17.3822 62.7837 19.7767 58.8031 20.6738 54.0886C21.0168 52.2769 21.0036 50.399 21.1619 48.4682L21.1553 48.4616ZM17.4613 65.6269C18.7213 65.1376 19.9944 64.6814 21.2411 64.1524C38.0751 57.0443 48.7876 38.9533 46.624 21.3053C45.5158 12.2664 38.7215 4.58297 29.8428 2.34143C20.7332 0.033764 11.2673 3.48534 5.81212 11.1092C0.422874 18.6273 0.145825 28.9357 5.17887 36.5927C8.87944 42.2263 14.0708 45.6316 20.7266 46.6895C21.9931 46.8879 22.6131 47.3838 22.5472 48.6864C22.4548 50.4982 22.5472 52.3298 22.2833 54.1084C21.6632 58.2808 19.6579 61.8844 17.4613 65.6203V65.6269Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_155_425">
                    <rect width="107" height="68" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className=" md:w-6/12 lg:w-6/12  relative bg-cover bg-center overflow-hidden">
            <Image
              src={data.page.homesixthsection.rightimage?.node?.link}
              className="absolute object-cover w-full h-full rounded-lg"
              layout="" // This will make the image cover the div area
              // objectFit="cover rounded-lg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </section>
      </div>

      <StoriesSliderHome stories={stories} />

      <Testimonial testimonials={testimonials} className="" />

      <VideoCarousel videos={videos} />

      <Newsletter />
    </main>
  )
}
