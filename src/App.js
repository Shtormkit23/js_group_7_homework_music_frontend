import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import {useSelector} from "react-redux";
import Routes from "./Routes";

const App = () => {
const user = useSelector(state => state.users.user);
return(
    <>
        <CssBaseline />
        <AppToolbar user={user}/>
        <main>
            <Container>
                <Routes user={user}/>
            </Container>
        </main>
    </>
)};

export default App;

