import React, { Fragment } from 'react'

import Social from '../social/Social'

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className='footer-primary'>
          <Social />
          {/* <div className='footer-text'>
            <a href='https://goo.gl/maps/mxM7JLUarxYFnwCB9' target='_blank' rel="noopener noreferrer">Jr. Enrique Palacios 312, Huaraz</a>
          </div> */}
          <div className="footer-primary--copyright">
            Hostel Traveller's Palace © 2019
          </div>
        </div>
      </footer>
    </Fragment>
  )
}