import React from 'react'
import { LocationOn } from '@material-ui/icons';

export default function TutorConfirm() {
    let user = 'tutor';
    return (
        <div className="tutor-confirm-container">
            <div className="tutor-confirm-container-phrases">
                <h3 className="heading-secondary heading-secondary--center">
                    Hola @{user}! Te hemos mandado un email a tu correo con pasos para inscribirte :)
                </h3>
                <hr />
                <h3 className="heading-secondary heading-secondary--sub font-selima">
                    Gracias por tu interes!
                </h3>
            </div>
            <div className="tutor-confirm-container-footer">
                <div className="tutor-confirm-container-footer tutor-confirm-container-footer-right">
                    <div className="footer-text footer-text--orange">Contactanos</div>
                    <div className="footer-text footer-text--sub">
                        Email: <a href={"mailto:contact@papaya.com"}>contact@papaya.com</a>
                    </div>
                    <div className="footer-text footer-text--sub">
                        <div className="footer-text--sub--word">
                            Teléfonos:
                    </div>
                        <ul>
                            <li>Perú: <a href={"tel:+51987654321"}>+51 987 654 321</a></li>
                            <li>USA: <a href={"tel:+51987654321"}>+51 987 654 321</a></li>
                        </ul>
                    </div>
                </div>
                <div className="tutor-confirm-container-footer tutor-confirm-container-footer-left">
                    <div className="footer-text">
                        <a href="https://www.google.com/maps/place/Lima/@-12.0343701,-77.1883534,10.75z/data=!4m5!3m4!1s0x9105c5f619ee3ec7:0x14206cb9cc452e4a!8m2!3d-12.0463731!4d-77.042754" target="_blank" rel="noopener noreferrer">
                            <LocationOn className='icon__bug' />
                            Lima - Perú
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}