import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {addTrackToHistory} from "../../store/actions/trackHistoryActions";
import {NavLink} from "react-router-dom";

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
    number: {
        width: "50px"
    },
    duration: {
        width: "40px",
        marginRight: "10px"
    },
    avatar: {
        backgroundColor: "#3f51b5"
    }
}));



const TrackCard = ({id,title,duration,number, path, published}) => {
    const classes = useStyles();
    let user = useSelector(state => state.users.user);
    const dispatch = useDispatch();
    console.log(published)
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
                                    <p className={classes.number}>{number}</p>
                                    <p className={classes.text}>{title}</p>
                                    <p className={classes.duration}>{duration}</p>
                                    {user && user.role === "user" ?
                                        <button className="button-4" onClick={() => dispatch(addTrackToHistory(id))}><span>Add Track To History</span></button>
                                        : null
                                    }
                                    {
                                        path && path.location.pathname !== "/moderation" &&
                                        <NavLink exact to={`/tracks?album=${id}`} className="button-4"><span>Learn More</span></NavLink>
                                    }
                                    {
                                        user && user.role === "admin" && published !== true ?
                                        <button className="button-4"><span>Published</span></button>
                                            : null
                                    }
                                    {
                                        user && user.role === "admin" &&
                                        <Grid item>
                                            <button className="button-4"><span>Delete item</span></button>
                                        </Grid>
                                    }
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