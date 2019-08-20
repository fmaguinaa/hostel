import React from 'react';

import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
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

export default function TutorDashboard(props) {
    const classes = useStyles();
    const currentUser = props.currentUser;

    const switchOverview = () => { alert('View Overview') };
    const switchEarnings = () => { alert('View Earnings') };
    const switchChallenges = () => { alert('View Challenges') };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph className={classes.leftJustifiedText}>
                    Hello, {currentUser.firstName}!
                    <br/>
                    Conéctate para comenzar la tutoría.
                </Typography>
                <Container className={classes.portalCardsContainer} maxWidth="md">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>Progreso</Typography>
                            <Typography variant="body2" component="p">Semana Actual</Typography>
                            <Typography variant="h5" className={classes.pos} component="h2">47 Horas</Typography>
                            <Typography variant="body2" component="p">La Semana Pasada</Typography>
                            <Typography color="textSecondary">25 Horas</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => switchOverview()}>Details</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>Ganancia</Typography>
                            <Typography variant="body2" component="p">Semana Actual</Typography>
                            <Typography variant="h5" className={classes.pos} component="h2">2,038.94 Sol</Typography>
                            <Typography variant="body2" component="p">La Semana Pasada</Typography>
                            <Typography color="textSecondary">1,084.54 Sol</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => switchEarnings()}>Entrar a mi cuenta</Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>Desafios</Typography>
                            <Typography variant="h5" component="h2">Crece tu comunindad</Typography>
                            <Typography className={classes.pos} color="textSecondary">+100pts</Typography>
                            <Typography variant="body2" component="p">
                                Tutores: 10+
                                <br/>
                                Tutores: 15
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => switchChallenges()}>Todos mis desafios</Button>
                        </CardActions>
                    </Card>
                </Container>
            </main>
        </div>
    );
}