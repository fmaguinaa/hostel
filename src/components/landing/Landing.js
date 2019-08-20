import React, { Component } from 'react'

export default class Landing extends Component {
  // const [variant, setVariant] = useState('')
  // const [subscribeEmail, setSubscribeEmail] = useState('')

  // const renderVariantContent = () => {
  //   if (variant === 'student') return StudentLanding()
  //   if (variant === 'tutor') return TutorLanding(subscribeEmail, setSubscribeEmail)
  state = {
    disabled: true
  }

  tutorConfirm = (e) => {
    e.preventDefault()
    this.props.history.push('/tutorconfirm');
  }

  render() {

    return (
      // <div className="landing">
      //   { LandingNavigation(variant, setVariant) }
      <div className="landing-container">
        <h1 className="heading-primary">
          Be your own boss and make money on your FREE time
        </h1>
        <form className="form u-margin-bottom-big">
          <div className="form__row form__row--1">
            <input className="search__input" placeholder="Enter your phone number" required type="number"></input>
            <div className="radio-group">
              <input type="checkbox" className="radio-group__input" id="small" name="size"
                onChange={()=>{
                  this.setState({ disabled: false })
              }} />
              <label htmlFor="small" className="radio-group__label">
                <span className="radio-group__button"></span>
                I agree to Papaya's terms &amp; conditions
              </label>
            </div>
          </div>
          <div className="form__row form__row--1">
            <button className="btn btn--form" disabled={this.state.disabled} onClick={this.tutorConfirm}>Apply to be a tutor</button>
            <button className="btn btn--form" onClick={(e) => {
              e.preventDefault()
              this.props.history.push('/signup');
            }}>Student sign up</button>
          </div>
        </form>
      </div>
    )
  }

}
