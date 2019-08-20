//import React,{Fragment,useState } from 'react'
//import StudentNavigation from '../../common/studentNavigation/StudentNavigation'

import React, { useState } from 'react'
import LandingNavigation from '../../common/landingNavigation/LandingNavigation'
import StudentLanding from '../student/StudentLanding'
import TutorLanding from '../../common/tutorLanding/TutorLanding'
import Footer from '../../common/footer/Footer'
import { Route, Switch } from 'react-router-dom'
import image from "../../assets/images/background/image.png"
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

export default function Proposito() {
  return (

    // <div class="landing">
    //   { LandingNavigation(variant, setVariant) }
    <div class="tutor-options-container">
      <div class="tutor-options-container__item content">
        <h1 class="heading-tertiary u-margin-bottom-medium">
          Nuestro proposito, el tuyo y el nuestro
        </h1>
        <p class="paragraph">
          Papaya quiere ayudar a la gente latina a triunfar en el mundo tecnológico. Estadísticas muestran que hay un total de 8% de latinos en tech y queremos cambiar ese número mientras cambiamos las percepciones de la gente al nivel mundial! Como se dice en Perú, este desafío va ser Papaya ;). Dónde está mi gente??
        </p>
      </div>
      <img
        // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
        // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="tutor-options-container__item Photo 1"
        class="photo composition__photo--p1"
        src={image}></img>
    </div>

  )
  // </div>
  //   )
  // }

}