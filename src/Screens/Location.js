import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: '',
      correct: false
    }
  }

  componentDidMount() {
    const { allData } = this.props
    firebase.database().ref('users').push(allData)
  }

  checkPassword() {
    this.setState({
    })
  }

  render() {
    return (
      <div className="invitation">
        <Navbar />
        <h1>Location</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("mapToState", state.authReducer)
  return {
    allData: state.authReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users: (user) => dispatch(users(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
