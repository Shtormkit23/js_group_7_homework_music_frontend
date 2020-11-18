import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 1200
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    item: {
        width: 1200,
        justifyContent: "space-between",
        border: "1px solid #ccc",
        margin: "0px auto"
    },
    text: {
        width: "700px",
        fontSize: 20
    },
    artist: {
        width: "140px",
        marginRight: "20px",
        fontFamily: "Indie Flower",
        fontSize: 30
    },
    datetime: {
        width: "300px",
        marginRight: "10px",
        fontSize: 13,
        color: "gray"
    },
    avatar: {
        backgroundColor: "#3f51b5"
    }
}));

const TrackHistoryCard = ({id,title,datetime,artist}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List>
                            <ListItem id={id} className={classes.item}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <MusicNoteIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <p className={classes.artist}>{artist}</p>
                                <p className={classes.text}>{title}</p>
                                <p className={classes.datetime}>{datetime}</p>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

TrackHistoryCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist:PropTypes.string.isRequired,
    datetime:PropTypes.string.isRequired
}

export default TrackHistoryCard;