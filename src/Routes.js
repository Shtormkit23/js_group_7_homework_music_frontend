import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Artists from "./container/Artists/Artists";
import Albums from "./container/Albums/Albums";
import Tracks from "./container/Tracks/Tracks";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import TracksHistory from "./container/TrackHistory/TrackHistory";
import NewArtist from "./container/NewArtist/NewArtist";
import NewAlbum from "./container/NewAlbum/NewAlbum";
import NewTrack from "./container/NewTrack/NewTrack";
import Moderation from "./container/Moderation/Moderation";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />
};

const Routes = ({user}) => {
        return (
            <Switch>
                <Route path="/" exact component={Artists} />
                <Route path="/artists" exact component={Artists} />
                <Route path="/albums" exact component={Albums}/>
                <Route path="/tracks" exact component={Tracks}/>
                <ProtectedRoute
                    path="/register"
                    exact
                    component={Register}
                    isAllowed={!user}
                    redirectTo="/"
                />
                <ProtectedRoute
                    path="/login"
                    exact
                    component={Login}
                    isAllowed={!user}
                    redirectTo="/"
                />
                <ProtectedRoute
                    path="/track_history"
                    exact
                    component={TracksHistory}
                    isAllowed={user}
                    redirectTo="/login"
                />
                <ProtectedRoute
                    path="/new_artist"
                    exact
                    component={NewArtist}
                    isAllowed={user}
                    redirectTo="/login"
                />
                <ProtectedRoute
                    path="/new_album"
                    exact
                    component={NewAlbum}
                    isAllowed={user}
                    redirectTo="/login"
                />
                <ProtectedRoute
                    path="/new_track"
                    exact
                    component={NewTrack}
                    isAllowed={user}
                    redirectTo="/login"
                />
                <ProtectedRoute
                    path="/moderation"
                    exact
                    component={Moderation}
                    isAllowed={user && user.role === "admin"}
                    redirectTo="/login"
                />
                <Route render={() => <h1>404 Not Found</h1>}/>
            </Switch>
        );
}

export default Routes;