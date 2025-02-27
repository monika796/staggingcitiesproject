// 'use client'
// import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function Head({ data }) {
  const { seo } = data?.page?.seoMetaFields || data?.seoMetaFields
  const { pageTitle, metaDescription, metaKeywords } = seo
  const defaultTitle = 'Cities Project Global'
  return (
    <>
      <title>{pageTitle ? pageTitle + ' - ' + defaultTitle : defaultTitle}</title>
      {/* <GoogleAnalytics strategy="lazyOnload" /> */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="icon" href="/favicon.png" />
    </>
  )
}
