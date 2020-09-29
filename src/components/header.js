import React from "react"
import { Link } from "gatsby"

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
        <Link className="menu__item" to="/">
          home
        </Link>
        <Link className="menu__item" to="/tags">
          tags
        </Link>
        <Link className="menu__item" to="/contact">
          contact
        </Link>
        <a className="menu__item" href="#" onClick={props.themeChange}>
          theme
        </a>
      </nav>
    </header>
  )
}

export default Header
