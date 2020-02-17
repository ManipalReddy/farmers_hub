import React, { Component } from 'react';

class RegistrationForm extends Component {

  constructor(props) {
    super(props)
    this.changeName = this.changeName.bind(this);
    this.state = {
      name: '',
    };
  }

  changeName() {
    this.setState(state => ({
      name: 'You are in the Farmers Hub'}));
  }

  render() {
    // const divStyle = {
    //   color: 'blue',
    //   backgroundImage: 'url(' + imgUrl + ')'
    // };

    return (
        <div style={null}>
          <form> 
            <h2>
            <input type="text" placeholder="First Name" />
            <br />
            <input type="text" placeholder="Last Name" />
            <br />
            <input type="text" placeholder="Email Address" />
            <br />
            </h2>
            <button onClick={this.changeName}>
              Submit
            </button>
          </form>
        </div>
    );
  }
}

export default RegistrationForm