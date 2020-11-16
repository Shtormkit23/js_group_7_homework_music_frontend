import React from 'react';
import {Switch, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import Artists from "./container/Artists/Artists";
import Albums from "./container/Albums/Albums";
import Tracks from "./container/Tracks/Tracks";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import {useSelector} from "react-redux";
import TracksHistory from "./container/TrackHistory/TrackHistory";

const App = () => {
const user = useSelector(state => state.users.user);
return(
    <>
        <CssBaseline />
        <AppToolbar user={user}/>
        <main>
            <Container>
                <Switch>
                    <Route path="/" exact component={Artists} />
                    <Route path="/albums" exact component={Albums}/>
                    <Route path="/tracks" exact component={Tracks}/>
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/track_history" exact component={TracksHistory} />
                    <Route render={() => <h1>404 Not Found</h1>}/>
                </Switch>
            </Container>
        </main>
    </>
)};

export default App;

