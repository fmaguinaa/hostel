import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import User from "../../../models/User";
import University from "../../../models/University";
import { updateStateOnEvent } from '../../../utils';
import { authenticateCredentials, fetchUniversities } from '../../../service/ApolloService';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paperRoot: {
        flexGrow: 1,
    },
    paperForm: {
        display: "inline-flex",
        flexDirection: "column",
    },
    formControl: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "auto",
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function TabContainer(props) {
    return (
        <Typography component="div" style={{
            padding: 8 * 2,
            display: "flex",
            justifyContent: "center",
        }}>
            {props.children}
        </Typography>
    );
}

export default function Authorization() {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const [user, setUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [university, setUniversity] = useState('');
    const [universities, setUniversities] = useState([]);
    const [requestedUniversity, setRequestedUniversity] = useState('');
    const [initialized, setInitialized] = useState(false);
    const [initializeRegistration, setInitializeRegistration] = useState(false);

    useEffect(() => {
        if (!initialized) {
            getUniversities();
            setInitialized(true)
        }
    });

    const getUniversities = () => {
        fetchUniversities()
            .then(universityData => generateUniversities(universityData))
            .then((universities) => setUniversities(universities))
            .catch(error => console.error({ error }))
    };

    const generateUniversities = (universityData) => {
        return universityData.map((data) => new University(data))
    };

    const handleInputChange = (event, newValue) => { setTab(newValue) };

    const redirectToRegistration = () => { if (university !== '' && university !== 'Other') setInitializeRegistration(true) };

    const authenticate = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("The form is incomplete!");
        } else {
            authenticateUser(email, password);
        }
    };

    const authenticateUser = (email, password) => {
        authenticateCredentials(email, password)
            .then(response => directSignInRequest(response))
            .catch(error => console.error({ error }));
    };

    const directSignInRequest = (response) => {
        let user = new User(response);
        // TODO: Depending on user role, direct user to appropriate dashboard (i.e. UserDashboard or TutorDashboard)
        setUser(user);
    };

    const renderUniversities = () => {
        return universities.map((university) => <MenuItem key={university.id} value={university}>{university.name}</MenuItem>)
    };

    const renderUniversityRequestForm = () => {
        if (university === 'Other') return (
            <TextField
                onChange={ (e) => updateStateOnEvent(setRequestedUniversity, e) }
                id="outlined-requestedUniversity-input"
                label="RequestedUniversity"
                className={classes.textField}
                type="requestedUniversity"
                autoComplete="requestedUniversity"
                margin="normal"
                variant="outlined"
            />
        )
    };

    const renderRegisterForm = () => {
        return (
            <Container maxWidth="sm" className={classes.paperForm}>
                <FormControl variant="outlined" margin="normal" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-university-simple">
                        University
                    </InputLabel>
                    <Select
                        value={university}
                        onChange={(e) => updateStateOnEvent(setUniversity, e)}
                        input={<OutlinedInput labelWidth={0} name="university" id="outlined-university-simple" />}
                    >
                        <MenuItem value="" />
                        { renderUniversities() }
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
                { renderUniversityRequestForm() }
                { renderStudentSubmitButton() }
            </Container>
        )
    };

    const renderStudentSubmitButton = () => {
        if (university !== 'Other') {
            return (
                <Button variant="contained" className={classes.button} onClick={ () => redirectToRegistration() }>
                    Begin Registration
                </Button>
            )
        } else {
            return (
                <Button variant="contained" className={classes.button} onClick={() => alert("submitUniversity: " + requestedUniversity)}>
                    Submit
                </Button>
            )
        }
    };

    if (initializeRegistration) return <Redirect to={{ pathname: `/registration`, state: { university: university } }} />;
    if (user) return <Redirect to={{ pathname: `/dashboard`, state: { user: user } }} />;

    return (
        <Fragment>
            <Container maxWidth="md">
                <Paper className={classes.paperRoot}>
                    <Tabs
                        value={tab}
                        onChange={handleInputChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Sign In" />
                        <Tab label="Register" />
                    </Tabs>
                    {tab === 0 && <TabContainer>
                        <Container maxWidth="sm" className={classes.paperForm}>
                            <TextField
                                onChange={ (e) => updateStateOnEvent(setEmail, e) }
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                onChange={ (e) => updateStateOnEvent(setPassword, e) }
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                            <Button variant="contained" className={classes.button} onClick={ (e) => authenticate(e) }>
                                Sign In
                            </Button>
                        </Container>
                    </TabContainer>}
                    {tab === 1 && <TabContainer>
                        {renderRegisterForm()}
                    </TabContainer>}
                </Paper>
            </Container>
        </Fragment>
    )
}