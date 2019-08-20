import React from 'react'
import { LocationOn } from '@material-ui/icons';

export default function BasicInfo(props) {
  return (
    <div className="student-signup-container-basic u-margin-top-small">
      <div className="student-signup-container-basic-header">
        <h3 className="heading-tertiary heading-tertiary--center color-white u-margin-bottom-small">
          Awesome! We are happy to help you - Papaya's motto is to make STEM classes easy for you!
        </h3>
        <hr className="hr-primary" />
      </div>
      <div className="student-signup-grid">
        <h3 className="heading-secondary font-selima color-primary">
          Basic info
        </h3>
        <div className="student-signup-container-form">
          <h3 className="heading-quaternary heading-quaternary--1 color-primary u-margin-top-medium u-margin-bottom-small">
            Check your email, we sent you a registration code
          </h3>
          <form className="form--grid">
            <div className="form--grid__row__item--1">
              <label htmlFor="firstName" className="search__label--1">First Name:</label>
              <input id="firstName" type="text" className="search__input search__input--2" placeholder="First Name" />
            </div>
            <div className="form--grid__row__item--1">
              <label htmlFor="lastName" className="search__label--1">Last Name:</label>
              <input id="lastName" type="text" className="search__input search__input--2" placeholder="Last Name" />
            </div>
            <div className="form--grid__row__item--1">
              <label htmlFor="school" className="search__label--1">School:</label>
              <input id="school" type="text" className="search__input search__input--2" placeholder="School" />
            </div>
            <div className="form--grid__row__item--2">
              <label htmlFor="major" className="search__label--1">Major:</label>
              <input id="major" type="text" className="search__input search__input--2" placeholder="Major" />
            </div>
            <div className="form--grid__row__item--1">
              <label htmlFor="ageGroup" className="search__label--1">Age Group:</label>
              <input id="ageGroup" type="text" className="search__input search__input--2" placeholder="Age Group" />
            </div>
            <div className="form--grid__row__item--1">
              <label htmlFor="code" className="search__label--1">Code:</label>
              <input id="code" type="text" className="search__input search__input--2" placeholder="Code" />
            </div>
          </form>
        </div>

        <div className="student-signup-container-footer">
          <LocationOn className='icon__bug' />
          <div className="text-description">
            <div className="heading-secondary heading-secondary--sub color-white">Go, Knights!</div>
            <div className="heading-secondary heading-secondary--sub color-white">Orlando, Florida</div>
          </div>
        </div>
        <div className="form--grid__row__item--2">
          <button className="btn btn--orange" onClick={props.nextStep}>Next</button>
        </div>       
      
    </div>
            
  </div>
  )
}
