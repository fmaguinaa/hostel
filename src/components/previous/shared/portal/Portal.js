import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from '@material-ui/core/CssBaseline';

import PortalNavigation from "../portalNavigation/PortalNavigation";
import TutorDashboard from "../../tutor/tutorDashboard/TutorDashboard";
import Challenge from "../../tutor/challenge/Challenge";
import Schedule from "../../tutor/schedule/Schedule";
import Account from "../../tutor/account/Account";
import History from "../../tutor/history/History";
import Earning from "../../tutor/earning/Earning";
import TutorDrawer from "../../tutor/common/tutorDrawer/TutorDrawer";
import StudentDashboard from "../../student/studentDashboard/StudentDashboard";
import StudentDrawer from "../../student/common/studentDrawer/StudentDrawer";

import { fetchUserCourses } from "../../../service/ApolloService";
import Course from "../../../models/Course";
import Courses from "../../student/course/Courses";

const useStyles = makeStyles((theme) => ({
    portalMain: {
        padding: "4.5rem"
    }
}));

export default function Portal({ location }) {
    const classes = useStyles();
    const [view, setView] = useState('dashboard');
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(location.state.user);
    const [userCourses, setUserCourses] = useState([]);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) {
            getUserCourses();
            setInitialized(true)
        }
    });

    const getUserCourses = () => {
        fetchUserCourses(currentUser.id)
            .then((coursesData) => generateCourses(coursesData))
            .then((courses) => setUserCourses(courses))
            .catch((error) => console.error({ error }))
    };

    const generateCourses = (coursesData) => {
        return coursesData.map((courseData) => new Course(courseData))
    };

    const renderView = () => {
        if (view === 'dashboard' && currentUser.role === 'STUDENT')
            return <StudentDashboard currentUser={ currentUser } userCourses={ userCourses }/>;
        if (view === 'dashboard' && currentUser.role === 'TUTOR') return <TutorDashboard currentUser={ currentUser }/>;
        // Student

        // TODO: LUIS - the two conditional statements below must return their own components. Currently they return StudentDashboard by default - because their respective components have not been created yet.
        if (view === 'promotions') return <StudentDashboard currentUser={ currentUser } userCourses={ userCourses }/>;
        if (view === 'settings') return <StudentDashboard currentUser={ currentUser } userCourses={ userCourses }/>;

        if (view === 'courses') return <Courses userCourses={ userCourses } setUserCourses={ setUserCourses }
                                               currentUser={ currentUser }/>;
        // Tutor
        if (view === 'challenges') return <Challenge currentUser={ currentUser }/>;
        if (view === 'schedule') return <Schedule currentUser={ currentUser }/>;
        if (view === 'earnings') return <Earning currentUser={ currentUser }/>;
        if (view === 'history') return <History currentUser={ currentUser }/>;
        if (view === 'account') return <Account currentUser={ currentUser }/>;

        alert("You are lost. Returning to dashboard.");
        return (currentUser.role === 'STUDENT') ?
            <StudentDashboard currentUser={ currentUser } courses={ userCourses }/>
            : <TutorDashboard currentUser={ currentUser }/>
    };

    if (currentUser === null) return <Redirect to={ { pathname: '/login' } }/>;

    return (
        <div>
            <CssBaseline/>
            <div id="portal__main">
                <PortalNavigation open={ open } setOpen={ setOpen }/>
                { currentUser.role === 'TUTOR' ?
                    <TutorDrawer open={ open } setCurrentUser={ setCurrentUser } setOpen={ setOpen }
                                 setView={ setView }/>
                    : <StudentDrawer open={ open } setCurrentUser={ setCurrentUser } setOpen={ setOpen }
                                     setView={ setView }/>
                }
                <section className={ classes.portalMain }>
                    { renderView() }
                </section>
            </div>
        </div>
    )
}