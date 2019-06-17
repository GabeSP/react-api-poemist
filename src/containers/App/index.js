import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Poems from '../Poems/Poems'
import style from './style.module.css'

class App extends Component {
  constructor () {
    super();

    this.state = {
      title: 'Poemist API',
      poems: []
    }
  }

  componentDidMount() {
    axios
    .get('https://www.poemist.com/api/v1/randompoems')
    .then(response => {
      const newPoems = response.data.map(r => {
        return {
          title: r.title,
          name:  r.poet.name,
          content: r.content,
          url:   r.poet.url
        }
      })

      const newState = Object.assign({}, this.state, {
        poems: newPoems
      })

      this.setState(newState)
    })
    .catch(error => console.log(error));
  }

  render () {
    return (
      <div>
        <Header title={this.state.title} />
        <div className={style.container}>
          <Poems poems={this.state.poems}/>
        </div>
      </div>
    );
  }
}

export default App;
