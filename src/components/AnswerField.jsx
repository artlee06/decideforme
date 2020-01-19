import React, { useState, useEffect } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

export default function AnswerField({
    values = [],
    setArr = () => console.error("setArr not passed in")
}) {
  return (
    <React.Fragment>
      <div>
            <Autocomplete
              multiple
              id="outlined-search"
              placeholder="Search"
              value={values}
              onChange={(e, value) => setArr(value)}
              autoComplete
              freeSolo
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  variant="outlined"
                  placeholder="Key in your answers here"
                  fullWidth
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
      </div>
    </React.Fragment>
  );
}

