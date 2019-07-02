import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { updateUser } from '../Redux/actions/authActions'
import Navbar from './Navbar';

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      textBox: '',
    }
  }

  updatePage(){
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
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateUser: (user) => dispatch(updateUser(user)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);
