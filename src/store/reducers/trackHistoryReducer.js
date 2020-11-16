import { FETCH_TRACK_HISTORY_SUCCESS, FETCH_TRACK_HISTORY_FAILURE } from "../actionTypes";

const initialState = {
    error: null,
    history: [],
};

const trackHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACK_HISTORY_SUCCESS:
            return { ...state, history: action.history};
        case FETCH_TRACK_HISTORY_FAILURE:
            return { ...state, error: action.error};
        default:
            return state;
    }
};

export default trackHistoryReducer;