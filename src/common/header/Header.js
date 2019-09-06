import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'antd'


import NavBar from './NavBar'

export default function Header() {
  return (
    <Fragment>
      <header>
        <div className="header">
          {/* <img src=""/> */}
          <Row>
          <Link to="/">
            Hostel
          </Link>
          <NavBar />
          </Row>
        </div>
      </header>
    </Fragment>
  )
}