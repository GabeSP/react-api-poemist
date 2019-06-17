import React from 'react'
import PropTypes from 'prop-types'
import PoemCard from '../../components/PoemCard/PoemCard'
import style from './poemsList.module.css'

const PoemsList = (props) => (
  <div className={style.container}>
    {props.poems.map(poem => (
      <PoemCard  poem={poem}/>
    ))}
  </div>
)

PoemsList.defaultProps = {
  poems: []
}

PoemsList.propTypes = {
  poems: PropTypes.array
}

export default PoemsList
