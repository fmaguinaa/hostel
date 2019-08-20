import React from 'react';
import * as ReactDOM from "react-dom";
import clsx from "clsx";

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "salmon",
        boxShadow: "none",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.complex,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
}));

export default function PortalNavigation(props) {
    const classes = useStyles();

    const handleDrawerOpen = () => { props.setOpen(true) };

    const tick = () => {
        const element = (<p>Current Time : {new Date().toLocaleTimeString()}</p>);
        if (props.currentUser) ReactDOM.render(element, document.getElementById('currentTime'));
    };
    setInterval(tick, 1000);

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: props.open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    P A P A Y A
                </Typography>
            </Toolbar>
            <div id="currentTime" />
        </AppBar>
    )
}