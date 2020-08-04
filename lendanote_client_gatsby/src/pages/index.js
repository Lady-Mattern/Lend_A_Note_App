import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { isLoggedIn } from "../services/auth"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Schools lending their notes to make beautiful music together...</h2>
    <h3>Hello {isLoggedIn() ? getUser().name : "World"}!</h3>
    <p>
      {isLoggedIn() ? (
        <>
          You are Logged in, so check your{" "}
          <Link to="/app/profile">My Page</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to view your music
        </>
      )
      )}
    </p>
  </Layout>
)

export default IndexPage
