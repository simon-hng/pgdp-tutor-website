import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Link = props => (
  <AniLink
    fade
    activeClassName="menu__item--active"
    className="menu__item"
    to={props.path}
  >
    {props.name}
  </AniLink>
)

const Header = props => (
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
      <Link path="/" name="home" />
      <Link path="/tags" name="tags" />
      <Link path="/contact" name="contact" />
      <a className="menu__item" href="#" onClick={props.themeChange}>
        theme
      </a>

      <hr />

      <a className="menu__item" href="https://bbb.in.tum.de/sim-ttv-9a4">
        Tutoring Fridays 16:00 to 19:00
      </a>
    </nav>
  </header>
)

export default Header
