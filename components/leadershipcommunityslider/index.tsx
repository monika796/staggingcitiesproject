'use client';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Import modal library
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gql } from "@apollo/client";
import client from "apollo-client";
import parse from 'html-react-parser'
import ReactPlayer from 'react-player'


const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo2MDg=") {
      leadershipPageFeilds {
        leadershipWatchOurCommunitySection {
          watchOurCommunitySlider {
            watchOurCommunitySliderAuthor
            watchOurCommunitySliderDesignation
            watchOurCommunityVideoLink
            watchOurCommunitySliderImage {
              node {
                link
              }
            }
          }
        }
      }
    }
  }
`;

interface WatchOurCommunitySlider {
  watchOurCommunitySliderAuthor: string;
  watchOurCommunitySliderDesignation: string;
  watchOurCommunityVideoLink: string;
  watchOurCommunitySliderImage?: {
    node?: {
      link: string;
    };
  };
}

const SwiperSectionLeadership = () => {
  const [posts, setPosts] = useState<WatchOurCommunitySlider[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        });
        console.log("Fetched Data:", data);
        setPosts(
          data?.page?.leadershipPageFeilds?.leadershipWatchOurCommunitySection?.watchOurCommunitySlider || []
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const openModal = (videoUrl: string) => {
    setVideoUrl(videoUrl);
    console.log("Video URL:", videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <section className="max-w-[1480px] mx-auto">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1400: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            className="w-full h-auto"
          >
            {posts.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                  <div className="relative">
                    {/* Video Thumbnail */}
                    <img
                      src={course.watchOurCommunitySliderImage?.node?.link || "default.png"}
                      className="h-[300px] w-[500px] object-cover rounded-md cursor-pointer"
                      onClick={() => openModal(course.watchOurCommunityVideoLink   || "default.mp4")}
                      alt="Video Thumbnail"
                    />
                    {/* Play Icon */}
                    <img
                      src="/73.png"
                      className="absolute top-2 right-2 h-10 w-10 cursor-pointer"
                      onClick={() => openModal(course.watchOurCommunityVideoLink || "default.mp4")}
                      alt="Play"
                    />
                  </div>
                  <div className={`${index % 2 === 0 ? "bg-[#D9F8DC]" : "bg-[#DBEBFF]"} grid items-center pl-4 rounded-md`}>
                    <div>
                      <h2 className="text-[16px] font-bold text-black">{course.watchOurCommunitySliderAuthor}</h2>
                      <p className="text-[16px] font-medium text-black">{course.watchOurCommunitySliderDesignation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
     

      {/* Lightbox Video Modal */}
      <Modal 
          isOpen={isOpen} 
          onRequestClose={closeModal} 
          className="modal" 
          overlayClassName="overlay"
          appElement={typeof document !== "undefined" ? document.getElementById("__next")! : undefined}
        >
          <div className="relative">
            <button onClick={closeModal} className="z-99999 absolute top-2 right-2 text-white text-xl">✖</button>

            {/* {parse(videoUrl || '')} */}
            <ReactPlayer
        url={videoUrl}
        playing
        loop
        controls
        muted
      />
          </div>
        </Modal>


      <style>
        {`
          .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: black;
            padding: 20px;
            z-index: 1000;
            border-radius: 10px;
            width: 80%;
            max-width: 800px;
          }
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999;
          }
        `}
      </style>
    </>
  );
};

export default SwiperSectionLeadership;
