import React from 'react'

class Pet extends React.Component {

  render() {
    let petInfo = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { petInfo.name }{' '}
            {petInfo.gender === "female" ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {petInfo.age}</p>
            <p>Weight: {petInfo.weight}</p>
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
