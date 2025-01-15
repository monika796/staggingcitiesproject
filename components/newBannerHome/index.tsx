import React from "react";
import { gql } from "@apollo/client";
import client from "@/apollo-client";
import NewBannerSlider from "@/components/HeroBanner"; // Import client component

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo0MjY=") {
      homeExtraBanner {
        homeBannerSecond {
          homeBannerBackgroundImage {
            node {
              link
            }
          }
          homeBannerButtonLink
          homeBannerButtonText
          homeBannerDescription
          homeBannerHeadings
          homeBannerLatestPostImages {
            node {
              link
            }
          }
          homeBannerSubtitle
        }
      }
    }
  }
`;

export default async function NewBanner() {
  let banners = [];
  try {
    const { data } = await client.query({ query: POSTS_QUERY });
    banners = data.page.homeExtraBanner.homeBannerSecond;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className="mx-auto">
      <section className="w-full">
        <div className="container-fluid mx-auto">
          {/* Pass data to Client Component */}
          <NewBannerSlider banners={banners} />
        </div>
      </section>
    </main>
  );
}
