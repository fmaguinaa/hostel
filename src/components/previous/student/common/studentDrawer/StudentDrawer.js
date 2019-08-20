import React, { Fragment } from "react";
import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import { AccountBox, Event, MeetingRoom } from "@material-ui/icons";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { BubbleChart, Dashboard, Duo } from "@material-ui/icons";


const drawerWidth = 240;

const useStyles = makeStyles(theme => (
    {
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.complex,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.complex,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        portalDrawerListItem: {
            paddingLeft: "1.5rem",
        },
        avatar: {
            margin: 10,
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
    }
));

export default function StudentDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    const setView = (view) => {
        props.setView(view)
    };
    const setUser = (value) => {
        props.setCurrentUser(value)
    };
    const handleDrawerClose = () => {
        props.setOpen(false)
    };

    const signOff = () => {
        setUser(null)
    };

    return (
        <Fragment>
            <CssBaseline/>
            <Drawer
                variant="permanent"
                className={ clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }) }
                classes={ {
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                } }
                open={ props.open }
            >
                <div className={ classes.toolbar }>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/> }
                    </IconButton>
                </div>
                <Divider/>
                <Grid container justify="center" alignItems="center">
                    {/* TODO: User current user's photo when available */ }
                    <Avatar alt="Sparkles the Cat" src="images/cat-profile.png" className={ classes.avatar }/>
                </Grid>
                <Divider/>
                <List>
                    <ListItem button key='Dashboard' className={ classes.portalDrawerListItem }
                              onClick={ () => setView('dashboard') }>
                        <ListItemIcon><Dashboard/></ListItemIcon>
                        <ListItemText primary='Dashboard'/>
                    </ListItem>
                    <ListItem button key='Courses' className={ classes.portalDrawerListItem }
                              onClick={ () => setView('courses') }>
                        <ListItemIcon><BubbleChart/></ListItemIcon>
                        <ListItemText primary='Courses'/>
                    </ListItem>
                    <ListItem button key='Session History' className={ classes.portalDrawerListItem }
                              onClick={ () => setView('history') }>
                        <ListItemIcon><Duo/></ListItemIcon>
                        <ListItemText primary='Session History'/>
                    </ListItem>
                    <ListItem button key='Promotions' className={ classes.portalDrawerListItem }
                              onClick={ () => setView('promotions') }>
                        <ListItemIcon><Event/></ListItemIcon>
                        <ListItemText primary='Promotions'/>
                    </ListItem>
                    <ListItem button key='Settings' className={ classes.portalDrawerListItem }
                              onClick={ () => setView('settings') }>
                        <ListItemIcon><AccountBox/></ListItemIcon>
                        <ListItemText primary='Settings'/>
                    </ListItem>
                    <ListItem button key='Sign Off' className={ classes.portalDrawerListItem }
                              onClick={ () => signOff() }>
                        <ListItemIcon><MeetingRoom/></ListItemIcon>
                        <ListItemText primary='Sign Off'/>
                    </ListItem>
                </List>
            </Drawer>
        </Fragment>
    )
}
