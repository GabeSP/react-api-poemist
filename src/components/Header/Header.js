import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
  <nav className="nav">
    <div className="container">
      <h1>{props.title}</h1>
    </div>
  </nav>
)

Header.defaultProps = {
  title: 'Title'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
