import React from "react";
import {useDispatch} from "react-redux";
import {createArtist as onArtistCreated} from "../../store/actions/musicActions";
import ArtistCreationForm from "../../components/AdditionForms/ArtistCreationForm";

const NewArtist = () => {
    const dispatch = useDispatch();

    const createArtist = artistData => {
        dispatch(onArtistCreated(artistData));
    };

    return (
        <>
            <h1>New artist</h1>
            <ArtistCreationForm
                onSubmit={createArtist}
            />
        </>
    );
};

export default NewArtist;