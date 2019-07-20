import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { users } from '../Redux/actions/authActions'
import Navbar from './Navbar';
import firebase from '../firebase';

class Songs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: '',
      artist: '',
      add: false,
      arr: [],
      view: false,
      disable: true,
      like: {},
      abc: true
    }
  }

  componentDidMount() {
    const { allData } = this.props
    firebase.database().ref('users').push(allData)

  }

  componentWillMount() {
    this.callData()
  }

  async callData() {
    const { arr } = this.state
    var { like } = this.state
    var i = 0
    await firebase.database().ref('songs').on('child_added', (val) => {
      var value = val.val()
      like[i] = false
      console.log(this.state)
      arr.push(value)
      i++;
    })
    console.log('arr', arr)
    this.setState({ arr, disable: false, like })
  }

  addSong() {
    const { song, artist } = this.state
    var obj = {
      song: song,
      artist: artist,
      like: 0
    }
    this.setState({ abc : !this.state.abc })
    firebase.database().ref('songs').push(obj)
  }

  likeUpdate(i) {
    var { like } = this.state;
    like[i] = !like[i]
    this.setState({ like })
  }

  render() {
    const { song, artist, add, disable, view } = this.state
    var { like } = this.state
    return (
      <div>
        <div className="invitation" style={{ flex: 1 }}>
          <Navbar />
          <h1>Songs</h1>
          <button className="btn1" onClick={() => this.setState({ add: true })}>Add Song</button>
          <br />
          <button className="btn1" disabled={disable} onClick={() => this.setState({ view: !view })}>{!view ? 'View List' : 'Hide List'}</button>
          {add && <div className="song">
            <h2>Song Name</h2>
            <input placeholder="Enter Song Name Here" value={song} onChange={(e) => this.setState({ song: e.target.value })} className="input1" />
            <h2>Artist Name</h2>
            <input placeholder="Enter Artist Name Here" value={artist} onChange={(e) => this.setState({ artist: e.target.value })} className="input1" />
            <br />
            {song && artist && <button className="btn1" onClick={() => this.addSong()}>Continue</button>}
          </div>}
        </div>
        <div>
          {view ?
            <ol style={{ flex: 1 }}>
              {this.state.arr.map((v, i) => {
                return <li style={{ flex: 1 }} key={i}>
                  <div style={{ flex: 1 }}>
                    <div style={{ flex: 1 }}>
                      <h3>Song Name: {v.song}</h3>
                      <h4>Artist Name: {v.artist}</h4>
                    </div>
                    <div style={{ flex: 1 }}>
                      <button className="btnLike" onClick={() => this.likeUpdate(i)}>{!like[i] ? 'Like' : 'Unlike'}</button>
                    </div>
                  </div>
                </li>
              })}
            </ol>
            : null}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
