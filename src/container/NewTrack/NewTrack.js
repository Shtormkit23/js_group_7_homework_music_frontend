import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbumsSelect,} from "../../store/actions/musicActions";
import TrackCreationForm from "../../components/AdditionForms/TrackCreationForm";

const NewTrack = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.music.albums);

    useEffect(() => {
        dispatch(fetchAlbumsSelect());
    }, [dispatch]);

    return (
        <>
            <h1>New artist</h1>
            <TrackCreationForm
                albums={albums}
            />
        </>
    );
};

export default NewTrack;