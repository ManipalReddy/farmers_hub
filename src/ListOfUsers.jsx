import React, { Component } from 'react';
import axios from 'axios';

class ListOfUsers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listOfUsers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/people')
    .then(result => {
      const usersList = result.data;
      this.setState({listOfUsers: usersList});
    });
  }

  render() {
    // const divStyle = {
    //   color: 'blue',
    //   backgroundImage: 'url(' + imgUrl + ')'
    // };
    return (
        <div style={null}>
          <h1>List of Farmers Registered</h1>
          <ul>
            {this.state.listOfUsers.map(user => <li>{user.name}, {user.gender}, {user.age}</li>)}
          </ul>
        </div>
    );
  }
}

export default ListOfUsers