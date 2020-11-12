import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 1000
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    item: {
        width: 1000,
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        margin: "0px auto"
    }
}));

const TrackCard = ({id,title,duration,number}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List>
                                <ListItem id={id} className={classes.item}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <MusicNoteIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={number}
                                    />
                                    <ListItemText
                                        primary={title}
                                    />
                                    <ListItemText
                                        primary={duration}
                                    />
                                </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

TrackCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
}

export default TrackCard;