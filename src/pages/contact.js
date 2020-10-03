import React from "react"
import Layout from "../components/layout"
import Icon from "../../content/assets/simomns_no_bg.svg"

const Contact = ({ location }) => {
  return (
    <Layout location={location} title="/contact">
      <Icon className="contact__icon" />
      <h2>You can contact me here</h2>
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
