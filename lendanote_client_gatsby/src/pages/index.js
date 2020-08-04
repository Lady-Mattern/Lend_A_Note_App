import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Schools lending their notes to make beautiful music together...</h2>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <h3>Login to search from a library of hundreds of pieces on loan from schools across the country!</h3>
  </Layout>
)

export default IndexPage
