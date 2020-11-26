import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import {fetchArtists} from "../../store/actions/musicActions";

const Artists = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.music.artists);

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <p className="rainbow-animated">
                        Artists
                    </p>
                </Grid>
            </Grid>
            <Grid item container direction="row" spacing={2}>
                {artists.map(artist => {
                    return <ArtistCard
                        key={artist._id}
                        id={artist._id}
                        name={artist.name}
                        image={artist.image}
                        published={artist.published}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Artists;