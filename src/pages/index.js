import React from "react"

import Images from "../components/images"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`interior designer`, `design`, `teresa daining`]} />
      <Images />
    </Layout>
  )
}



export default IndexPage
