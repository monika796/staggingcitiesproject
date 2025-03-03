/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "backend.citiesprojectglobal.com"], // Trusted domains for images
  },
  env: {
    NEXT_STRIPE_PUBLISH_KEY: process.env.NEXT_STRIPE_PUBLISH_KEY,
    NEXT_BACKEND_STRIPE_URL: process.env.NEXT_BACKEND_STRIPE_URL,
    NEXT_STRIPE_DONATION_RETURN_URL: process.env.NEXT_STRIPE_DONATION_RETURN_URL,
    NEXT_STRIPE_VANTAGE_RETURN_URL: process.env.NEXT_STRIPE_VANTAGE_RETURN_URL,
    NEXT_BACKEND_PDF_URL: process.env.NEXT_BACKEND_PDF_URL,
  },
  async redirects() {
    return [
      { source: "/2021/07/19/you-are-called-to-be-an-apprentice-of-jesus-what-does-that-really-look-like/", destination: "/", permanent: true },
      { source: "/about/", destination: "/", permanent: true },
      { source: "/author/jonichiang/", destination: "/", permanent: true },
      { source: "/2021/08/03/what-if-we-aim-to-bless-people-instead-of-convert-them/", destination: "/", permanent: true },
      { source: "/2021/06/15/what-does-it-mean-to-be-righteous-and-why-does-it-matter/", destination: "/", permanent: true },
      { source: "/2021/11/19/healing-the-trauma-of-homelessness-through-affordable-housing/", destination: "/", permanent: true },
      { source: "/global-leadership-circle-information-session-recording/", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      { source: "/donate/", destination: "/", permanent: true },
      { source: "/team/", destination: "/", permanent: true },
      { source: "/2021/07/06/how-genesis-1-helps-us-understand-the-great-commission-better/", destination: "/", permanent: true },
      { source: "/2021/06/09/god-created-the-world-to-be-one-beautiful-orchestra-do-you-know-your-part/", destination: "/", permanent: true },
      { source: "/denver-leadership-circle/", destination: "/", permanent: true },
      { source: "/blog/page/3/", destination: "/", permanent: true },
      { source: "/tag/personal-development/", destination: "/", permanent: true },
      { source: "/vantagepoint-tier2/", destination: "/", permanent: true },
      { source: "/category/uncategorized/", destination: "/", permanent: true },
      { source: "/test-home/", destination: "/", permanent: true },
      { source: "/shop/", destination: "/", permanent: true },
      { source: "/category/uncategorized/page/2/", destination: "/", permanent: true },
      { source: "/tag/righteous/", destination: "/", permanent: true },
      { source: "/tag/tsaddiqim/", destination: "/", permanent: true },
      { source: "/lcglobal2022/", destination: "/", permanent: true },
      { source: "/tag/purpose/", destination: "/", permanent: true },
      { source: "/tag/career/", destination: "/", permanent: true },
      { source: "/book-stage/", destination: "/", permanent: true },
      { source: "/2021/08/09/god-never-wanted-you-to-divide-your-life-into-sacred-and-secular/", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/blog/", destination: "/", permanent: true },
      { source: "/vision-weekend-registration/", destination: "/", permanent: true },
      { source: "/category/uncategorized/page/3/", destination: "/", permanent: true },
      { source: "/product-category/online-offerings/", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
