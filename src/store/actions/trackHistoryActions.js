import {ADD_TRACK_TO_HISTORY_SUCCESS, ADD_TRACK_TO_HISTORY_FAILURE, FETCH_TRACK_HISTORY_SUCCESS, FETCH_TRACK_HISTORY_FAILURE } from "../actionTypes";
import axios from "../../axiosApi";

export const addTrackToHistorySuccess = track => ({ type: ADD_TRACK_TO_HISTORY_SUCCESS, track });
export const addTrackToHistoryFailure = error => ({ type: ADD_TRACK_TO_HISTORY_FAILURE, error });

export const fetchTrackHistorySuccess = history => ({ type: FETCH_TRACK_HISTORY_SUCCESS, history });
export const fetchTrackHistoryFailure = error => ({ type: FETCH_TRACK_HISTORY_FAILURE, error });

export const addTrackToHistory = track => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            }
            const response = await axios.post('/track_history', {track}, {headers});
            dispatch(addTrackToHistorySuccess(response.data));
        } catch (e) {
            dispatch(addTrackToHistoryFailure(e.response.data))
        }
    };
};

export const fetchTracksHistory = () => {
    return async (dispatch, getState) => {
        const headers = {
            'Authorization': getState().users.user && getState().users.user.token
        }
        return await axios.get("/track_history", {headers}).then(response => {
            dispatch(fetchTrackHistorySuccess(response.data));
        });
    };
};