import React from 'react'

class Pet extends React.Component {

  render() {
    let petInfo = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {petInfo.gender === "male" ? '♀' : '♂' }
            { petInfo.name }
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          { petInfo.isAdopted ?
              <button className="ui disabled button">Already adopted</button>
              :
              <button className="ui primary button" onClick={ () => this.props.onAdoptPet(petInfo) }>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
