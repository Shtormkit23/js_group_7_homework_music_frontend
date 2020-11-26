import React from "react";
import {Button} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../store/actions/usersActions";
import {useDispatch} from "react-redux";
import ArtistCreationForm from "../AdditionForms/ArtistCreationForm";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    dropDownBtn: {
        color: theme.palette.common.white
    }
}));

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.dropDownBtn}
            >
                Hello, {user.username}
            </Button>
            <Button component={NavLink} to="/track_history" color="inherit">Track History</Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem><NavLink to="/new_artist">Add artist</NavLink></MenuItem>
                <MenuItem><NavLink to="/new_album">Add album</NavLink></MenuItem>
                <MenuItem><NavLink to="/new_track">Add track</NavLink></MenuItem>
                {
                    user && user.role === "admin" &&
                    <MenuItem><NavLink to="/moderation">Moderation</NavLink></MenuItem>
                }
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;