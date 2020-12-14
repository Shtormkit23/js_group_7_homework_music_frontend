import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormElement from "../Form/FormElement";
import {useDispatch, useSelector} from "react-redux";
import {createTrack} from "../../store/actions/musicActions";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const TrackCreationForm = ({albums}) => {
    const error = useSelector(state => state.music.error);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        title: "",
        album: "",
        duration: "",
        number: ""
    });

    const submitFormHandler = e => {
        e.preventDefault();
        const newTrack = {...state};
        dispatch(createTrack(newTrack));
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch(e) {
            return undefined;
        }
    };

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <FormElement
                error={getFieldError("title")}
                name="title"
                label="Track title"
                required={true}
                value={state.title}
                onChange={inputChangeHandler}
            />
            <FormElement
                error={getFieldError("album")}
                name="album"
                label="Album"
                required={true}
                select={true}
                options={albums}
                value={state.album}
                onChange={inputChangeHandler}
            />
            <FormElement
                name="duration"
                label="Track duration"
                required={true}
                value={state.duration}
                onChange={inputChangeHandler}
            />
            <FormElement
                error={getFieldError("number")}
                name="number"
                label="Track number"
                required={true}
                multiline={true}
                rows={4}
                value={state.number}
                onChange={inputChangeHandler}
            />
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <Button type="submit" color="primary" id="createTrack">Create</Button>
            </FormControl>
        </form>
    );
};

export default TrackCreationForm;
