import React from 'react'
import style from './poemCard.module.css'

const PoemCard = (props) => (
  <div className={style.container}>
    <img className={style.img} src='https://source.unsplash.com/random' alt='img'/>
    <h2 className={style.title}>{props.poem.title}</h2>
    <div className={style.content}>
      <span className={style.url}>{props.poem.url}</span>
      <ul className={style.poemList}>
        <li className={style.poet}>
          <p className={style.author}>{props.poem.poet.name}</p>
          <p className={style.author}>{props.poem.poet.url}</p>
        </li>
      </ul>
    </div>
  </div>
)

export default PoemCard
