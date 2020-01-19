import React from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";

import { useHistory, useLocation } from "react-router-dom";

export default function AnswerPage() {

  const location = useLocation();
  const val = location.state.value;
  const qn = location.state.question;
  const history = useHistory();

  const handleRegular = () => history.push("/Regular");
  const handleSnek = () => history.push("Snek");

  return (
    <React.Fragment>
      <div>
        <Paper elevation={0} square>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="h4">
                  Qn: {qn}
              </Typography>
              <Typography variant="h4">
                  Here is your decision:
              </Typography>
              <Typography variant="h2">{val}</Typography>
              <Box>
                <Button onClick={handleRegular} variant="outlined"> Go to Regular! </Button>
                <Button onClick={handleRegular} variant="outlined"> Go to Snek-Mode! </Button>
              </Box>
            </Box>
          </Paper>
      </div>
    </React.Fragment>
  );
}

