import React, { useEffect, useState } from 'react'

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Container } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

import Major from "../../../models/Major";
import User from "../../../models/User";
import { createUser, fetchUniversityMajors, validateUser } from "../../../service/ApolloService";
import { updateStateOnEvent } from "../../../utils";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        marginTop: "4rem",
    },
    paper: {
        width: "inherit",
        padding: "2rem 0rem",
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    formContainer: {
        display: "inline-flex",
        flexDirection: "column",
    },
    formControl: {
        margin: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    stepContainer: {
        marginBottom: "1rem",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "auto",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    subtitle: {
        margin: "1rem 0rem",
    },
    table: {
        margin: "1rem 0rem",
    }
}));

export default function Registration({ location }) {
    const classes = useStyles();
    const [initialized, setInitialized] = useState(false);
    const [user, setUser] = useState({});
    const [university] = useState(location.state.university);
    const [majors, setMajors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [validated, setValidated] = useState(null);
    const [verificationToken, setVerificationToken] = useState('');
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Complete', 'Confirm', 'Verify'];

    useEffect(() => {
        if (!initialized) {
            setUniversityMajors();
            setInitialized(true)
        }
    });

    const setUniversityMajors = () => {
        fetchUniversityMajors(university.id)
            .then((majorsData) => generateMajors(majorsData))
            .then((universityMajors) => setMajors(universityMajors))
            .catch((error) => console.error({ error }))
    };

    const generateMajors = (majorsData) => {
        return majorsData.map((data) => new Major(data))
    };

    const registerUser = () => {
        createUser(createUserPayload())
            .then((user) => console.log(user))
            .then(() => setValidated(false))
            .catch((error) => console.error({ error }))
    };

    const createUserPayload = () => {
        return {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            universityId: university.id,
            majorId: selectedMajor.id,
            role: 'STUDENT'
        }
    };

    const validate = () => {
        validateUser(email, verificationToken)
            .then((userData) => setVerifiedUser(userData))
            .catch((error) => console.error({ error }))
    };

    const setVerifiedUser = (userData) => {
        let user = new User(userData);
        setUser(user);
        setTimeout(function () {
            setValidated(true)
        }, 3000);

    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1) registerUser();
        if (activeStep === 2) validate();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    };

    const renderMajors = () => {
        return majors.map((major) =>
            <MenuItem key={ major.id } value={ major } tabIndex={ 0 }>{ major.name }</MenuItem>)
    };

    const checkStepCompletion = () => {
        if ((activeStep === 0)
            && (email === '' || password === '' || firstName === '' || lastName === '' || selectedMajor === '' || birthday === ''))
            return true
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <Container className={ classes.formContainer }>
                        <Typography variant="h6" className={ classes.instructions } gutterBottom>
                            To register as a student, please complete the form below.
                        </Typography>
                        <TextField
                            onChange={ (e) => updateStateOnEvent(setEmail, e) }
                            id="outlined-email-input"
                            label="Email"
                            value={ email }
                            className={ classes.textField }
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
                            value={ password }
                            className={ classes.textField }
                            type="password"
                            name="password"
                            autoComplete="password"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            onChange={ (e) => updateStateOnEvent(setFirstName, e) }
                            id="outlined-firstName-input"
                            label="First Name"
                            value={ firstName }
                            className={ classes.textField }
                            type="firstName"
                            name="firstName"
                            autoComplete="firstName"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            onChange={ (e) => updateStateOnEvent(setLastName, e) }
                            id="outlined-lastName-input"
                            label="Last Name"
                            value={ lastName }
                            className={ classes.textField }
                            type="lastName"
                            name="lastName"
                            autoComplete="lastName"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            onChange={ (e) => updateStateOnEvent(setBirthday, e) }
                            id="date"
                            label="Birthday"
                            value={ birthday }
                            className={ classes.textField }
                            type="date"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={ { shrink: true } }
                        />
                        <FormControl variant="outlined" margin="normal" className={ classes.formControl }>
                            <InputLabel htmlFor="outlined-university-simple">Major</InputLabel>
                            <Select
                                value={ selectedMajor }
                                onChange={ (e) => updateStateOnEvent(setSelectedMajor, e) }
                                input={ <OutlinedInput labelWidth={ 40 } name="major" id="outlined-major-simple"/> }
                            >
                                <MenuItem key={ 'default' } value={ '' }>Select Major</MenuItem>
                                { renderMajors() }
                            </Select>
                        </FormControl>
                    </Container>
                );
            case 1:
                return (
                    <Container className={ classes.formContainer }>
                        <Typography variant="h6" className={ classes.instructions } gutterBottom>
                            Please confirm the data you have entered is correct.
                        </Typography>
                        <Table size="medium" gutterBottom className={ classes.table }>
                            <TableBody>
                                <TableRow key={ "firstName" }>
                                    <TableCell component="th" scope="row">First Name</TableCell>
                                    <TableCell align="right"><strong>{ firstName }</strong></TableCell>
                                </TableRow>
                                <TableRow key={ "lastName" }>
                                    <TableCell component="th" scope="row">Last Name</TableCell>
                                    <TableCell align="right"><strong>{ lastName }</strong></TableCell>
                                </TableRow>
                                <TableRow key={ "email" }>
                                    <TableCell component="th" scope="row">Email</TableCell>
                                    <TableCell align="right"><strong>{ email }</strong></TableCell>
                                </TableRow>
                                <TableRow key={ "birthday" }>
                                    <TableCell component="th" scope="row">Birthday</TableCell>
                                    <TableCell align="right"><strong>{ birthday }</strong></TableCell>
                                </TableRow>
                                <TableRow key={ "university" }>
                                    <TableCell component="th" scope="row">University</TableCell>
                                    <TableCell align="right"><strong>{ university.name }</strong></TableCell>
                                </TableRow>
                                <TableRow key={ "major" }>
                                    <TableCell component="th" scope="row">Major</TableCell>
                                    <TableCell align="right"><strong>{ selectedMajor.name }</strong></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Typography variant="subtitle2" className={ classes.subtitle } gutterBottom>
                            By pressing the submit button below you are confirming your information
                            and you will receive an email verifying your account.
                        </Typography>
                    </Container>
                );
            case 2:
                return (
                    <Container className={ classes.formContainer }>
                        <Typography variant="h6" className={ classes.instructions } gutterBottom>
                            Almost done!
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            We've sent a confirmation token to your email <strong>{ email }</strong>.
                            Please verify your account by entering the token in the field below.
                        </Typography>
                        <TextField
                            onChange={ (e) => updateStateOnEvent(setVerificationToken, e) }
                            id="outlined-email-input"
                            label="Token"
                            value={ verificationToken }
                            className={ classes.textField }
                            type="verificationToken"
                            name="verificationToken"
                            autoComplete="verificationToken"
                            margin="normal"
                            variant="outlined"
                        />
                    </Container>
                );
            default:
                return 'Something went awry...';
        }
    };

    const renderStepperButton = () => {
        let text = 'Next';
        if (activeStep === 1) text = 'Confirm';
        if (activeStep === steps.length - 1) text = 'Verify';
        return (
            <Button variant="contained" color="primary" onClick={ handleNext } disabled={ checkStepCompletion() }>
                { text }
            </Button>
        )
    };

    const renderBackButton = () => {
        if (activeStep === 1) return (
            <Button disabled={ activeStep === 0 } onClick={ handleBack } className={ classes.backButton }>
                Back
            </Button>
        )
    };

    if (validated === true) return <Redirect to={ { pathname: `/dashboard`, state: { user: user } } }/>;

    return (
        <Container maxWidth="lg" className={ classes.root }>
            <Paper className={ classes.paper }>
                <Stepper activeStep={ activeStep } alternativeLabel>
                    { steps.map(label => (
                        <Step key={ label }>
                            <StepLabel>{ label }</StepLabel>
                        </Step>
                    )) }
                </Stepper>
                <Container maxWidth={ "sm" } className={ classes.stepContainer }>
                    { activeStep === steps.length ? (
                        <div>
                            <Typography className={ classes.instructions }>
                                Verification complete. Navigating you to your dashboard...
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography className={ classes.instructions }>{ getStepContent(activeStep) }</Typography>
                            <div>
                                { renderBackButton() }
                                { renderStepperButton() }
                            </div>
                        </div>
                    ) }
                </Container>
            </Paper>
        </Container>
    )
}