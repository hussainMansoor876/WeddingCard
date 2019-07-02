import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { updateUser } from '../Redux/actions/authActions'
import Navbar from './Navbar';
class Location extends Component {
  constructor(props){
    super(props)
    this.state = {
      pass: '',
      correct: false
    }
  }

  checkPassword(){
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
    console.log("mapToState",state.authReducer)
    return {
      user: state.authReducer.user,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateUser: (user) => dispatch(updateUser(user)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Location);
