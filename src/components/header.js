import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header class="header" role="banner">
      <input
        type="checkbox"
        class="menu-checkbox visually-hidden"
        id="menu-toggle"
      />
      <label for="menu-toggle" class="menuicon" role="button">
        <a class="visually-hidden">open menu</a>
        <div class="menuicon__line menuicon__line--top"></div>
        <div class="menuicon__line menuicon__line--middle"></div>
        <div class="menuicon__line menuicon__line--bottom"></div>
      </label>

      <nav class="menu" role="navigation" aria-expanded="true">
        <Link className="menu__item" to="/">
          home
        </Link>
        <Link className="menu__item" to="/tags">
          tags
        </Link>
      </nav>
    </header>
  )
}

export default Header
