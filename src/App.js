import React from 'react';
import {Switch, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import Artists from "./container/Artists/Artists";
import Albums from "./container/Albums/Albums";
import Tracks from "./container/Tracks/Tracks";

const App = () => (
    <>
        <CssBaseline />
        <AppToolbar/>
        <main>
            <Container>
                <Switch>
                    <Route path="/" exact component={Artists} />
                    <Route path="/albums" exact component={Albums}/>
                    <Route path="/tracks" exact component={Tracks}/>
                    <Route render={() => <h1>404 Not Found</h1>}/>
                </Switch>
            </Container>
        </main>
    </>
);

export default App;

