import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import {fetchAllAlbums, fetchAllArtists, fetchAllTracks} from "../../store/actions/adminActions";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import TrackCard from "../../components/TrackCard/TrackCard";

const Moderation = (props) => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.admin.artists);
    const albums = useSelector(state => state.admin.albums);
    const tracks = useSelector(state => state.admin.tracks);

    console.log(albums)
    console.log(artists)

    useEffect(() => {
        dispatch(fetchAllArtists());
        dispatch(fetchAllAlbums());
        dispatch(fetchAllTracks());
    }, [dispatch]);

    return (
        <>
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
                        path={props}
                    />
                })}
            </Grid>
        </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <p className="rainbow-animated">
                            Albums
                        </p>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={2}>
                    {albums.map(album => {
                        return <AlbumCard
                            key={album._id}
                            id={album._id}
                            title={album.title}
                            image={album.image}
                            year_of_issue={album.year_of_issue}
                            published={album.published}
                            path={props}
                        />
                    })}
                </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <p className="rainbow-animated">
                            Tracks
                        </p>
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
                            published={track.published}
                            path={props}
                        />
                    })}
                </Grid>
            </Grid>
            </>
    );
};

export default Moderation;