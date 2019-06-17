import React from 'react'
import { doTruncarStr, doShortUrl } from '../../utils/tools'
import style from './poemCard.module.css'

const PoemCard = (props) => (
  <div className={style.container}>
    <h2 className={style.title}>{props.poem.title}</h2>
    <div className={style.body}>
      <p className={style.author}>
        <span className={style.authorName}>{props.poem.name}</span>
        <a href={props.poem.url} className={style.authorUrl}>{doShortUrl(props.poem.url)}</a>
      </p>
      <p className={style.content}>{doTruncarStr(props.poem.content, 600)}</p>
    </div>
  </div>
)

export default PoemCard
