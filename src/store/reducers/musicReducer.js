import {
  ALBUM_DELETE_FAILURE, ALBUM_FETCH_SUCCESS,
  CREATE_ALBUM_FAILURE,
  CREATE_ARTIST_FAILURE,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_FAILURE,
  FETCH_TRACKS_SUCCESS,
} from "../actionTypes";

const initialState = {
  artists: [],
  albums: [],
  tracks: [],
  error: null,
  artistError: null,
  albumError: null
};

const musicReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return {...state, artists: action.artists};
    case FETCH_ALBUMS_SUCCESS:
      return {...state, albums: action.albums};
    case FETCH_TRACKS_SUCCESS:
      return {...state, tracks: action.tracks};
    case FETCH_FAILURE:
      return {...state, error: action.error};
    case CREATE_ARTIST_FAILURE:
      return {...state, artistError: action.error};
    case CREATE_ALBUM_FAILURE:
      return {...state, albumError: action.error};
    case ALBUM_DELETE_FAILURE:
      return {...state, error: action.error};
    case ALBUM_FETCH_SUCCESS:
      return { ...state, album: action.data, error: null };
    default:
      return state;
  }
};

export default musicReducer;