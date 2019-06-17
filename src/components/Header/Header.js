import React from 'react'
import PropTypes from 'prop-types'
import style from './header.module.css'

const Header = (props) => (
  <nav className={style.nav}>
    <div className={style.container}>
      <h1 className={style.title}>{props.title}</h1>
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
