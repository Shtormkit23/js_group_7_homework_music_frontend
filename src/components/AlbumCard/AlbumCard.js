import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import imageNotAvailable from "../../download.png"
import PropTypes from "prop-types";
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";
import moment from "moment"
import ListItemText from "@material-ui/core/ListItemText";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, publish} from "../../store/actions/adminActions";


const useStyles = makeStyles({
    root: {
        width: 400,
        marginLeft: 15,
        marginBottom: 15,
    },
    title: {
        flexGrow: 1
    }
});

const AlbumCard = ({id, title, image, year_of_issue, path, published}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let user = useSelector(state => state.users.user);
    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiURL + "/uploads/" + image;
    }
    const date = moment(year_of_issue).format('YYYY');

    return (
        <Card className={classes.root}>
            <CardActionArea id={id}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={cardImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {title}
                    </Typography>
                    <ListItemText
                        primary={date}
                    />
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    published === true &&
                    <NavLink exact to={`/tracks?album=${id}`} className="button-4"><span>Learn More</span></NavLink>
                }{
                    path && path.location.pathname === "/moderation" &&
                    <>
                        <button className="button-4" onClick={() => dispatch(deleteItem("albums",id))}><span>Delete item</span></button>
                    </>
                }
                {
                    user && user.role === "admin" && published !== true ?
                        <button className="button-4" onClick={() => dispatch(publish("albums",id))} ><span>Published</span></button>
                        : null
                }
            </CardActions>
        </Card>
    );
};

AlbumCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    year_of_issue: PropTypes.string,
}

export default AlbumCard;