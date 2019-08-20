import React, { Fragment, useState, useEffect } from 'react'
import { fetchUserData } from "../../service/ApolloService";
import { Redirect } from "react-router-dom";
import User from "../../models/User";
import TutorDrawer from "../../common/tutorDrawer/TutorDrawer";
import TutorDashboard from "../tutorDashboard/TutorDashboard";

import './Portal.css'
import PortalNavigation from "../../common/portalNavigation/PortalNavigation";

export default function Portal({ location }) {
    const [id, setId] = useState(location.state.token);
    const [currentUser, setCurrentUser] = useState({});
    const [initialized, setInitialized] = useState(false);

    const defineUser = () => {
        fetchUserData(id)
            .then(user => setCurrentUser(new User(user)))
            .catch(error => console.error({ error }))
    };

    useEffect(() => {
        if (!initialized) {
            defineUser();
            setInitialized(true)
        }
    });

    const toggleMainLeftMargin = (width) => {
        document.getElementById("portal__main").style.marginLeft = width;
    };

    if (id === null) return <Redirect to={{ pathname: '/login' }} />;

    return (
            <div>
                <TutorDrawer props={{setId: setId, toggleMainLeftMargin: toggleMainLeftMargin}} />
                <div id="portal__main">
                    <PortalNavigation />
                    <TutorDashboard />
                    <p>{ currentUser.id }</p>
                    <p>{ currentUser.email }</p>
                    <p>{ currentUser.firstName }</p>
                    <p>{ currentUser.lastName }</p>
                    <p>{ currentUser.role}</p>
                </div>
            </div>
        )
}