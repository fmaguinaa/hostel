import React from 'react';
import { Card } from '../../common/card/Card';

import './TutorDashboard.css'

export default function TutorDashboard(props) {
    const currentUser = props.currentUser;

    const switchOverview = () => { alert('View Overview') };
    const switchEarnings = () => { alert('View Earnings') };
    const switchChallenges = () => { alert('View Challenges') };

    return (
        <article className='dashboard__tutor'>
            <section>
                <p>Hello, { currentUser.firstName }!</p>
                <p>{ currentUser.id }</p>
                <p>Incinia tu sesion para ponerte en linea 🤓</p>
            </section>
            <section className='cards__container'>
                <Card header={'Progreso'}>
                   <p>100 Horas</p>
                   <li onClick={ () => switchOverview() }>Details</li>
                </Card>
                <Card header={'Ganancia'}>
                    <p>S/.1,800</p>
                    <li onClick={ () => switchEarnings() }>Entrar a mi cuenta</li>
                </Card>
                <Card header={'Desafios'}>
                    <p>Crece tu comunindad</p>
                    <p>Tutores: 10+</p>
                    <p>Tutores: 15</p>
                    <li onClick={ () => switchChallenges() }>Todos mis desafios</li>
                </Card>
            </section>
            <section>
            </section>
        </article>
    )
}
