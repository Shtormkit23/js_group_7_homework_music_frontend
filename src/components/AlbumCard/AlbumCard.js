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
import moment from "moment"
import ListItemText from "@material-ui/core/ListItemText";


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

const AlbumCard = ({id, title, image, year_of_issue})   => {
    const classes = useStyles();
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
                <NavLink exact to={`/tracks?album=${id}`} className="button-4"><span>Learn More</span></NavLink>
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