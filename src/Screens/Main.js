import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users, currrentUser } from '../Redux/actions/authActions'
import swal from 'sweetalert';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pass: '',
      users: [
        { name: "John", pass: "abc123" },
        { name: "Smith", pass: "abc124" },
        { name: "Buttler", pass: "abc125" },
        { name: "Root", pass: "abc126" },
        { name: "Roy", pass: "abc127" },
        { name: "Johnny", pass: "abc128" },
        { name: "Morgan", pass: "abc129" },
        { name: "Bell", pass: "abc130" },
        { name: "Smith", pass: "abc131" },
        { name: "Warner", pass: "abc132" }
      ]
    }
  }

  checkPassword() {
    const { users, pass } = this.state
    var auth = false
    for (var data of users) {
      if (data.pass === pass) {
        this.props.currrentUser(data)
        auth = true
        break
      }
    }
    if (!auth) {
      swal("Please Enter Correct Password")
    }
    else {
      this.props.history.push('/invitation')
    }
  }

  render() {
    const { pass } = this.state
    return (
      <div>
        <div className="form1">
          <h1>Please Enter your Password</h1>
          <input type="password" placeholder="Enter password Here" value={pass} onChange={(e) => this.setState({ pass: e.target.value })} className="input1" />
          <br />
          {pass && <button className="btn1" onClick={() => this.checkPassword()}>Continue</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("mapToState",state.authReducer)
  return {
    guestNum: state.authReducer.guestNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users: (user) => dispatch(users(user)),
    currrentUser: (user) => dispatch(currrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
