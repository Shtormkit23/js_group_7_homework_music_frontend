import {
    FETCH_ALBUMS_SUCCESS,
    FETCH_ARTISTS_SUCCESS,
    FETCH_FAILURE,
    FETCH_TRACKS_SUCCESS
} from "../actionTypes";

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
    error: null
};

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {...state, artists: action.artists};
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_TRACKS_SUCCESS:
            return {...state, tracks: action.tracks};
        case FETCH_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default adminReducer;