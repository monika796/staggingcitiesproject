import { gql } from "@apollo/client";

export const SEO_FRAGMENT = gql`
  fragment SeoMetaFields on SeoMetaFields{
      seo{
        metaDescription
        metaKeywords
        pageTitle
    }
}
`;
