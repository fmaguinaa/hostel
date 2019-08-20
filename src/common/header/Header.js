import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <Fragment>
      <header>
        <div className="header">
          {/* <img src=""/> */}
          <Link to="/">
            Hostel
          </Link>
        </div>
      </header>
    </Fragment>
  )
}