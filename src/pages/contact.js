import React from "react"

import Layout from "../components/layout"

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Contact</h1>
      <ul>
        <li>
          <a href="mailto:simon.huang@tum.de">simon.huang@tum.de</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
