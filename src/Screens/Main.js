import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { updateUser } from '../Redux/actions/authActions'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      pass: '',
      correct: false
    }
  }

  checkPassword(){
    this.setState({
      correct: true
    })
    this.props.history.push('/invitation')
  }

  render() {
    const { pass } = this.state
    return (
      <div>
        <div className="form1">
          <h1>Please Enter your Password</h1>
          <input type="password" placeholder="Enter password Here" value={pass} onChange={(e) => this.setState({pass: e.target.value})} className="input1" />
          <br />
          {pass && <button className="btn1" onClick={() => this.checkPassword()}>Continue</button>}
        </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Main);
