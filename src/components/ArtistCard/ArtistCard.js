import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import "./ArtistCard.css";
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


const ArtistCard = ({id, name, image, published, path})   => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let user = useSelector(state => state.users.user);

    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiURL + "/uploads/" + image;
    }

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
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    published === true &&
                    <NavLink exact to={`/albums?artist=${id}`}  className="button-4" id="learnMoreArtist"><span>Learn More</span></NavLink>
                }
                {
                    path && path.location.pathname === "/moderation" && user && user.role === "admin" &&
                    <button className="button-4" onClick={() => dispatch(deleteItem("artists",id))}><span>Delete item</span></button>
                }
                {
                    user && user.role === "admin" && published !== true ?
                        <button className="button-4" onClick={() => dispatch(publish("artists",id))}><span>Published</span></button>
                        : null
                }
            </CardActions>
        </Card>
    );
};

ArtistCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
}



export default ArtistCard;