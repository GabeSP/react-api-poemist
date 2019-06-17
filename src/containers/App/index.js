import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Poems from '../Poems/Poems'
import style from './style.module.css'

class App extends Component {
  constructor () {
    super();

    this.state = {
      title: 'Poemist API'
    }
  }
  render () {
    return (
      <div>
        <Header title={this.state.title} />
        <div className={style.container}>
          <Poems></Poems>
        </div>
      </div>
    );
  }
}

export default App;
