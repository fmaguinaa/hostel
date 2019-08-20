import React, { Component } from 'react'

import image from "../../assets/images/background/image.png"

export default class Student extends Component {
  studentSubscribe = (e) => {
    e.preventDefault()
    this.props.history.push('/signup')
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="student-container">
          <div className="student-container__phrases">
            <h3 className="heading-secondary">
              The help you need.
          </h3>
            <h1 className="heading-secondary  u-margin-bottom-medium">
              The tutors you need just a click away
          </h1>
            <div className="form">
              <div className="form__row form__row--2 u-width-quarter">
                <input type="email" className="search__input" placeholder="Correo Electronico"></input>
              </div>
              <div className="form__row form__row--2">
                <button className="btn btn--orange" onClick={this.studentSubscribe}>Inscribeme</button>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="student-options" id="about">
          <div className="student-options-container student-options-container--1" >
            <div className="vertical-center">
              <div className="features u-margin-bottom-big">
                <div className="feature center">
                  <div className="item">1</div>
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    CONVENIENCE
                </h1>
                  <p className="paragraph">
                    On-demand tutoring to help you when you need, where you need it
                </p>
                </div>
                <div className="feature center">
                  <div className="item">2</div>
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    AFFORDABILITY
              </h1>
                  <p className="paragraph">
                    With our $2.99 to-start model, a tutoring class is 50% cheaper than avg
                </p>
                </div>
                <div className="feature center">
                  <div className="item">3</div>
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    SIMPLICITY
                </h1>
                  <p className="paragraph">
                    Save your time and your sanity. Get ad-hoc solutions to your questions
                </p>
                </div>
                <div className="feature center">
                  <div className="item">4</div>
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    COMMUNITY1
                </h1>
                  <p className="paragraph">
                    We want to connect students with the same goals, all around the world
                </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PURPOSE */}
        <div className="student-options" id="purpose">
          <div className="tutor-options-container">
            <img
              alt="purpose"
              className="photo composition__photo--p1"
              src={image} />
            <div className="tutor-options-container__item content">
              <h1 className="heading-tertiary heading-tertiary--2 u-margin-bottom-medium">
                MISSION
            </h1>
              <p className="paragraph">
                At Papaya, we believe is all about confidence. We want to...
            </p>
            </div>

          </div>
        </div>
        {/* HOW IT WORKS */}
        <div className="student-options" id="howitworks">
          <div className="student-options-container student-options-container--1">
            <div className="vertical-center">
              <h1 className="heading-tertiary">
                Easy to use
            </h1>
              <div className="features">
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 1
                </h3>
                  <p className="paragraph">
                    Go online
                </p>
                  <img
                    alt="howworks1"
                    className="photo photo--p1"
                    src={image} />
                </div>
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 2
                </h3>
                  <p className="paragraph">
                    Accept sessions and start making dough!
                </p>
                  <img
                    // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="howworks2"
                    className="photo photo--p1"
                    src={image} />
                </div>
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 3
                </h3>
                  <p className="paragraph">
                    Cash out instantly
                </p>
                  <img
                    // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="howworks3"
                    className="photo photo--p1"
                    src={image} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}