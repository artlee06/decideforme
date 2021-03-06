import React, { useState, useEffect } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

import { useHistory } from "react-router-dom";

export default function MainPage() {
  let history = useHistory();

  const handleRegular = () => history.push("/Regular");
  const handleSnek = () => history.push("Snek");

  return (
    <React.Fragment>
      <div>
        <Paper elevation={0} square>
          <Box>
            <Typography variant="h2">
                Decide For Me
            </Typography>
            <Button variant="contained" onClick={handleRegular}>
              Regular Mode 
            </Button>
            <Button variant="outlined" onClick={handleSnek}>
              SNEK Mode 
            </Button>
          </Box>
        </Paper>
      </div>
    </React.Fragment>
  );
}

