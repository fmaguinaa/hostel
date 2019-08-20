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

export default function Acerca() {
  return (

    // <div class="landing">
    //   { LandingNavigation(variant, setVariant) }
    <div class="tutor-options-container">
      <div class="tutor-options-container__item content">
        <h1 class="heading-tertiary u-margin-bottom-medium">
          Las oportunidades se expanden cuando tu expandes tus horizontes
        </h1>
        <p class="paragraph">
          Queremos conectar a estudiantes que puedan representar a Peru de la mejor manero con estudiantes de Estados Unidos. Les ensenaras todo lo que sabes, estableceras conexiones, y ganaras dinero mientras lo haces. Actualmente, estamos trabajando en campanas que puedan ayudar a universitarios como tu a tener practicas en USA.
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