import React, { Component } from 'react';

export default class Session extends Component {
  state = {
    mode: 'CONNECTING',
    customTipActive: false,
    tutorRating: 0,
    tip: 0,
    comment: ''
  }

// Request tutor
// Render loader
// When match found, remove loader, render indication that tutor has been found
// Begin timer and begin connection with tutor in new window.

  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  setTip = (e) => {
    this.setState({ tip: e.target.value, customTipActive: false })
  }

  setCustomTip = (value) => {
    this.setState({ tip: 0, customTipActive: value })
  }

  setTutorRating = (e) => {
    this.setState({ tutorRating: e.target.value })
  }

  renderCustomTipField = () => {
    if (this.state.customTipActive === true) {
      return (
        <React.Fragment>
          <input type="text" defaultValue={0} onChange={ this.handleChange.bind(this, 'tip') }/>
        </React.Fragment>
      )
    }
  }

  beginConnection = () => {
    window.open('http://localhost:3000/connection', 'newwindow', 'width=750, height=500');
    this.setState({ mode: 'CONNECTED' })
  }

  disconnectSession = () => {
    this.setState({ mode: 'SESSION-COMPLETE' })
  }

  submitPostSessionForm = () => {
    this.props.history.push('/dashboard')
  }

  renderSessionComponent = () => {
    if (this.state.mode === 'CONNECTED') {
      return (
        <React.Fragment>
          <p>You have started your session with --tutor name--</p>
          <p>Current session --timer--</p>
          <button onClick={ () => this.disconnectSession() }>
            Finish Session
          </button>
        </React.Fragment>
      )
    } else if (this.state.mode === 'SESSION-COMPLETE') {
      return (
        <React.Fragment>
          <p>Your session was --time-- minutes long.</p>
          <p>--session price-- will be billed to your account.</p>
          <p>We hope you enjoyed learning with --tutor name--</p>
          <p>Add a tip</p>
          <input type="radio" name="tip" value="2" onChange={ (e) => this.setTip(e) } /> $2
          <input type="radio" name="tip" value="3" onChange={ (e) => this.setTip(e) } /> $3
          <input type="radio" name="tip" value="5" onChange={ (e) => this.setTip(e) } /> $5
          <input type="radio" name="tip" value=""  onChange={ () => this.setCustomTip(true) } /> Custom { this.renderCustomTipField() }

          <p>How well did your tutor do?</p>

          <input type="radio" name="tutorRating" value="1" onChange={ (e) => this.setTutorRating(e) }/> 1: Bad
          <input type="radio" name="tutorRating" value="2" onChange={ (e) => this.setTutorRating(e) }/> 2: Poor
          <input type="radio" name="tutorRating" value="3" onChange={ (e) => this.setTutorRating(e) }/> 3: Okay
          <input type="radio" name="tutorRating" value="4" onChange={ (e) => this.setTutorRating(e) }/> 4: Good
          <input type="radio" name="tutorRating" value="5" onChange={ (e) => this.setTutorRating(e) }/> 5: Great
          <p>Comments:</p>
          <textarea rows="4" cols="50" placeholder="Share some feedback about your experience." onChange={ this.handleChange.bind(this, 'comment')}></textarea>
          <button onClick={ () => this.submitPostSessionForm() }>Submit</button>
        </React.Fragment>
      )
    } else if (this.state.mode === 'CONNECTING') {
      return (
        <React.Fragment>
          <p>Papaya is matching you with your tutor</p>
          <p>Loading...</p>
          <button onClick={() => this.beginConnection()}>
            Begin Session
          </button>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p>Loading...</p>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <article>
        { this.renderSessionComponent() }
      </article>
    );
  }
}