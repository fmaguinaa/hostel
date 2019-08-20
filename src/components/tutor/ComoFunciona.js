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

export default function ComoFunciona() {
  return (

    // <div class="landing">
    //   { LandingNavigation(variant, setVariant) }
    <div class="tutor-options-container tutor-options-container--1">
      <div class="features u-margin-bottom-big">
        <div class="feature">
          <h1 class="heading-tertiary u-margin-bottom-small">
            Ganancias de Confianza
          </h1>
          <p class="paragraph">
            Papaya quiere ayudar a estudiantes de tu calibre para hacer dinero facil - cuando y donde te sea mas conveniente... Es Papaya ;)
          </p>
        </div>
        <div class="feature">
          <h1 class="heading-tertiary u-margin-bottom-small">
            Lo mas Vital
          </h1>
          <p class="paragraph">
            Nada mas necesitas acceso a una computadora con y una buena conexion al internet - simple!
          </p>
        </div>
        <div class="feature">
          <h1 class="heading-tertiary u-margin-bottom-small">
            Necesitas una computadora?
          </h1>
          <p class="paragraph">
            Estamos creando un programa para ayudar a estudiantes a obtener una computadora pagando poco a poco con tutoria.
          </p>
        </div>
      </div>
      <div>
      <h1 class="heading-tertiary">
        Easy to use
      </h1>
      <div class="features">
        <div class="feature">
          <h3 class="heading-quaternary u-margin-bottom-small">
            Step 1
          </h3>
          <p class="paragraph">
            Go online
          </p>
          <img 
        // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="Photo 1"
                    class="photo photo--p1"
                    src={image}></img>
        </div>
        <div class="feature">
          <h3 class="heading-quaternary u-margin-bottom-small">
            Step 2
          </h3>
          <p class="paragraph">
            Accept sessions and start making dough!
          </p>
          <img 
        // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="Photo 2"
                    class="photo photo--p1"
                    src={image}></img>
        </div>
        <div class="feature">
            <h3 class="heading-quaternary u-margin-bottom-small">
              Step 3
            </h3>
            <p class="paragraph">
              Cash out instantly
            </p>
            <img 
        // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="Photo 3"
                    class="photo photo--p1"
                    src={image}></img>
          </div>
        </div>
      </div>
      
    </div>
      
     )
      // </div>
  //   )
  // }

}