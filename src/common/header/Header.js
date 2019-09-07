import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import headImage from '../../layout/images/logo.jpg'
import headImageM from '../../layout/images/logo2.jpg'

import NavBar from './NavBar'

import * as paths from '../../routes/paths'

export default function Header() {
  return (
    <Fragment>
      <header>
        <div className="main__header">
          <div className='main__header__brand'>
            <Link to={paths.landing} className='brand__desktop'>
              <img src={headImage} alt='logo'/>
            </Link>
            <Link to={paths.landing} className='brand__mobile'>
              <img src={headImageM} alt='logo-mobile'/>
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
              Galería
              </Link>
            <Link to={paths.reservas}>
              Reservas
              </Link>
            <Link to={paths.contactenos}>
              Contáctenos
              </Link>
          </div>
          <NavBar />
        </div>
      </header>
    </Fragment>
  )
}