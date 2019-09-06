import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import headImage from '../../layout/images/logo.jpg'

import NavBar from './NavBar'

import * as paths from '../../routes/paths'

export default function Header() {
  return (
    <Fragment>
      <header>
        <div className="main__header">
            <div className='main__header__brand'>
              <Link to={paths.landing}>
                <img src={headImage} />
              </Link>
            </div>
            <div className='main__header__links'>
              <Link to={paths.landing}>
                Inicio
              </Link>
              <Link to={paths.nosotros}>
                Nosotros
              </Link>
              <Link to={paths.galeria}>
                Galeria y Referencias
              </Link>
              <Link to={paths.contactenos}>
                Contactenos
              </Link>
              <Link to={paths.reservas}>
                Reservas
              </Link>
            </div>
            <NavBar />
        </div>
      </header>
    </Fragment>
  )
}