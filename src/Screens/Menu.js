import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users,requirements } from '../Redux/actions/authActions'
import Navbar from './Navbar';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      textBox: '',
    }
  }

  updatePage(){
    const { textBox } = this.state
    this.props.requirements(textBox)
    this.props.history.push('./location')
  }

  render() {
    const { textBox } = this.state
    return (
      <div className="invitation">
        <Navbar />
        <div className="menu1">
          <h3>Do you or any of those attending with you have any specific dietary requirements?</h3>
          <br/>
          <textarea value={textBox} className="text1" onChange={(e) => this.setState({textBox: e.target.value})} placeholder="Enter Here..." />
          <br />
          {textBox ? <button className="btn3" onClick={() => this.updatePage()}>Submit</button> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log("mapToState",state.authReducer)
    return {
      user: state.authReducer.user,
      curr: state.authReducer.curr,
      guestNum: state.authReducer.guestNum,
      attend: state.authReducer.attend
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      users: (user) => dispatch(users(user)),
      requirements: (req) => dispatch(requirements(req)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);
