import { gql } from '@apollo/client'
import { SEO_FRAGMENT } from './fragments'

export const HOME_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
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
      title
      link
      bannerHome {
        banner {
          node {
            link
          }
        }
        textBanner
        textBanner2
        textBanner3
        subtitleupper
        buttonText
        buttonLinkBannerHome
        subtitle_bottom
      }
      bannerHomesecond {
        rightsmallsectionlink
        rightsmallsectiontext
        rightsmallsectionlinktext
        heading_second_section
        buttonLinkSecondSection
        buttonText
        subtitleText
        firstRightImage {
          node {
            link
          }
        }
        secondRightImage {
          node {
            link
          }
        }
        bannersecondbackground {
          node {
            link
          }
        }
      }
      sectionHomethird {
        firstcolumnimage {
          node {
            link
          }
        }
        buttonLink1ThirdSection
        buttonLink2ThirdSection
        buttonLink3ThirdSection
        firstcolumnheading
        subtitletextfirst
        buttontxtfirst
        secondcolumnimage {
          node {
            link
          }
        }
        secondcolumnheading
        subtitletextsecond
        buttontxtsecond
        thirdcolumnimage {
          node {
            link
          }
        }
        thirdcolumnheading
        subtitletextthird
        buttontxtthird
      }
      homefourtsection {
        __typename
        mainheadingfourth
        firstimage {
          node {
            link
          }
        }
        firstsubtitle1
        firstheading
        firstparagraph
        secondimage {
          node {
            link
          }
        }
        secondheading
        secondsubtitle
        secondparagraph
        thirdimage {
          node {
            link
          }
        }
        thirdsubtitle
        thirdheading
        thirdparagraph
      }
      homefifthsection {
        mainheadingfifth
        fifthheadingsimple
        buttonlinkone
        buttonlinksecond
        fifthfirstimage {
          node {
            link
          }
        }
        fifthfirstsubtitle
        fifthbuttonone
        textbuttonsecond
        authorimage {
          node {
            link
          }
        }
        authortitle
        authordesignation
      }
      patnerssection {
        linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image5 {
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
  ${SEO_FRAGMENT}
`

export const ABOUT_US_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDoyNjY=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      aboutuspage {
        mainheadingabout
        secondimage {
          node {
            link
          }
        }
        secondsectionheading_1
        secondsectionheading_2

        secondsectionrightimage {
          node {
            link
          }
        }
        secondsectionimagwithtext_image {
          node {
            link
          }
        }
        secondsectionimagwithtextText
        secondsectionimagwithtextSubtext
        secondsectionimagwithtextButtontext
        secondsectionimagwithtextButtonlink
        thirdsectionimage {
          node {
            link
          }
        }
        forthsectionlefttext
        fourthsectionleftbutton
        fourthsectionleftbuttonlink
        fourthsectionrightheading
        fourthsectionrightdescrition1
        fourthsectionrightdescrition2
        fourthsectionrightdescrition3
        fourthsectionrightdescrition4
      }

      aboutussections {
        iconsections {
          logoIcons {
            node {
              link
            }
          }
          icontitle
        }
        videosectionheading
        videosectionbackground {
          node {
            link
          }
        }
        videosectiontitle
        videosectiondescription
        imagewithtextImage1 {
          node {
            link
          }
        }
        imagewithtextImage1 {
          node {
            link
          }
        }
        imagewithtext1Description1
        imagewithtext1description2
        imagewithtext1description3
        imagewithtext1description4
        imagewithtext1description5
        imagewithtext1Heading
        imagewithtextImage2 {
          node {
            link
          }
        }
        imagewithtext2Description1
        imagewithtext2Description2
        imagewithtext2Description3
        imagewithtext2Description4
        imagewithtext2Description5
        imagewithtext2Heading
        reviewsectiontitle1
        reviewsectiondescription1
        tenthsectionleftheading
        tenthsectionrightimage {
          node {
            link
          }
        }
        tenthsectionleftsubheading
        tenthsectionleftbuttontext
        tenthsectionleftbuttonlink
        eleventhsectionheading
        eleventhsectionsubheading
        eleventhsectiondescrition
        eleventhsection2descrition
        eleventhsection2heading
        twelthsectionleftimage {
          node {
            link
          }
        }
        twelthsectionrightimage {
          node {
            link
          }
        }
        twelthsectionrightdescription
        twelthsectionrightdescription2
        tenthsectionrightcolumns {
          columnsimage {
            node {
              link
            }
          }
          columnstext
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const BOOK_PAGE_QUERY = gql`
  query Book {
    page(id: "cG9zdDo0MzM=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      bookPageFeilds {
        bookFifthReviewSectionDescription
        bookFifthReviewSectionHeading
        bookFirstSectionMainHeading
        bookFourthSectionFirstColumnText
        bookSeventhSectionButtonOneLink
        bookSeventhSectionButtonTwoLink
        bookSeventhSectionButtonOneText
        bookSeventhSectionButtonTwoText
        bookSeventhSectionDescription1
        bookSeventhSectionDescription2
        bookSeventhSectionDescription3
        bookSeventhSectionDescription4
        bookSeventhSectionMainHeading
        bookSixthSectionVideoDescription
        bookSixthSectionVideoHeading
        bookSixthSectionVideoLink
        bookSixthSectionVideoMainHeading
        bookThirdSectionRightButtonOne
        bookThirdSectionRightButtonTwo
        bookThirdSectionRightButtonTwoLink
        bookThirdSectionRightDescription
        bookThirdSectionRightHeading
        bookThirdSectionRightButtonOneLink {
          url
        }
        bookThirdSectionLeftImage {
          node {
            link
          }
        }

        bookSecondSectionImage {
          node {
            link
          }
        }
        bookFourthSectionThirdColumnImage {
          node {
            link
          }
        }
        bookFourthSectionSecondColumnImage {
          node {
            link
          }
        }
        bookFourthSectionFourthColumnImage {
          node {
            link
          }
        }
        bookNinthSectionMainLeftHeading
        bookNinthSectionMainRightDescription
        bookNinthSectionRightFirstColumnText
        bookNinthSectionRightSecondColumnButtonLink
        bookNinthSectionRightSecondColumnText
        bookNinthSectionRightImage {
          node {
            link
          }
        }
        bookNinthSectionLeftImage {
          node {
            link
          }
        }
        bookEigthSectionMainHeading
        bookEigthSectionMainLeftDescription
        bookEigthSectionMainRightDescription1
        bookEigthSectionMainRightDescription2
        bookNinthSectionRightSecondColumnButtonText
        bookEigthSectionMainLeftImage {
          node {
            link
          }
        }
        bookEigthSectionMainRightImage {
          node {
            link
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const LEADERSHIP_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDo2MDg=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      leadershipPageFeilds {
        leadershipEightSectionFields {
          leadershipEightSectionFirstRowFirstColumnDescription
          leadershipEightSectionFirstRowFirstColumnHeading
          leadershipEightSectionFirstRowSecondColumnImage {
            node {
              link
            }
          }
          leadershipEightSectionFirstRowThirdDescription
          leadershipEightSectionFirstRowThirdHeading
          leadershipEightSectionMainDescription
          leadershipEightSectionMainHeading
          leadershipEightSectionSecondRowFirstImage {
            node {
              link
            }
          }
          leadershipEightSectionSecondRowSecondDescription
          leadershipEightSectionSecondRowSecondHeading
          leadershipEightSectionSecondRowThirdImage {
            node {
              link
            }
          }
        }
        leadershipEleventhSection {
          leadershipEleventhSectionFirstSection {
            leadershipEleventhFirstText
            leadershipEleventhFirstImage {
              node {
                link
              }
            }
          }
          leadershipEleventhSectionMainHeading
          leadershipEleventhSectionSecondButtonLink
          leadershipEleventhSectionSecondButtonText
          leadershipEleventhSectionSecondDescription
          leadershipEleventhSectionSecondImage {
            node {
              link
            }
          }
        }
        leadershipFifthSectionFields {
          leadershipFifthSectionFirstColumnDescription
          leadershipFifthSectionFirstColumnHeading
          leadershipFifthSectionFirstColumnImages {
            node {
              link
            }
          }
          leadershipFifthSectionSecondColumnDescription1
          leadershipFifthSectionSecondColumnDescription2
          leadershipFifthSectionSecondColumnDescription3
          leadershipFifthSectionSecondColumnDescriptionHeading1
          leadershipFifthSectionSecondColumnDescriptionHeading2
          leadershipFifthSectionSecondColumnDescriptionHeading3
          leadershipFifthSectionSecondColumnMainHeading
          leadershipFifthSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipFirstSectionFeilds {
          leadershipFirstSectionSecondColumnDescription1
          leadershipFirstSectionSecondColumnDescription2
          leadershipFirstSectionSecondColumnHeading
          leadershipFirstSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipFirstSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipFourthSectionFields {
          leadershipFourthSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipFourthSectionMainHeading
          leadershipFourthSectionSecondColumnDescription1
          leadershipFourthSectionSecondColumnDescription2
          leadershipFourthSectionThirdColumnDescription1
          leadershipFourthSectionThirdColumnDescription2
        }
        leadershipMainHeading
        leadershipNinthSection {
          leadershipNinthSectionFirstColumnImage {
            node {
              link
            }
          }
          leadershipNinthSectionMainHeading
          leadershipNinthSectionSecondColumnText
          leadershipNinthSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        leadershipSecondSectionFields {
          leadershipSecondSectionFirstColumnButtonLink
          leadershipSecondSectionFirstColumnButtonText
          leadershipSecondSectionFirstColumnDescription
          leadershipSecondSectionFirstColumnHeading
          leadershipSecondSectionSecondColumnBackgroundImage {
            node {
              link
            }
          }
          leadershipSecondSectionSecondColumnBox {
            leadershipSecondSectionSecondColumnBoxButtonLink {
              node {
                link
              }
            }
            leadershipSecondSectionSecondColumnBoxButtonText
            leadershipSecondSectionSecondColumnBoxDescription
            leadershipSecondSectionSecondColumnBoxHeading
          }
        }
        leadershipSeventhSectionFields {
          leadershipSeventhSectionButtonLink
          leadershipSeventhSectionButtonText
          leadershipSeventhSectionDescription
          leadershipSeventhSectionMainHeading
          leadershipSeventhSectionMainImage {
            node {
              link
            }
          }
          leadershipSeventhSectionSubheading
        }
        leadershipSixthSectionFields {
          leadershipSixthSectionFirstRowFirstColumnImage {
            node {
              link
            }
          }
          leadershipSixthSectionFirstRowSecondColumnDescription
          leadershipSixthSectionFirstRowSecondColumnHeading
          leadershipSixthSectionMainDescription
          leadershipSixthSectionMainHeading
          leadershipSixthSectionSecondRowSecondColumnDescription
          leadershipSixthSectionSecondRowFirstColumnImage {
            node {
              link
            }
          }
          leadershipSixthSectionSecondRowSecondColumnHeading
          leadershipSixthSectionSecondRowThirdColumnImages {
            node {
              link
            }
          }
          leadershipSixthSectionThirdRowFirstColumnImages {
            node {
              link
            }
          }
          leadershipSixthSectionThirdRowSecondsColumnDescription
          leadershipSixthSectionThirdRowSecondsColumnHeading
        }
        leadershipTenthSection {
          leadershipTenthSectionFirstColumnText
          leadershipTenthSectionSecondColumnDescription1
          leadershipTenthSectionSecondColumnDescription2
          leadershipTenthSectionSecondColumnDescription3
          leadershipTenthSectionSecondColumnDescriptionGreenColor
          leadershipTenthSectionSecondColumnHeading
        }
        leadershipThirdSectionFields {
          leadershipThirdSectionBox {
            leadershipThirdSectionBoxDescription
            leadershipThirdSectionBoxHeading
            leadershipThirdSectionBoxImages {
              node {
                link
              }
            }
          }
          leadershipThirdSectionMainHeading
        }
        leadershipThirteenSection {
          leadershipThirteenSectionButtonLink
          leadershipThirteenSectionButtonText
          leadershipThirteenSectionHeading
        }
        leadershipTwelfthSection {
          leadershipTwelfthSectionFirstRowFirstColumn
          leadershipTwelfthSectionFirstRowSecondColumnDescription
          leadershipTwelfthSectionMainHeading
          leadershipTwelfthSectionSecondRowFirstColumnDescription
          leadershipTwelfthSectionSecondRowFirstColumnHeading
          leadershipTwelfthSectionSecondRowSecondColumnImage1 {
            node {
              link
            }
          }
          leadershipTwelfthSectionSecondRowSecondColumnImage2 {
            node {
              link
            }
          }
        }
        leadershipVideoSection {
          leadershipVideoSectionMainHeading
          leadershipVideoSectionBackgroundImage {
            node {
              link
            }
          }
          leadershipVideoSectionDescripiton
          leadershipVideoSectionHeading
          leadershipVideoSectionTopImage {
            node {
              link
            }
          }
        }
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
  ${SEO_FRAGMENT}
`

export const STORIES_QUERY = gql`
  query {
    posts(where: { orderby: { field: DATE, order: DESC }, categoryName: "stories-of-transformation" }) {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
        id
        slug
        date
      }
    }
    page(id: "cG9zdDoxNg==") {
      homefourtsection {
        postsliderheading
      }
    }
  }
`

export const TESTIMONIAL_QUERY = gql`
  query {
    page(id: "cG9zdDoxOTI=") {
      testimonialSlider {
        slides {
          message
          authorname
          authordescription
        }
      }
    }
  }
`

export const HOME_VIDEO_QUERY = gql`
  {
    page(id: "cG9zdDoxNg==") {
      homevideobanner {
        maintitle
        videosubtitle
        linktext
        videoslider {
          videothumbnail {
            node {
              mediaItemUrl
            }
          }
          videoFileLink {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`

export const PROGRAM_PAGE_QUERY = gql`
  query {
    page(id: "cG9zdDozMjY=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      programpagefeild {
        authorDesignation
        fieldGroupName
        firstSectionMainHeading
        secondSectionImage {
          node {
            link
          }
        }
        secondSectionLeftAuthorName
        secondSectionLeftColumn
        secondSectionRightAuthorName
        secondSectionRightButtonText
        secondSectionRightButtonLink
        secondSectionRightSubHeading
        thirdSectionLeftText
        thirdSectionMainHeading
        third_section_right_columns {
          button_text_program
          button_link_program
          columnheadingProgram
          columnsubtitleProgram
          columnimages_program {
            node {
              link
            }
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const PROGRAM_TESTIMONIAL_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDozMjY=") {
      programpagefeild {
        secondSectionProgramTestemonials {
          programTestimonialAuthor
          programTestimonialAuthorDescription
          programTestimonialDescription
        }
      }
    }
  }
`

export const ARTICLES_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo1MzQ=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      blogPageFeilds {
        blogLeftThirdSectionHeading
        blogPageMainHeading
        blogRightThirdSectionDescription
        blogRightThirdSectionHeading
        blogSecondSection {
          blogPageLeft {
            node {
              link
            }
          }
          blogPageRightButtonText
          blogPageRightDate
          blogPageRightDescription
          blogPageRightHeading
          blogPageRightMonthAndYear
          blogPageRightUpperSubtitle
          blogPageRightImage {
            node {
              link
            }
          }
          blogPageRightButtonLink {
            url
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const ARTICLES_QUERY = gql`
  query Articles {
    featuredPosts: posts(where: {  tag: "featured", status: PUBLISH }, last: 1000) {
      nodes {
        date
        featuredImage {
          node {
            link
          }
        }
        title
        id
        slug
        tags {
          nodes {
            name
          }
        }
      }
    }
    otherPosts: posts(where: { tagNotIn: ["featured"], status: PUBLISH }, last: 1000) {
      nodes {
        date
        featuredImage {
          node {
            link
          }
        }
        title
        id
        slug
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const VANTAGEPOINT_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo5MzE=") {
      id
      seoMetaFields {
        ...SeoMetaFields
      }
      vantageForm {
        fieldGroupName
        vantageFormMainHeading
        vantageFormSecondSectionSecondColumnDescription
        vantageFormSecondSectionSecondColumnHeading
        vantageFormSecondSectionSecondColumnPrice
      }
      vintagePageFeild {
        vintageEightSection {
          vintageEightSectionBackgroundImage {
            node {
              link
            }
          }
          vintageEightSectionDescription
          vintageEightSectionMainHeading
          vintageEightSectionMainHeading2
        }
        vintageFifthSection {
          vintageFifthSectionLeftImage {
            node {
              link
            }
          }
          vintageFifthSectionMainDescription
          vintageFifthSectionMainHeading
          vintageFifthSectionRightImage {
            node {
              link
            }
          }
        }
        vintageFourthSection {
          vintageFourthSectionButtonLink
          vintageFourthSectionButtonText
          vintageFourthSectionDescription
          vintageFourthSectionHeading
          vintageFourthSectionLeftImage {
            node {
              link
            }
          }
          vintageFourthSectionRightImage {
            node {
              link
            }
          }
        }
        vintageMainDescriptionRight
        vintageMainHeading
        vintageMainRightImage {
          node {
            link
          }
        }
        vintageNinthSection {
          vintageNinthSectionLeftSectionImage {
            node {
              link
            }
          }
          vintageNinthSectionRightSectionDescription
          vintageNinthSectionRightSectionMainHeading
          vintageNinthSectionRightSectionRowFirstImage {
            node {
              link
            }
          }
          vintageNinthSectionRightSectionRowSecondDescription
          vintageNinthSectionRightSectionRowSecondHeading
        }
        vintageReviewSlider {
          vintageReviewSliderFirstReviewRow {
            vintageReviewSliderFirstUserImage {
              node {
                link
              }
            }
            vintageReviewSliderReviewFirstReview
            vintageReviewSliderReviewFirstUserName
            vintageReviewSliderReviewFirstUserStatus
          }
          vintageReviewSliderMainDescription
          vintageReviewSliderMainHeading
          vintageReviewSliderSecondReviewRow {
            vintageReviewSliderReviewSecondReview
            vintageReviewSliderReviewSecondUserImage {
              node {
                link
              }
            }
            vintageReviewSliderReviewSecondUserName
            vintageReviewSliderReviewSecondUserStatus
          }
        }
        vintageSecondSection {
          vintageSecondSectionBackgroundImage {
            node {
              link
            }
          }
          vintageSecondSectionLeftText
          vintageSecondSectionRightCardButtonLink
          vintageSecondSectionRightCardButtonText
          vintageSecondSectionRightCardDescription
          vintageSecondSectionRightCardHeading
          vintageSecondSectionRightCardHeading2
          vintageSecondSectionRightCardPrice
        }
        vintageSeventhSection {
          vintageSeventhSectionFirstColumnImage {
            node {
              link
            }
          }
          vintageSeventhSectionLastRowContent {
            vintageSeventhSectionLastRowMainHeading
            vintageSeventhSectionLastRowContentGroups {
              vintageSeventhSectionLastRowContentFirstColumnDescription
              vintageSeventhSectionLastRowContentFirstColumnHeading
              vintageSeventhSectionLastRowContentSecondColumnSession1
              vintageSeventhSectionLastRowContentSecondColumnSession2
              vintageSeventhSectionLastRowContentSecondColumnSession3
            }
          }
          vintageSeventhSectionMainHeading
          vintageSeventhSectionSecondColumnBlackBoxButtonLink
          vintageSeventhSectionSecondColumnBlackBoxButtonText
          vintageSeventhSectionSecondColumnBlackBoxDescription
          vintageSeventhSectionSecondColumnBlackBoxHeading
          vintageSeventhSectionSecondColumnDescription
          vintageSeventhSectionThirdColumnImage {
            node {
              link
            }
          }
        }
        vintageTenthSection {
          vintageTenthSectionFirstColumnImage {
            node {
              link
            }
          }
          vintageTenthSectionFourthColumnImage {
            node {
              link
            }
          }
          vintageTenthSectionSecondColumnMainDescription
          vintageTenthSectionSecondColumnMainHeading
          vintageTenthSectionSecondColumnMainPrice
          vintageTenthSectionThirdColumnButtonLink
          vintageTenthSectionThirdColumnButtonText
          vintageTenthSectionThirdColumnText
        }
        vintageThirdSection {
          vintageThirdSectionMainDescription
          vintageThirdSectionMainHeading
          vintageThirdSectionRowFirstImage {
            node {
              link
            }
          }
          vintageThirdSectionRowSecondDescription
          vintageThirdSectionRowSecondHeading
          vintageThirdSectionRowSecondImage {
            node {
              link
            }
          }
          vintageThirdSectionRowThirdImage {
            node {
              link
            }
          }
        }
      }
    }
  }
  ${SEO_FRAGMENT}
`

export const HOME_HERO_NEWS_QUERY = gql`
  query {
    posts(where: { tag: "featured" }) {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
        id
        databaseId
        slug
      }
    }
  }
`

export const SHORT_COURSE_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo4ODk=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }
      shortCourseFields {
        shortCourseMainHeadingPart1
        shortCourseMainHeadingPart2
        shortCoursesFifthSection {
          shortCoursesFifthSectionReview
          shortCoursesFifthSectionSubText
          shortCoursesFifthSectionText
        }
        shortCoursesFirstSection {
          shortCoursesFirstSectionFirstColumnButtonLink
          shortCoursesFirstSectionFirstColumnButtonText
          shortCoursesFirstSectionFirstColumnText
          shortCoursesFirstSectionSecondColumnBottomImage {
            node {
              link
            }
          }
          shortCoursesFirstSectionSecondColumnMainImage {
            node {
              link
            }
          }
          shortCoursesFirstSectionSecondColumnUpperImage {
            node {
              link
            }
          }
          shortCoursesFirstSectionThirdColumnDescription
          shortCoursesFirstSectionThirdColumnHeading
          shortCoursesFirstSectionThirdColumnImage {
            node {
              link
            }
          }
          shortCoursesMainBackgroundImage {
            node {
              link
            }
          }
        }
        shortCoursesFourthSection {
          shortCoursesFourthSectionDescription
          shortCoursesFourthSectionDescriptionPart2
          shortCoursesFourthSectionHeading
          shortCoursesFourthSectionImage {
            node {
              link
            }
          }
        }
        shortCoursesSecondSection {
          shortCoursesSecondSectionFirstColumnText
          shortCoursesSecondSectionSecondColumnHeading
          shortCoursesSecondSectionSecondColumnBottomFeilds {
            shortCoursesSecondSectionSecondColumnBottomFeildsDescription
            shortCoursesSecondSectionSecondColumnBottomFeildsHeading
          }
        }
        shortCoursesSixthSection {
          shortCoursesSixthSectionFirstReviewRow {
            shortCoursesSixthSectionReviewFirstReview
            shortCoursesSixthSectionReviewFirstUserImage {
              node {
                link
              }
            }
            shortCoursesSixthSectionReviewFirstUserName
            shortCoursesSixthSectionReviewFirstUserStatus
          }
          shortCoursesSixthSectionMainDescription
          shortCoursesSixthSectionMainHeading
          shortCoursesSixthSectionSecondReviewRow {
            shortCourseSixthSectionReviewSecondUserName
            shortCoursesSixthSectionReviewSecondReview
            shortCoursesSixthSectionReviewSecondUserImage {
              node {
                link
              }
            }
            shortCoursesSixthSectionReviewSecondUserStatus
          }
        }
        shortCoursesThirdSection {
          shortCoursesThirdSectionMainFirstRowDescription
          shortCoursesThirdSectionMainFirstRowHeading
          shortCoursesThirdSectionMainSecondRowCards {
            shortCoursesThirdSectionMainSecondRowCardButtonLink
            shortCoursesThirdSectionMainSecondRowCardButtonText
            shortCoursesThirdSectionMainSecondRowCardImage {
              node {
                link
              }
            }
            shortCoursesThirdSectionMainSecondRowCardPrice
            shortCoursesThirdSectionMainSecondRowCardTitle
          }
        }
      }
    }
  }
`

export const DONATION_PAGE_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo1MTQ=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }
      donatePageFeilds {
        donateFifthSectionDescription
        donateFifthSectionHeading
        donateFifthSectionLink
        donateFirstSectionMainDescription
        donateFirstSectionMainHeading
        donateSecondSectionLeftButtonLink
        donateSecondSectionLeftButtonText
        donateSecondSectionLeftDescription
        donateSecondSectionLeftHeading
        donateThirdSectionDescription
        donateThirdSectionHeading
        donate_fourth_section_scrolltext
        donateThirdSectionSubheading
        donateFifthSectionButtonText
        donateThirdSectionImage {
          node {
            link
          }
        }
        donateSecondSectionRightImage {
          node {
            link
          }
        }
        donateSecondSectionLeftFaqs {
          donateFaqDescription
          donateFaqTitle
          fieldGroupName
        }
        donateFourthSectionThirdImage {
          node {
            link
          }
        }
        donateFourthSectionSecondImage {
          node {
            link
          }
        }
        donateFourthSection {
          node {
            link
          }
        }
      }
    }
  }
`

export const CONTACT_PAGE_POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDozNjM=") {
      seoMetaFields {
        seo {
          metaDescription
          metaKeywords
          pageTitle
        }
      }

      contactpagefeilds {
        firstMainHeadingPart1
        firstRightImage {
          node {
            link
          }
        }
        firstSubheading
        first_main_heading_part_2
        secondContactSectionDescription
        secondContactSectionFormHeading
        secondContactSectionImage {
          node {
            link
          }
        }
        secondContactSectionHeading
        thirdSectionCenterFirstButton
        thirdSectionCenterHeading
        thirdSectionCenterSecondButton
        thirdSectionCenterSubHeading
        thirdSectionCenterUppertext
        thirdSectionCenterFirstButtonLink
        thirdSectionCenterSecondButtonLink
        thirdSectionLeftImage {
          node {
            link
          }
        }
        thirdSectionRightImage {
          node {
            link
          }
        }
      }
    }
  }
`

export const LEADERSHIP_CIRCLE_TESTIMONIALS = gql`
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
`
