import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    this.queryMapper = {
      all: '',
      cat: '?type=cat',
      dog: '?type=dog',
      micropig: '?type=micropig'
    }
  }

  onChangeType = evt => {
    this.setState({
      type: evt.target.value
    })
  }

  onFindPetsClick = () => {
    console.log(this.queryMapper[this.state.filters.type]);
    fetch('/api/pets' + this.queryMapper[this.state.filters.type])
    .then(res => res.json())
    .then(petsArr => this.setState({
      pets: petsArr
    }))
  }

  onAdoptPet = petId => {
    let newPets = [...this.state.pets]
    let adoptedPet = newPets.find(pet => pet.id === petId)
    let index = newPets.indexOf(adoptedPet)
    newPets[index].isAdopted = true
    this.setState({
      pets: newPets
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
              <Filters onChangeType={this.onChangeType}
                       onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
