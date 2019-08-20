import React, { Fragment, Component } from 'react'

export default class Verification extends Component {
  render() {
    return (
      <Fragment>
        <div className="login-container-header">
          <h3 className="heading-secondary heading-secondary--sub color-white">
            Enter verification code
          </h3>
        </div>
        <form className="form">
          <div className="form__row form__row--2">
            <input type="email" className="search__input" placeholder="Mail address"></input>
          </div>
          <div className="heading-secondary heading-secondary--sub color-white" style={{paddingBottom: '4rem'}}>
            We send a text to the phone number below. +1 (310) 123 1231
          </div>
          <div className="form__row form__row--2">
            <button className="btn btn--orange" onClick={this.props.next}>Next</button>
          </div>
        </form>
        <div className="heading-quaternary color-black">
            Problems receiving the code?
            Support Center
        </div>
      </Fragment>
    )
  }
}
