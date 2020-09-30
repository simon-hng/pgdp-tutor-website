import React from "react"
import Header from "./header"

const themes = ["light", "dark", "pink"]
const lastTheme = localStorage.getItem("colorTheme")
let theme = lastTheme == null ? 0 : Number(lastTheme)

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const toggleTheme = () => {
    theme = theme < themes.length - 1 ? theme + 1 : 0
    localStorage.setItem("colorTheme", theme)
  }

  return (
    <div className={`layout ${themes[theme]}`} data-is-root-path={isRootPath}>
      <Header themeChange={toggleTheme} />
      <main className="main">
        <h1 className="layout__headline">{location.pathname}</h1>
        {children}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()}, Edit me on
        {` `}
        <a href="https://github.com/simon-hng/pgdp-tutor-website/">GitHub</a>
      </footer>
    </div>
  )
}

export default Layout
