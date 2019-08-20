import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { Add, IndeterminateCheckBox } from '@material-ui/icons';

import Course from '../../../models/Course';
import { updateStateOnEvent } from '../../../utils';
import { deleteUserCourse, fetchUniversityCourses, postUserCourse } from '../../../service/ApolloService';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        height: '2.5rem',
        width: '20rem',
    },
    formSelect: {
        height: '2.4rem',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Courses(props) {
    const classes = useStyles();
    const [initialized, setInitialized] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [availableUniversityCourses, setAvailableUniversityCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState(props.userCourses);
    const [addedCourse, setAddedCourse] = useState('');

    useEffect(() => {
        if (!initialized) {
            getAllCourses();
            setInitialized(true)
        }
    });

    const getAllCourses = () => {
        fetchUniversityCourses(props.currentUser.universityId, props.currentUser.majorId)
            .then((coursesData) => createCourses(coursesData))
            .then((courses) => setAvailableUniversityCourses(courses))
            .catch((error) => console.error({ error }));
    };

    const createCourses = (coursesData) => {
        return coursesData.map((data) => new Course(data));
    };

    const removeSelectedCourse = (deletedCourse) => {
        setSelectedCourses(selectedCourses.filter((course) => course !== deletedCourse))
    };

    const initializeEditMode = () => {
        setEditMode(true);
    };

    const saveEdits = () => {
        if (props.userCourses === selectedCourses) alert('Same!');
        if (props.userCourses !== selectedCourses) handleCourseUpdates();
        setEditMode(false);
    };

    const handleCourseUpdates = () => {
        let deleted = props.userCourses.filter(course => !selectedCourses.includes(course));
        if (deleted.length > 0) deleteCourses(deleted);

        let added = selectedCourses.filter(course => !props.userCourses.includes(course));
        if (added.length > 0) addNewCourses(added);

        let constant = props.userCourses.filter(course => selectedCourses.includes(course));
        props.setUserCourses([...constant, ...added]);
        setSelectedCourses([...constant, ...added]);
    };

    const addNewCourses = (added) => {
        added.forEach(course => {
            postUserCourse(props.currentUser.id, course.id)
                .catch((error) => console.error({ error }));
        });
    };

    const deleteCourses = (deleted) => {
        console.log('deleting courses' + deleted);
        deleted.forEach(course => {
            deleteUserCourse(props.currentUser.id, course.id)
                .catch((error) => console.error({ error }));
        });
    };

    const renderUniversityCourses = () => {
        return availableUniversityCourses.map((course) => {
            return <MenuItem key={ course.id } value={ course }>[{ course.code }] - { course.name }</MenuItem>
        })
    };

    const renderCurrentCourses = () => {
        return selectedCourses.map((course) => {
            return (
                <TableRow key={ course.id }>
                    <TableCell component='th' scope='row'>
                        { course.code }
                    </TableCell>
                    <TableCell align='right'>{ course.name }</TableCell>
                    { (editMode === true) ?
                        <TableCell align='center'>
                            <IndeterminateCheckBox onClick={ () => removeSelectedCourse(course) }/>
                        </TableCell> :
                        null }
                </TableRow>
            )
        })
    };

    const addCourse = () => {
        if (addedCourse === '') return alert('Please select a course to add');
        if (selectedCourses.some(course => course.id === addedCourse.id))
            return alert('Course has already been selected');
        setSelectedCourses([...selectedCourses, addedCourse]);
        setAddedCourse('')
    };

    const renderControlBar = () => {
        if (editMode === false) return (
            <Button variant='contained' onClick={ () => initializeEditMode() } className={ classes.button }>
                Edit
            </Button>
        );
        return (
            <Fragment>
                <Button variant='contained' onClick={ () => saveEdits() } className={ classes.button }>
                    Save
                </Button>
                <FormControl margin={ 'dense' } variant='outlined' className={ classes.formControl }>
                    <InputLabel htmlFor='outlined-age-native-simple'>
                        Courses
                    </InputLabel>
                    <Select
                        className={ classes.formSelect }
                        value={ addedCourse }
                        onChange={ (e) => updateStateOnEvent(setAddedCourse, e) }
                        input={
                            <OutlinedInput name='course' labelWidth={ 60 } id='outlined-course-native-simple'/>
                        }
                    >
                        <MenuItem value=''/>
                        { renderUniversityCourses() }
                    </Select>
                </FormControl>
                <Button variant='contained' onClick={ () => addCourse() } className={ classes.button }>
                    <Add/>
                </Button>
            </Fragment>
        )
    };

    return (
        <Container maxWidth={ 'md' }>
            { renderControlBar() }
            <Paper className={ classes.root }>
                <Table className={ classes.table }>
                    <TableHead>
                        <TableRow>
                            <TableCell>Course Code</TableCell>
                            <TableCell align='right'>Name</TableCell>
                            { (editMode === true) ? <TableCell align='center'>Delete</TableCell> : null }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { renderCurrentCourses() }
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    )
};