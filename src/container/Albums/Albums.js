import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbums} from "../../store/actions/musicActions";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

const Albums = (props) => {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.music.albums);
    const query  = props.location.search;


    useEffect(() => {
        dispatch(fetchAlbums(query));
    }, [dispatch,query]);

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container direction="row" justify="space-between" alignItems="center">
                {/*<Grid item>*/}
                {/*    {albums[0].artist && <h2>{albums[0].artist.name}</h2>}*/}
                {/*</Grid>*/}
            </Grid>
            <Grid item container direction="row" spacing={2}>
                {albums.map(album => {
                    return <AlbumCard
                        key={album._id}
                        id={album._id}
                        title={album.title}
                        image={album.image}
                        year_of_issue={album.year_of_issue}
                    />
                })}
            </Grid>
        </Grid>
    );
};

export default Albums;