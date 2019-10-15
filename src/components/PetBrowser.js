import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  petCard = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={`pet-${pet.id}`} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">
      {this.petCard()}
    </div>
  }
}

export default PetBrowser
