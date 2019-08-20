import React, { Fragment, Component } from 'react'
export default class Verification extends Component {

    render() {
    return (
      <Fragment>
        <div className="login-container-header">
          <h3 className="heading-secondary heading-secondary--sub color-white">
            Welcome back!
          </h3>
        </div>
        <form className="form">
          <div className="form__row form__row--2">
            <input type="email" className="search__input" placeholder="Mail address"></input>
          </div>
          <div className="heading-secondary heading-secondary--sub color-white">
            We'll send a text to verify your phone
        </div>
          <div className="radio-group">
            <input type="checkbox" className="radio-group__input" id="small" name="size"></input>
            <label htmlFor="small" className="radio-group__label">
              <span className="radio-group__button"></span>
              Keep me signed in
            </label>
          </div>
          <div className="form__row form__row--2">
            <button className="btn btn--orange" onClick={this.props.next}>Next</button>
          </div>
        </form>
      </Fragment>
    )
  }
}
