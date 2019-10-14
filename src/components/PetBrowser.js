import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPetCards = () => {
    let petArray = this.props.pets
    console.table(petArray)

    return petArray.map(petObj => {
      return <Pet key={ petObj.id } pet={ petObj } isAdopted={petObj.isAdopted} onAdoptPet={ this.props.onAdoptPet }/>
    })
  }

  render() {
    console.log(this.props.pets);

    return <div className="ui cards">
      {this.renderPetCards()}
    </div>
  }

}

export default PetBrowser
