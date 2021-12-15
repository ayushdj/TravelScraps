import {Grid, TextField} from "@material-ui/core";
import React from "react";

const Style = ({name, handleChange, label, half, autoFocus, type}) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
        />
    </Grid>
)


export default Style;