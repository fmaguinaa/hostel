import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'

import { updateState } from '../../utils'

export default function Registration({match}) {
  const [variant, setVariant]     = useState(match.params.mode)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [school, setSchool]       = useState('')
  const [major, setMajor]         = useState('')
  const [verify, setVerify]       = useState(false)

  const schools = [
    'University of Central Florida',
    'University of South Florida'
  ]

  const majors = [
    'Computer Science'
  ]

  const subscribe = (e) => {
    e.preventDefault()
    alert('subscribed!')
    // subscribe with email
    setEmail('')
  }

  const renderResourcesDropdown = (resources) => {
    return resources.map((resource, i) => {
      return <option key={i} value={resource}>{resource}</option>
    })
  }

  const registerUser = (e) => {
    e.preventDefault()
    if (formComplete() && isOverEighteen()) {
      // create user, send verification code to email
      setVerify(true)
    }
  }

  const isOverEighteen = () => {
    var today = new Date()
    today.setFullYear(today.getFullYear() - 18)
    return today > new Date(birthDate) ? true : false
  }

  const formComplete = () => {
    if (firstName && lastName &&  email && birthDate && school && major) {
      return true
    } else {
      return false
      alert('⚠️ Please complete all required fields before submitting.')
    }
  }

  if (verify) {
    return <Redirect to='/verification'/>
  }

  if (variant === 'tutor') {
    return (
      <Fragment>
        <form onSubmit={(e) => subscribe(e)}>
          <p>We're working on bringing together the best tutors. Subscribe to become a part of our movement.</p>
          <input type='text' placeholder='Email' onChange={(e) => updateState(setEmail, e)} value={email} />
          <input type='submit' />
        </form>
      </Fragment>
    )
  }

  if (variant === 'student') {
    return (
      <Fragment>
        <form onSubmit={(e) => registerUser(e)}>
          <p>Sign up to become a member of our growing community of students seeking tutors 🐱.</p>
          <input type='text' placeholder='First Name' onChange={(e) => updateState(setFirstName, e)} required />
          <input type='text' placeholder='Last Name' onChange={(e) => updateState(setLastName, e)} required />
          <input type='text' placeholder='Email' onChange={(e) => updateState(setEmail, e)} required />
          <input type='date' onChange={(e) => updateState(setBirthDate, e)} required />
          <select onChange={(e) => updateState(setSchool, e)} required>
            <option defaultValue value=''>Select University</option>
            { renderResourcesDropdown(schools) }
          </select>
          <select onChange={(e) => updateState(setMajor, e)} required>
            <option defaultValue value=''>Select Major</option>
            { renderResourcesDropdown(majors) }
          </select>
          <input type='submit' />
        </form>
      </Fragment>
    )
  }
}