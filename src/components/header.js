import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import css from '../style/gen-style.css'

const Header = ({ siteTitle }) => (
  <header className='gen-header'
    // style={{
    //   background: `#1b1b1b`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
