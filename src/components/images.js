import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Images = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "tdp01.jpg" }) {
          ...imgDefaults
        }
        image2: file(relativePath: { eq: "tdp02.jpg" }) {
          ...imgDefaults
        }
        image3: file(relativePath: { eq: "tdp03.jpg" }) {
          ...imgDefaults
        }
        image4: file(relativePath: { eq: "tdp04.jpg" }) {
          ...imgDefaults
        }
        image5: file(relativePath: { eq: "tdp05.jpg" }) {
          ...imgDefaults
        }
        image6: file(relativePath: { eq: "tdp06.jpg" }) {
          ...imgDefaults
        }
        image7: file(relativePath: { eq: "tdp07.jpg" }) {
          ...imgDefaults
        }
        image8: file(relativePath: { eq: "tdp08.jpg" }) {
          ...imgDefaults
        }
        image9: file(relativePath: { eq: "tdp09.jpg" }) {
          ...imgDefaults
        }
        image10: file(relativePath: { eq: "tdp10.jpg" }) {
          ...imgDefaults
        }
        image11: file(relativePath: { eq: "tdp11.jpg" }) {
          ...imgDefaults
        }
        image12: file(relativePath: { eq: "tdp12.jpg" }) {
          ...imgDefaults
        }
        image13: file(relativePath: { eq: "tdp13.jpg" }) {
          ...imgDefaults
        }
        image14: file(relativePath: { eq: "tdp14.jpg" }) {
          ...imgDefaults
        }
        image15: file(relativePath: { eq: "tdp15.jpg" }) {
          ...imgDefaults
        }
        image16: file(relativePath: { eq: "tdp16.jpg" }) {
          ...imgDefaults
        }
        image17: file(relativePath: { eq: "tdp17.jpg" }) {
          ...imgDefaults
        }
        image18: file(relativePath: { eq: "tdp18.jpg" }) {
          ...imgDefaults
        }
        image19: file(relativePath: { eq: "tdp19.jpg" }) {
          ...imgDefaults
        }
        image20: file(relativePath: { eq: "tdp20.jpg" }) {
          ...imgDefaults
        }
      }
    `}
    render={data => (
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto"
      }}>
        <Img
          fluid={data.image1.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Teresa Daining Interior Design Portfolio 2014-2019"
        />
        <Img
          fluid={data.image2.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Table of Contents: 20 Images Total"
        />
        <Img
          fluid={data.image3.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Programming Documents: Placemaking Design"
        />
        <Img
          fluid={data.image4.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Programming Documents: Urban Planning"
        />
        <Img
          fluid={data.image5.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Schematic Documents: Preliminary Layouts"
        />
        <Img
          fluid={data.image6.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Schematic Documents: Preliminary Layouts"
        />
        <Img
          fluid={data.image7.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Phasing"
        />
        <Img
          fluid={data.image8.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Component Plans"
        />
        <Img
          fluid={data.image9.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Furniture Standards"
        />
        <Img
          fluid={data.image10.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Ancillary Spreadsheets"
        />
        <Img
          fluid={data.image11.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Core Drill Plans"
        />
        <Img
          fluid={data.image12.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Area of Work"
        />
        <Img
          fluid={data.image13.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Detailed Drawings"
        />
        <Img
          fluid={data.image14.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Project Photography"
        />
        <Img
          fluid={data.image15.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Installation Documents: Project Photography"
        />
        <Img
          fluid={data.image16.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Workplace Strategy: Real Estate Development Assistance"
        />
        <Img
          fluid={data.image17.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Workplace Strategy: Real Estate Development Assistance"
        />
        <Img
          fluid={data.image18.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Workplace Strategy: Real Estate Development Assistance"
        />
        <Img
          fluid={data.image19.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Workplace Strategy: Design Team Lead"
        />
        <Img
          fluid={data.image20.childImageSharp.fluid}
          style={{ marginBottom: "50px" }}
          alt="Workplace Strategy: Living Office Specialist Workshop"
        />
      </div>
    )}
  />
)

export const imgDefaults = graphql`
  fragment imgDefaults on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export default Images
