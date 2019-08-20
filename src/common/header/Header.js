import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

import NavBar from './NavBar'

export default function Header() {
  return (
    <Fragment>
      <header>
        <div className="header">
          {/* <img src=""/> */}
          <Link to="/">
            Hostel
          </Link>
          <NavBar />
        </div>
      </header>
    </Fragment>
  )
}