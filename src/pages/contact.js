import React from "react"

import Layout from "../components/layout"

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <h2>TODO: styling</h2>
      <ul>
        <li>
          <a href="mailto:simon.huang@tum.de">simon.huang@tum.de</a>
        </li>
        <li>
          <a href="https://github.com/simon-hng/">GitHub</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
