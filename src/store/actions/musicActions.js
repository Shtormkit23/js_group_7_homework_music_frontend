import axios from "../../axiosApi";
import {FETCH_ALBUMS_SUCCESS, FETCH_ARTISTS_SUCCESS, FETCH_TRACKS_SUCCESS} from "../actionTypes";

const fetchArtistsSuccess = artists => {
  return {type: FETCH_ARTISTS_SUCCESS, artists};
};

const fetchAlbumsSuccess = albums => {
  return {type: FETCH_ALBUMS_SUCCESS, albums};
};

const fetchTracksSuccess = tracks => {
  return {type: FETCH_TRACKS_SUCCESS, tracks};
};

export const fetchArtists = () => {
  return dispatch => {
    return axios.get("/artists").then(response => {
      dispatch(fetchArtistsSuccess(response.data));
    });
  };
};

export const fetchAlbums = (query) => {
  return dispatch => {
    return axios.get(`/albums${query}`).then(response => {
      if (response.data instanceof Object) {
        dispatch(fetchAlbumsSuccess(response.data));
      }else {
        alert(response.data)
      }
    });
  };
};

export const fetchTracks = (query) => {
  return dispatch => {
    return axios.get(`/tracks${query}`).then(response => {
      if (response.data instanceof Object) {
        dispatch(fetchTracksSuccess(response.data));
      }else {
        alert(response.data)
      }
    });
  };
};
