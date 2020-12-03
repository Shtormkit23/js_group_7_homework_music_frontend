import axios from "../../axiosApi";
import {FETCH_ALBUMS_SUCCESS, FETCH_ARTISTS_SUCCESS, FETCH_FAILURE, FETCH_TRACKS_SUCCESS} from "../actionTypes";
import {push} from "connected-react-router";

const fetchAllArtistsSuccess = artists => {
    return {type: FETCH_ARTISTS_SUCCESS, artists};
};

const fetchAllAlbumsSuccess = albums => {
    return {type: FETCH_ALBUMS_SUCCESS, albums};
};

const fetchTracksSuccess = tracks => {
    return {type: FETCH_TRACKS_SUCCESS, tracks};
};

const fetchFailure = error => {
    return {type: FETCH_FAILURE, error};
};

export const fetchAllArtists = () => {
    return async dispatch => {
        try {
            await axios.get("/publish/artists").then(response => {
                dispatch(fetchAllArtistsSuccess(response.data));
            })}catch(e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const fetchAllAlbums = () => {
    return async dispatch => {
        try {
            await axios.get(`/publish/albums`).then(response => {
                if (response.data instanceof Object) {
                    dispatch(fetchAllAlbumsSuccess(response.data));
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

export const fetchAllTracks = () => {
    return async dispatch => {
        try {
            await axios.get(`/publish/tracks`).then(response => {
                if (response.data instanceof Object) {
                    dispatch(fetchTracksSuccess(response.data));
                }else {
                    alert(response.data)
                }
            });
        }catch(e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const publish = (item, id) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.put(`/publish/${item}/${id}`, {}, {headers});
            dispatch(push(`/${item}`));
        } catch(e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};

export const deleteItem = (item, id) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().users.user.token;
            const headers = {'Authorization': token};
            await axios.delete(`/deletion/${item}/${id}`, {headers});
            dispatch(push(`/${item}`));
        } catch(e) {
            if (e.response && e.response.data) {
                dispatch(fetchFailure(e.response.data));
            } else {
                dispatch(fetchFailure({global: "No internet"}));
            }
        }
    };
};
