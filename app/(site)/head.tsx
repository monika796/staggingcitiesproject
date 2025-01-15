export default function Head( {data} ) {
  const { seo } = data.page.seoMetaFields;
  const { pageTitle, metaDescription, metaKeywords } = seo;
  return (
    <>
      <title>{pageTitle || 'Cities Project Global'}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="icon" href="/favicon.png" />
    </>
  );
}
