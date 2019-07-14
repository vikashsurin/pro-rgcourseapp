import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LeanCodeOnline"
      subtitle=""
      heroclass="about-background "
    />
    <DualInfoBlock
      heading="A Message from Ceo"
      img="https://images.pexels.com/photos/2641069/pexels-photo-2641069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <InfoBlock heading="About Our Vision" />
    <TeamPhotoSection/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
