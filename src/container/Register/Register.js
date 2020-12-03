import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {registerUser} from "../../store/actions/usersActions";
import FormElement from "../../components/Form/FormElement";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";
import FileInput from "../../components/Form/FileInput";
import FormControl from "@material-ui/core/FormControl";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        avatarImage: "",
        displayName: ""
    });

    const error = useSelector(state => state.users.registerError);
    const dispatch = useDispatch();

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const formSubmitHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });
        dispatch(registerUser(formData));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch(e) {
            return undefined;
        }
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];

        setState(prevState => ({...prevState, [name]: file}));
    };

    return (
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={formSubmitHandler}
                >
                    <Grid container spacing={2}>
                        <FormElement
                            error={getFieldError("username")}
                            name="username"
                            label="Username"
                            value={state.username}
                            onChange={inputChangeHandler}
                        />
                        <FormElement
                            error={getFieldError("email")}
                            name="email"
                            label="Email"
                            value={state.email}
                            onChange={inputChangeHandler}
                        />
                        <FormElement
                            error={getFieldError("password")}
                            name="password"
                            label="Password"
                            type="password"
                            value={state.password}
                            onChange={inputChangeHandler}
                        />
                        <FormElement
                            error={getFieldError("displayName")}
                            name="displayName"
                            label="Display Name"
                            value={state.displayName}
                            onChange={inputChangeHandler}
                        />
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <FileInput
                                label="Avatar Image"
                                name="avatarImage"
                                onChange={fileChangeHandler}
                            />
                        </FormControl>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <FacebookLogin/>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Register;