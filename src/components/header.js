import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = props => {
  return (
    <header className="header" role="banner">
      <input
        type="checkbox"
        className="menu-checkbox visually-hidden"
        id="menu-toggle"
      />
      <label for="menu-toggle" className="menuicon" role="button">
        <a className="visually-hidden">open menu</a>
        <div className="menuicon__line menuicon__line--top"></div>
        <div className="menuicon__line menuicon__line--middle"></div>
        <div className="menuicon__line menuicon__line--bottom"></div>
      </label>

      <nav className="menu" role="navigation" aria-expanded="true">
        <AniLink fade className="menu__item" to="/">
          home
        </AniLink>
        <AniLink fade className="menu__item" to="/tags">
          tags
        </AniLink>
        <AniLink fade className="menu__item" to="/contact">
          contact
        </AniLink>
        <a className="menu__item" href="#" onClick={props.themeChange}>
          theme
        </a>
      </nav>
    </header>
  )
}

export default Header
