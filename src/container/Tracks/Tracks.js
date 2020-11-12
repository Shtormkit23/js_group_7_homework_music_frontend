import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import TrackCard from "../../components/TrackCard/TrackCard";
import {fetchTracks} from "../../store/actions/musicActions";

const Tracks = (props) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.music.tracks);
    const query  = props.location.search;

    useEffect(() => {
        dispatch(fetchTracks(query));
    }, [dispatch,query]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4">

                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row" spacing={2}>
                {tracks.map(track => {
                    return <TrackCard
                        key={track._id}
                        id={track._id}
                        title={track.title}
                        duration={track.duration}
                        number={track.number}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Tracks;