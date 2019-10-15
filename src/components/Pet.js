import React from 'react'
// import { isatty } from 'tty'

class Pet extends React.Component { 

  handleAdopt = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  
  render() {

    const { name, type, gender, age, weight, isAdopted } = this.props.pet
    
    
    const petGender = () => {
      if(gender === "male") {
        return "♂"
      } else {
        return "♀"
      }
    }

    const onAdoptButton = () => {
      if(isAdopted) {
        return (
          <div className="extra content">
            {/* <button className="ui primary button" >Already adopted</button> */}
            <button className="ui disabled button">Already adopted</button>
          </div>
        )
      } else {
        return (
          <div className="extra content">
            {/* <button className="ui disabled button">Already adopted</button> */}
            <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>
          </div>
        )
      }
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petGender()}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        {onAdoptButton()}
      </div>
    )
  }
}

export default Pet
