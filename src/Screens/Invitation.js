import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { updateUser } from '../Redux/actions/authActions'
import Navbar from './Navbar';

class Invitation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guest: false,
      guestNum: 0
    }
  }

  selectOpt(val) {
    if (val === "yes") {
      this.setState({ guest: true })
    }
    else {
      this.setState({ guest: false })
    }
  }

  updatePage(){
    this.props.history.push('/menu')
  }


  render() {
    const { guestNum, guest } = this.state
    return (
      <div>
        <Navbar />
        <div className="invitation">
          <h1>Wellcome, Mr Smith</h1>
          <h2>Will you attend?</h2>
          <select className="opt" onChange={(e) => this.selectOpt(e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <br />
          {guest ? <div>
          <h3>How many guests will be attending with you?</h3>
          <input placeholder="Enter password Here" type="number" value={guestNum} onChange={(e) => this.setState({guestNum: e.target.value})} className="input2" />
          <br />
          {guestNum ? <button className="btn2" onClick={() => this.updatePage()}>Submit</button> : null}
          </div> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("mapToState", state.authReducer)
  return {
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
