import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAlbum as onAlbumCreated} from "../../store/actions/musicActions";
import {fetchArtists} from "../../store/actions/musicActions";
import AlbumCreationForm from "../../components/AdditionForms/AlbumCreationForm";

const NewAlbum = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.music.artists);

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    const createAlbum = albumData => {
        dispatch(onAlbumCreated(albumData));
    };

    return (
        <>
            <h1>New album</h1>
            <AlbumCreationForm
                onSubmit={createAlbum}
                artists={artists}
            />
        </>
    );
};

export default NewAlbum;