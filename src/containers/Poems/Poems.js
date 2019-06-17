import React, { Component } from 'react'
import PoemsList from '../PoemsList/PoemsList';
import style from './poems.module.css'

const poems = [
  {
    "id": 1,
    "title": "Go Back To The Tainted Lap, Leah",
    "content": "Go back to the tainted lap, Leah,\nWhence you came,\nBecau... rest of the poem will be here",
    "url": "https://www.poemist.com/osip-emilevic-mandelstam/go-back-to-the-tainted-lap-leah",
    "poet": {
      "name": "Osip Emilevic Mandelstam",
      "url": "https://www.poemist.com/osip-emilevic-mandelstam"
    }
  },
  {
    "id": 2,
    "title": "Go Back To The Tainted Lap, Leah",
    "content": "Go back to the tainted lap, Leah,\nWhence you came,\nBecau... rest of the poem will be here",
    "url": "https://www.poemist.com/osip-emilevic-mandelstam/go-back-to-the-tainted-lap-leah",
    "poet": {
      "name": "Osip Emilevic Mandelstam",
      "url": "https://www.poemist.com/osip-emilevic-mandelstam"
    }
  },
  {
    "id": 3,
    "title": "Go Back To The Tainted Lap, Leah",
    "content": "Go back to the tainted lap, Leah,\nWhence you came,\nBecau... rest of the poem will be here",
    "url": "https://www.poemist.com/osip-emilevic-mandelstam/go-back-to-the-tainted-lap-leah",
    "poet": {
      "name": "Osip Emilevic Mandelstam",
      "url": "https://www.poemist.com/osip-emilevic-mandelstam"
    }
  }
]

class PoemService {
  static getPoems() {
      return poems ? poems : [];
  }
}

class Poems extends Component {
  constructor() {
    super();

    this.state = {
      poems: []
    };
  }

  componentDidMount() {
    this.setState(() => ({ poems: PoemService.getPoems() }))
  }

  render() {
    return (
      <div className={style.container}>
        <PoemsList poems={this.state.poems} />
      </div>
    )
  }
}

export default Poems
