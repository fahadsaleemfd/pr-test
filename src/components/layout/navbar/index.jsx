import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, Smile } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'
import ThemeChanger from "./themeChanger"

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <Smile className="align-middle nav-title-color"/> <span className="align-middle main-title-color"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation ">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User className="nav-title-color" /> <span className="nav-title-color"> About </span> </Link></li> 
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase className="nav-title-color" /> <span className="nav-title-color"> Portfolio </span> </Link></li>  
              <li><Link to="/blog" className="lined-link" activeClassName="active"> <Feather className="nav-title-color" /> <span className="nav-title-color"> Blog </span> </Link></li>
              <li><ThemeChanger></ThemeChanger></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
