import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button> */}
              <Link className="navbar-brand" to="/invitation">Invitation</Link>
              <Link className="navbar-brand" to="/menu">Menu</Link>
              <Link className="navbar-brand" to="/location">Location</Link>
              <Link className="navbar-brand" to="/Songs">Songs</Link>

            </div>
            {/* <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div> */}
          </div>
        </nav>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users: (user) => dispatch(users(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
