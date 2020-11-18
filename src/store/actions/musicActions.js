import axios from "../../axiosApi";
import {
  FETCH_ALBUMS_SUCCESS,
  FETCH_ARTISTS_SUCCESS,
  FETCH_FAILURE,
  FETCH_TRACKS_SUCCESS,
} from "../actionTypes";

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

export const fetchArtists = () => {
  return async dispatch => {
    try {
      await axios.get("/artists").then(response => {
        dispatch(fetchArtistsSuccess(response.data));
    })}catch(e) {
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

export const fetchTracks = (query) => {
  return async dispatch => {
    try {
      await axios.get(`/tracks${query}`).then(response => {
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
