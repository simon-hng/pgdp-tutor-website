import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = props => {
  const link = (path, name) => (
    <AniLink
      fade
      activeClassName="menu__item--active"
      className="menu__item"
      to={path}
    >
      {name}
    </AniLink>
  )

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
        {link("/", "home")}

        {link("/tags", "tags")}

        {link("/contact", "contact")}

        <a className="menu__item" href="#" onClick={props.themeChange}>
          theme
        </a>
      </nav>
    </header>
  )
}

export default Header
