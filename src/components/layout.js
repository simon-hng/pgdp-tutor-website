import React from "react"
import Header from "./header"

const themes = ["light", "dark", "pink"]
let theme = 0

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const toggleTheme = () => {
    theme = theme < themes.length - 1 ? theme + 1 : 0
  }

  return (
    <div
      className={`global-wrapper ${themes[theme]}`}
      data-is-root-path={isRootPath}
    >
      <Header themeChange={toggleTheme} />
      <main className="main">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
