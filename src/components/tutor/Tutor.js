//import React,{Fragment,useState } from 'react'
//import StudentNavigation from '../../common/studentNavigation/StudentNavigation'

import React, { useState } from 'react'
import LandingNavigation from '../../common/landingNavigation/LandingNavigation'
import StudentLanding from '../student/StudentLanding'
import TutorLanding from '../../common/tutorLanding/TutorLanding'
import Footer from '../../common/footer/Footer'
import { Route, Switch } from 'react-router-dom'

/*<Route
    exact
        path={paths.home}
        render={() => <Redirect to={paths.dashboard} />}
      />
                <Route
                  exact
                  path={paths.dashboard}
                  render={() => <Dashboard client={client} />}
                />
  */

export default function Tutor() {
  return (
    // <div class="landing">
    //   { LandingNavigation(variant, setVariant) }
    <div class="tutor-container">
      <h3 class="heading-secondary heading-secondary--sub">
        Contribuye tus conocimientos con proposito
        </h3>
      <h1 class="heading-secondary">
        Quieres ganar dinero y cambiar el mundo?
        </h1>
      <h1 class="heading-secondary u-margin-bottom-medium">
        Inscribete hoy.
        </h1>
      <div class="form-tutor">
        <div class="form-tutor__row u-width-quarter">
          <input type="email" class="search__input" placeholder="Correo Electronico"></input>
        </div>
        <div class="form-tutor__row">
          <button class="btn btn--orange">Inscribeme</button>
        </div>
      </div>
    </div>)
  // </div>
  //   )
  // }

}