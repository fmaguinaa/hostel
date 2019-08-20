import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Assistant } from '@material-ui/icons';

import './LandingNavigation.css'

export default function LandingNavigation(variant, setVariant) {
  const renderNavigation = () => {
    if (variant === 'tutor') {
      return (
        <Fragment>
          <li onClick={() => setVariant('student')}>Student</li>
          <li>
            <Link to='/register/tutor'>Become a member</Link>
          </li>
        </Fragment>
      )
    } else if (variant === 'student') {
      return (
        <Fragment>
          <li onClick={() => setVariant('tutor')}>Tutor</li>
          <li>
            <Link to='/register/student'>Become a member</Link>
          </li>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <li onClick={() => setVariant('tutor')}>Tutor</li>
          <li onClick={() => setVariant('student')}>Student</li>
        </Fragment>
      )
    }
  }

  return (
    <div className='navigation'>
      <header>
        <nav>
          <Assistant className='icon__bug' onClick={() => setVariant('')}/>
          <ul>
            { renderNavigation() }
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}