import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {fbAppId} from "../../constants";
import {facebookLogin} from "../../store/actions/usersActions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(0, 0, 3),
    }
}));

const FacebookLogin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const facebookResponse = response => {
        console.log(response)
        if (response.id) {
            dispatch(facebookLogin(response));
        }
    };

    return <FacebookLoginButton
        appId={fbAppId}
        fields="name,email,picture"
        render={renderProps => (
            <Button
                onClick={renderProps.onClick}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Enter with Facebook
            </Button>
        )}
        callback={facebookResponse}
    />
}

export default FacebookLogin;