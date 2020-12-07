import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import { Link as MaterialLink } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme:Theme) => ({
root: {
        flexGrow: 1,
    },
        menuButton: {
        marginRight: theme.spacing(2),
    },
        title: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
        appBarShift: {
        width: `calc(100%-275px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
        drawer: {
        width: '275px',
        flexShrink: 0,
    },
        drawerPaper: {
        width: '275px',
    },
        hide: {
        display: 'none',
    },
        drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
        link: {
        underline: 'none',
        color: 'inherit'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
    <div className={classes.root}>
        <AppBar color="primary"position="static" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
        <Toolbar>
            <IconButton edge="start" className={clsx(classes.menuButton, open && classes.hide)} aria-label="open-drawer" onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>
        </Toolbar>
        </AppBar>
        <Drawer 
        className={classes.drawer} 
        variant="temporary"
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose} 
        anchor="left" 
        open={open} 
        classes={{paper: classes.drawerPaper,}}>
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon color="secondary"  /> : <ChevronRightIcon color="secondary" />}
            </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'MainPage'}>
                <ListItemIcon>
                    <HomeIcon />
                    </ListItemIcon>
                <ListItemText>
                    <Typography >
                        <MaterialLink to={'/'} underline="none" component={Link}>Main page</MaterialLink>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem button key={'Posts'}>
                <ListItemIcon>
                    <DynamicFeedIcon />
                    </ListItemIcon>
                <ListItemText>
                    <Typography >
                        <MaterialLink to={'/Posts'} underline="none" component={Link}>Posts</MaterialLink>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem button key={'Search comments'}>
                <ListItemIcon>
                    <DynamicFeedIcon />
                    </ListItemIcon>
                <ListItemText>
                    <Typography >
                        <MaterialLink to={'/Comments'} underline="none" component={Link}>Search comments</MaterialLink>
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button key={'Stats'}>
                <ListItemIcon>
                    <DynamicFeedIcon />
                    </ListItemIcon>
                <ListItemText>
                    <Typography >
                        <MaterialLink to={'/Stats'} underline="none" component={Link}>Statistics</MaterialLink>
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
    </Drawer>
    </div>
);
}

export default Navbar;