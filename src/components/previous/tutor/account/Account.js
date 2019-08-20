import React from 'react';

import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
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

export default function Accounts(props) {
    const classes = useStyles();
    const currentUser = props.currentUser;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph className={classes.leftJustifiedText}>
                    Accounts for {currentUser.firstName}
                </Typography>
                <Container className={classes.portalCardsContainer} maxWidth="md">
                    <Card className={classes.card}>
                        Account Content
                    </Card>
                </Container>
            </main>
        </div>
    );
}