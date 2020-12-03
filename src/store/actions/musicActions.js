import axios from "../../axiosApi";
import {
    CREATE_ALBUM_SUCCESS,
    CREATE_ARTIST_SUCCESS,
    CREATE_TRACK_SUCCESS,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ARTISTS_SUCCESS,
    FETCH_FAILURE,
    FETCH_TRACKS_SUCCESS,
} from "../actionTypes";
import {push} from "connected-react-router";

const fetchArtistsSuccess = artists => {
    return {type: FETCH_ARTISTS_SUCCESS, artists};
};

const fetchAlbumsSuccess = albums => {
    return {type: FETCH_ALBUMS_SUCCESS, albums};
};

const fetchTracksSuccess = tracks => {
    return {type: FETCH_TRACKS_SUCCESS, tracks};
};

const fetchFailure = error => {
    return {type: FETCH_FAILURE, error};
};

const createArtistSuccess = () => {
    return {type: CREATE_ARTIST_SUCCESS};
};

const createAlbumSuccess = () => {
    return {type: CREATE_ALBUM_SUCCESS};
};


const createTrackSuccess = () => {
    return {type: CREATE_TRACK_SUCCESS};
};

export const fetchArtists = () => {
    return async dispatch => {
        try {
            await axios.get("/artists").then(response => {
                dispatch(fetchArtistsSuccess(response.data));
            })
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchAlbums = (query) => {
    return async dispatch => {
        try {
            await axios.get(`/albums${query}`).then(response => {
                if (response.data instanceof Object) {
                    dispatch(fetchAlbumsSuccess(response.data));
                } else {
                    alert(response.data)
                }
            });
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchTracks = (query) => {
    return async dispatch => {
        try {
            await axios.get(`/tracks${query}`).then(response => {
                if (response.data instanceof Object) {
                    dispatch(fetchTracksSuccess(response.data));
                } else {
                    alert(response.data)
                }
            });
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const createArtist = artistData => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.post("/artists", artistData, {headers})
            dispatch(createArtistSuccess());
            dispatch(push("/"));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const createAlbum = albumData => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.post("/albums", albumData, {headers})
            dispatch(createAlbumSuccess());
            dispatch(push("/"));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const createTrack = trackData => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.post("/tracks", trackData, {headers})
            dispatch(createTrackSuccess());
            dispatch(push("/"));
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchAlbumsSelect = () => {
    return async dispatch => {
        try {
            await axios.get(`/albums`).then(response => {
                if (response.data instanceof Object) {
                    dispatch(fetchAlbumsSuccess(response.data));
                } else {
                    alert(response.data)
                }
            });
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};



