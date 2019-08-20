import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    button: {
        margin: theme.spacing(1),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        textAlign: "center",
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        minWidth: 275,
        margin: "1rem",
    },
    portalCardsContainer: {
        display: "inline-flex",
        justifyContent: "space-around",
    },
    leftJustifiedText: {
        textAlign: "left",
    },
}));

export default function StudentDashboard(props) {
    const classes = useStyles();
    const currentUser = props.currentUser;
    const [selectedCourse, setSelectedCourse] = useState({ id: null });

    const containSelected = (courseId) => {
        return selectedCourse.id === courseId ? 'contained' : 'outlined'
    };

    const highlightSelected = (courseId) => {
        return selectedCourse.id === courseId ? 'primary' : null
    };

    const renderCourses = () => {
        return props.userCourses.map((course) => {
            return (
                <Button
                    key={course.id}
                    variant={ containSelected(course.id) }
                    color={ highlightSelected(course.id) }
                    onClick={ () => setSelectedCourse(course) }
                    className={ classes.button }>
                    [{ course.code }] { course.name }
                </Button>
            )
        })
    };

    const requestTutor = () => {
        alert(`Requesting tutor for course ${selectedCourse.id}`)
    };

    return (
        <div className={ classes.root }>
            <CssBaseline/>
            <main className={ classes.content }>
                <div className={ classes.toolbar }/>
                <Typography variant="h6" gutterBottom className={ classes.leftJustifiedText }>
                    Hello, { currentUser.firstName }!
                </Typography>
                <Container maxWidth={ "sm" }>
                    { renderCourses() }
                </Container>
                    <Button
                        variant="contained"
                        onClick={ () => requestTutor() }
                        className={ classes.button }>
                        Request Tutor
                    </Button>
            </main>
        </div>
    );
}