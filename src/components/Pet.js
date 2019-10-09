import React from 'react'

class Pet extends React.Component {

  renderButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button id={this.props.pet.id} className="ui disabled button">Already adopted</button>
    } else {
      return <button id={this.props.pet.id} className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  // handleAdoptClick = evt => {
  //   let petId = evt.target.id;
  //   // console.log(evt.target);
  //   // console.log(this.props);
  //   // debugger;
  //   this.props.onAdoptPet(petId);
  // }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
