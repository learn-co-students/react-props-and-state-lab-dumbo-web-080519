import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { toUnicode } from 'punycode'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    let selectValue = event.target.value
    console.log(selectValue)
    this.setState({
      filters: {
        type: selectValue
      }
    })
  }

  onFindPetsClick = () => {
    let petType = this.state.filters.type
    console.log(petType)
    let url = '/api/pets'

    switch(petType) {
      case 'all':
        url
        break
      case 'cat':
        url += '?type=cat'
        break
      case 'dog':
        url += '?type=dog'
        break
      case 'micropig':
        url += '?type=micropig'
        break
    }

    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(searchArray => {
      console.table(searchArray)
      this.setState({
        pets: searchArray
      })
    })

  }

  onAdoptPet = () => {
    this.setState({
      adopted: true
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType = { this.onChangeType }
                onFindPetsClick = { this.onFindPetsClick }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={ this.state.pets }
                onAdoptPet={ this.onAdoptPet }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
