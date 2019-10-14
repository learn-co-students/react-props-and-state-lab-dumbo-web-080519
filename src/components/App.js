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
  }

  onChangeType = (event) => {
    let selectValue = event.target.value
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

    fetch(url)
    .then(res => res.json())
    .then(searchArray => {
      this.setState({
        pets: searchArray
      })
    })

  }

  onAdoptPet = (petObj) => {
    const id = petObj.id
    // this.props.pet = {...petObj, isAdopted: true}
    const newArray = this.state.pets.map(pet => {
      if(pet.id === id) {
        console.log(pet)
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    this.setState({pets: newArray}, () => console.log(this.state))
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
