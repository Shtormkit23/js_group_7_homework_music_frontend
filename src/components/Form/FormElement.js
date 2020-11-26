import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";

const FormElement = ({name, label, value, onChange, required, error, type, select, options, multiline, rows}) => {
    let inputChildren = null;
    if(options) {
        inputChildren = options.map((option) => (
            <MenuItem key={option._id} value={option._id}>
                {option.title}
            </MenuItem>
        ))
    }
    return (
        <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                select={select}
                required={required}
                error={!!error}
                helperText={error}
                id={name}
                label={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete={name}
                multiline={multiline}
                rows={rows}
            >
                {inputChildren}
            </TextField>
        </Grid>
    );
};

FormElement.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    error: PropTypes.string,
    select: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    multiline: PropTypes.bool,
    rows: PropTypes.number
};

export default FormElement;