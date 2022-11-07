import React, { useState } from 'react'
import './header.css'

function Header() {
  /*============= Change Background Header ============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')

    //when the scroll is higher than 560 viewport height, add
    //the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })

  /*============= Toggle Menu ============*/
  const [Toggle, setToggleShowMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  console.log(activeNav, 'activeNav?')

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Subeen
        </a>

        <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav_link active-link' : 'nav_link '
                }
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={
                  activeNav === '#projects'
                    ? 'nav_link active-link'
                    : 'nav_link '
                }
              >
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav_link active-link'
                    : 'nav_link '
                }
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => setToggleShowMenu(!Toggle)}
          ></i>
        </div>

        {/* right side menu icon */}
        <div className="nav_toggle" onClick={() => setToggleShowMenu(!Toggle)}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </div>
  )
}

export default Header
