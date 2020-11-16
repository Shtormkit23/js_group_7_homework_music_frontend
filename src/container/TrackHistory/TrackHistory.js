import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchTracksHistory} from "../../store/actions/trackHistoryActions";
import TrackHistoryCard from "../../components/TrackCard/TrackHistoryCard/TrackHistoryCard";
import {Redirect} from "react-router-dom";

const TracksHistory = () => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.history.history);
    let userName = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchTracksHistory());
    }, [dispatch]);


    return (
        <Grid container direction="column" spacing={2}>
            {userName ?
                <>
                <Grid item container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <Grid item>
                            {
                                tracks.length === 0 ?
                                    <p className="rainbow-animated">You don't have listened tracks yet ...</p> :
                                    <p className="rainbow-animated">History of listened tracks ...</p>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2}>
                    {tracks.length !== 0 && tracks.map(track => {
                        return <TrackHistoryCard
                            key={track._id}
                            id={track._id}
                            title={track.track.title}
                            datetime={track.datetime}
                            artist={track.track.album.artist.name}
                        />
                    })}
                </Grid>
                </>: <Redirect to="/login"/>}

        </Grid>
    );
};

export default TracksHistory;